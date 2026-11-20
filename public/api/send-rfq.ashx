<%@ WebHandler Language="C#" Class="SendRfqHandler" %>
using System;
using System.Web;
using System.Net.Sockets;
using System.Net.Security;
using System.IO;
using System.Text;

public class SendRfqHandler : IHttpHandler {
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "application/json; charset=utf-8";
        
        context.Response.AddHeader("Access-Control-Allow-Origin", "*");
        context.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        context.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type");
        
        if (context.Request.HttpMethod == "OPTIONS") {
            context.Response.StatusCode = 200;
            return;
        }

        string smtpUser = "sales@maxvor.com";
        string smtpPass = "fou6mJfCLRBSQ61B";

        if (context.Request.HttpMethod == "GET") {
            context.Response.Write("{\"status\":\"active\",\"message\":\"MAXVOR SMTP Mailer is Active and Ready!\"}");
            return;
        }
        
        try {
            string json;
            using (var reader = new StreamReader(context.Request.InputStream, Encoding.UTF8)) {
                json = reader.ReadToEnd();
            }
            
            string buyerName = GetJsonVal(json, "Buyer_Name");
            if (string.IsNullOrEmpty(buyerName)) buyerName = "Buyer";
            
            string buyerEmail = GetJsonVal(json, "Buyer_Email");
            string buyerPhone = GetJsonVal(json, "Buyer_Phone");
            string companyName = GetJsonVal(json, "Company_Name");
            string country = GetJsonVal(json, "Country");
            string volume = GetJsonVal(json, "Estimated_Volume");
            string categories = GetJsonVal(json, "Interested_Categories");
            string certs = GetJsonVal(json, "Required_Certifications");
            string oem = GetJsonVal(json, "Custom_OEM_Requested");
            string specs = GetJsonVal(json, "Specific_Requirements");
            string inquiryId = GetJsonVal(json, "Inquiry_ID");
            if (string.IsNullOrEmpty(inquiryId)) inquiryId = "RFQ-" + DateTime.Now.ToString("yyyyMMdd-HHmm");

            StringBuilder body = new StringBuilder();
            body.Append("<div style='font-family:Arial,sans-serif;max-width:650px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;'>");
            body.Append("<div style='background:#0A2540;color:#fff;padding:20px;text-align:center;'>");
            body.Append("<h2 style='margin:0;font-size:22px;'>MAXVOR Official Website RFQ Inquiry</h2>");
            body.Append("<p style='margin:5px 0 0;color:#94a3b8;font-size:13px;'>Inquiry Ticket: " + inquiryId + "</p>");
            body.Append("</div>");
            body.Append("<div style='padding:24px;background:#f8fafc;'>");
            body.Append("<table style='width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.05);'>");
            body.Append("<tr><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#475569;width:35%;'>Buyer Name</td><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f172a;font-weight:bold;'>" + buyerName + "</td></tr>");
            body.Append("<tr><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#475569;'>Buyer Email</td><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0284c7;font-weight:bold;'><a href='mailto:" + buyerEmail + "'>" + buyerEmail + "</a></td></tr>");
            body.Append("<tr><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#475569;'>Phone / WhatsApp</td><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f172a;'>" + (string.IsNullOrEmpty(buyerPhone) ? "N/A" : buyerPhone) + "</td></tr>");
            body.Append("<tr><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#475569;'>Company Name</td><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f172a;'>" + (string.IsNullOrEmpty(companyName) ? "N/A" : companyName) + "</td></tr>");
            body.Append("<tr><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#475569;'>Country / Region</td><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f172a;'>" + (string.IsNullOrEmpty(country) ? "N/A" : country) + "</td></tr>");
            body.Append("<tr><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#475569;'>Estimated Volume</td><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f172a;'>" + (string.IsNullOrEmpty(volume) ? "N/A" : volume) + "</td></tr>");
            body.Append("<tr><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#475569;'>Target Categories</td><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f172a;'>" + (string.IsNullOrEmpty(categories) ? "N/A" : categories) + "</td></tr>");
            body.Append("<tr><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#475569;'>Required Certifications</td><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0d9488;font-weight:bold;'>" + (string.IsNullOrEmpty(certs) ? "None Specified" : certs) + "</td></tr>");
            body.Append("<tr><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#475569;'>Custom OEM Requested</td><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f172a;'>" + (string.IsNullOrEmpty(oem) ? "No" : oem) + "</td></tr>");
            body.Append("<tr><td style='padding:12px 16px;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#475569;'>Specifications / Notes</td><td style='padding:12px 16px;color:#0f172a;'>" + (string.IsNullOrEmpty(specs) ? "Standard catalog request" : specs) + "</td></tr>");
            body.Append("</table>");
            body.Append("<div style='margin-top:24px;text-align:center;'>");
            body.Append("<a href='mailto:" + buyerEmail + "?subject=Re: [MAXVOR Quotation] " + inquiryId + "' style='display:inline-block;background:#0d9488;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:bold;font-size:15px;'>✉️ 一键直接回复给买家 (" + buyerName + ": " + buyerEmail + ")</a>");
            body.Append("</div>");
            body.Append("</div>");
            body.Append("<div style='background:#f1f5f9;padding:12px;text-align:center;font-size:11px;color:#64748b;'>This is an official B2B RFQ notification from MAXVOR (maxvor.com)</div>");
            body.Append("</div>");

            string subject = "[MAXVOR RFQ] " + buyerName + " - " + inquiryId;
            string senderDisplayName = "MAXVOR Website";

            bool sent = false;
            string lastError = "";

            var targetHosts = new string[] { "smtp.qiye.aliyun.com", "smtp.mxhichina.com" };

            foreach (var h in targetHosts) {
                try {
                    SendDirectSmtpSsl(h, 465, smtpUser, smtpPass, senderDisplayName, buyerName, buyerEmail, "sales@maxvor.com", subject, body.ToString());
                    sent = true;
                    break;
                } catch (Exception ex) {
                    lastError += "[" + h + ": " + ex.Message + "] ";
                }
            }

            if (sent) {
                context.Response.Write("{\"success\":true,\"message\":\"Inquiry sent successfully\"}");
            } else {
                context.Response.StatusCode = 500;
                context.Response.Write("{\"success\":false,\"error\":\"" + lastError.Replace("\"", "'") + "\"}");
            }
        } catch (Exception ex) {
            context.Response.StatusCode = 500;
            context.Response.Write("{\"success\":false,\"error\":\"" + ex.Message.Replace("\"", "'") + "\"}");
        }
    }

    private void SendDirectSmtpSsl(string host, int port, string user, string pass, string senderDisplayName, string buyerName, string buyerEmail, string recipient, string subject, string htmlBody) {
        using (TcpClient tcp = new TcpClient()) {
            tcp.Connect(host, port);
            using (SslStream ssl = new SslStream(tcp.GetStream(), false)) {
                ssl.AuthenticateAsClient(host);
                using (StreamReader reader = new StreamReader(ssl, Encoding.UTF8))
                using (StreamWriter writer = new StreamWriter(ssl, new UTF8Encoding(false)) { NewLine = "\r\n", AutoFlush = true }) {
                    ReadSmtpReply(reader);
                    
                    writer.WriteLine("EHLO maxvor.com");
                    ReadSmtpReply(reader);

                    writer.WriteLine("AUTH LOGIN");
                    ReadSmtpReply(reader);

                    writer.WriteLine(Convert.ToBase64String(Encoding.UTF8.GetBytes(user)));
                    ReadSmtpReply(reader);

                    writer.WriteLine(Convert.ToBase64String(Encoding.UTF8.GetBytes(pass)));
                    ReadSmtpReply(reader);

                    writer.WriteLine("MAIL FROM:<" + user + ">");
                    ReadSmtpReply(reader);

                    writer.WriteLine("RCPT TO:<" + recipient + ">");
                    ReadSmtpReply(reader);

                    writer.WriteLine("DATA");
                    ReadSmtpReply(reader);

                    string encodedSenderName = "=?utf-8?B?" + Convert.ToBase64String(Encoding.UTF8.GetBytes(senderDisplayName)) + "?=";
                    string encodedSubject = "=?utf-8?B?" + Convert.ToBase64String(Encoding.UTF8.GetBytes(subject)) + "?=";

                    writer.WriteLine("From: " + encodedSenderName + " <" + user + ">");
                    writer.WriteLine("To: MAXVOR Sales Team <" + recipient + ">");
                    
                    // Standard Clean Reply-To address format
                    if (!string.IsNullOrEmpty(buyerEmail)) {
                        writer.WriteLine("Reply-To: " + buyerEmail.Trim());
                    }
                    
                    writer.WriteLine("Subject: " + encodedSubject);
                    writer.WriteLine("MIME-Version: 1.0");
                    writer.WriteLine("Content-Type: text/html; charset=utf-8");
                    writer.WriteLine("Content-Transfer-Encoding: base64");
                    writer.WriteLine();

                    byte[] bodyBytes = Encoding.UTF8.GetBytes(htmlBody);
                    string base64Body = Convert.ToBase64String(bodyBytes);
                    for (int i = 0; i < base64Body.Length; i += 76) {
                        int len = Math.Min(76, base64Body.Length - i);
                        writer.WriteLine(base64Body.Substring(i, len));
                    }

                    writer.WriteLine(".");
                    ReadSmtpReply(reader);

                    writer.WriteLine("QUIT");
                }
            }
        }
    }

    private string ReadSmtpReply(StreamReader reader) {
        StringBuilder sb = new StringBuilder();
        while (true) {
            string line = reader.ReadLine();
            if (line == null) break;
            sb.AppendLine(line);
            if (line.Length >= 3) {
                if (line.StartsWith("4") || line.StartsWith("5")) {
                    throw new Exception(line);
                }
                if (line.Length == 3 || line[3] == ' ') {
                    break;
                }
            }
        }
        return sb.ToString().TrimEnd();
    }

    private string GetJsonVal(string json, string key) {
        if (string.IsNullOrEmpty(json)) return "";
        string pattern = "\"" + key + "\"";
        int idx = json.IndexOf(pattern);
        if (idx == -1) return "";
        int colon = json.IndexOf(":", idx + pattern.Length);
        if (colon == -1) return "";
        int start = colon + 1;
        while (start < json.Length && (json[start] == ' ' || json[start] == '\t' || json[start] == '\r' || json[start] == '\n')) start++;
        if (start >= json.Length) return "";
        if (json[start] == '"') {
            start++;
            int end = json.IndexOf("\"", start);
            if (end == -1) return "";
            return json.Substring(start, end - start).Replace("\\\"", "\"").Replace("\\\\", "\\");
        } else {
            int end = start;
            while (end < json.Length && json[end] != ',' && json[end] != '}' && json[end] != '\r' && json[end] != '\n') end++;
            return json.Substring(start, end - start).Trim();
        }
    }
    
    public bool IsReusable {
        get { return false; }
    }
}
