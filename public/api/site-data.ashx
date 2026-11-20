<%@ WebHandler Language="C#" Class="SiteDataHandler" %>

using System;
using System.IO;
using System.Web;
using System.Web.Script.Serialization;

public class SiteDataHandler : IHttpHandler
{
    private static readonly object _fileLock = new object();

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "application/json; charset=utf-8";
        context.Response.AddHeader("Access-Control-Allow-Origin", "*");
        context.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        context.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

        if (context.Request.HttpMethod == "OPTIONS")
        {
            context.Response.StatusCode = 200;
            return;
        }

        string dataDir = context.Server.MapPath("~/App_Data");
        if (!Directory.Exists(dataDir))
        {
            Directory.CreateDirectory(dataDir);
        }

        string dataFilePath = Path.Combine(dataDir, "site_data.json");

        try
        {
            if (context.Request.HttpMethod == "GET")
            {
                // Read global site data from server
                lock (_fileLock)
                {
                    if (File.Exists(dataFilePath))
                    {
                        string jsonContent = File.ReadAllText(dataFilePath, System.Text.Encoding.UTF8);
                        context.Response.Write(jsonContent);
                    }
                    else
                    {
                        // Return default empty/fallback indicator
                        context.Response.Write("{\"status\":\"not_initialized\"}");
                    }
                }
            }
            else if (context.Request.HttpMethod == "POST")
            {
                // Write/update global site data to server
                string body = "";
                using (var reader = new StreamReader(context.Request.InputStream, System.Text.Encoding.UTF8))
                {
                    body = reader.ReadToEnd();
                }

                if (string.IsNullOrEmpty(body))
                {
                    context.Response.StatusCode = 400;
                    context.Response.Write("{\"success\":false,\"error\":\"Empty payload\"}");
                    return;
                }

                lock (_fileLock)
                {
                    File.WriteAllText(dataFilePath, body, System.Text.Encoding.UTF8);
                }

                context.Response.Write("{\"success\":true,\"message\":\"Site content synchronized to server successfully!\",\"timestamp\":\"" + DateTime.UtcNow.ToString("o") + "\"}");
            }
            else
            {
                context.Response.StatusCode = 405;
                context.Response.Write("{\"success\":false,\"error\":\"Method Not Allowed\"}");
            }
        }
        catch (Exception ex)
        {
            context.Response.StatusCode = 500;
            context.Response.Write("{\"success\":false,\"error\":\"" + HttpUtility.JavaScriptStringEncode(ex.Message) + "\"}");
        }
    }

    public bool IsReusable
    {
        get { return true; }
    }
}
