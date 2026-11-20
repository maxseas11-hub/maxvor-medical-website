<%@ WebHandler Language="C#" Class="ImageUploadHandler" %>

using System;
using System.IO;
using System.Web;
using System.Collections.Generic;

public class ImageUploadHandler : IHttpHandler
{
    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "application/json; charset=utf-8";
        context.Response.AddHeader("Access-Control-Allow-Origin", "*");
        context.Response.AddHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

        if (context.Request.HttpMethod == "OPTIONS")
        {
            context.Response.StatusCode = 200;
            return;
        }

        if (context.Request.HttpMethod != "POST")
        {
            context.Response.StatusCode = 405;
            context.Response.Write("{\"success\":false,\"error\":\"POST method required\"}");
            return;
        }

        try
        {
            if (context.Request.Files.Count == 0)
            {
                context.Response.StatusCode = 400;
                context.Response.Write("{\"success\":false,\"error\":\"No files uploaded\"}");
                return;
            }

            string uploadsDir = context.Server.MapPath("~/assets/uploads");
            if (!Directory.Exists(uploadsDir))
            {
                Directory.CreateDirectory(uploadsDir);
            }

            List<string> uploadedUrls = new List<string>();

            for (int i = 0; i < context.Request.Files.Count; i++)
            {
                HttpPostedFile file = context.Request.Files[i];
                if (file != null && file.ContentLength > 0)
                {
                    string ext = Path.GetExtension(file.FileName).ToLower();
                    if (ext == ".png" || ext == ".jpg" || ext == ".jpeg" || ext == ".webp" || ext == ".svg")
                    {
                        string safeFileName = "img_" + DateTime.UtcNow.ToString("yyyyMMdd_HHmmss_fff") + "_" + i + ext;
                        string savePath = Path.Combine(uploadsDir, safeFileName);
                        file.SaveAs(savePath);
                        uploadedUrls.Add("/assets/uploads/" + safeFileName);
                    }
                }
            }

            if (uploadedUrls.Count == 0)
            {
                context.Response.StatusCode = 400;
                context.Response.Write("{\"success\":false,\"error\":\"No valid image files found\"}");
                return;
            }

            string firstUrl = uploadedUrls[0];
            string urlsJsonArray = "[\"" + string.Join("\",\"", uploadedUrls) + "\"]";

            context.Response.Write("{\"success\":true,\"url\":\"" + firstUrl + "\",\"urls\":" + urlsJsonArray + ",\"count\":" + uploadedUrls.Count + "}");
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
