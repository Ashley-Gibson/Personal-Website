﻿using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Xml;

namespace PersonalWebsiteDashboard
{
    public class XMLParser
    {
        public struct GDBlog_Item
        {
            public string title;
            public string published;
            public string updated;
            public string author;
            public string category;
            public string content;
            public string link;
            public string imageSrc;

            public string other;    // For picking out Elements I have missed through parsing
        }
        public struct KBlog_Item
        {
            public string title;
            public string description;
            public string pubDate;            
            public string link;

            public string other;    // For picking out Elements I have missed through parsing
        }
        public struct TWPEBlog_Item
        {
            public string title;
            public string description;
            public string category;
            public string pubDate;
            public string content;
            public string link;
            public string imageSrc;

            public string other;    // For picking out Elements I have missed through parsing
        }
        public struct VSBlog_Item
        {
            public string title;
            public string link;
            public string pubDate;
            public string creator;
            public string category;
            public string description;
            public string encodedContent;

            public string other;    // For picking out Elements I have missed through parsing
        }

        public static string ParseGoogleDevsBlogResponse(HttpResponseMessage response)
        {
            // Reading XML
            XmlDocument xml = new XmlDocument();

            List<GDBlog_Item> itemList = new List<GDBlog_Item>();

            if (response.IsSuccessStatusCode)
            {
                // If successful response then parse XML
                xml.LoadXml(response.Content.ReadAsStringAsync().Result);

                // Extract XML Element Types
                XmlNodeList items = xml.ChildNodes;

                // Load data into XML items first
                foreach (XmlNode item in items[3])
                {
                    GDBlog_Item temp = new GDBlog_Item();

                    if (item.Name == "entry")
                    {
                        foreach (XmlElement element in item)
                        {
                            // Determine XML Element Type
                            switch (element.Name)
                            {
                                case "title":
                                    temp.title = element.InnerText;
                                    break;
                                case "published":
                                    temp.published = ConvertToShortDate(element.InnerText);
                                    break;
                                case "updated":
                                    temp.updated = ConvertToShortDate(element.InnerText);
                                    break;
                                case "author":
                                    temp.author = element.FirstChild.InnerText;
                                    break;
                                case "category":
                                    temp.category = element.InnerText;
                                    break;
                                case "content":
                                    temp.content = element.InnerText;
                                    break;
                                case "feedburner:origLink":
                                    temp.link = element.InnerText;
                                    break;
                                // For picking out Elements I have missed through parsing
                                default:
                                    temp.other += (";" + element.Name);
                                    break;
                            }
                        }

                        itemList.Add(temp);
                    }
                }
            }
            else
            {
                // If unsuccessful response then output the Error
                return "Error: {0} ({1})" + (int)response.StatusCode + response.ReasonPhrase;
            }

            return ResponseFormatter.GDBlog_FormatResponse(itemList);
        }

        public static string ParseKenticoBlogResponse(HttpResponseMessage response)
        {
            // Reading XML
            XmlDocument xml = new XmlDocument();

            List<KBlog_Item> itemList = new List<KBlog_Item>();

            if (response.IsSuccessStatusCode)
            {
                // If successful response then parse XML
                xml.LoadXml(response.Content.ReadAsStringAsync().Result);

                // Extract XML Element Types
                XmlNodeList items = xml.SelectNodes("/rss/channel/item");

                // Load data into XML items first
                foreach (XmlNode item in items)
                {
                    KBlog_Item temp = new KBlog_Item();

                    foreach (XmlElement element in item)
                    {
                        // Determine XML Element Type
                        switch (element.Name)
                        {
                            case "title":
                                temp.title = element.InnerText;
                                break;
                            case "link":
                                temp.link = element.InnerText;
                                break;
                            case "pubDate":
                                temp.pubDate = ConvertToShortDate(element.InnerText);
                                break;
                            case "description":
                                temp.description = element.InnerText;
                                break;
                            default:
                                temp.other += (";" + element.Name);
                                break;
                        }
                    }

                    itemList.Add(temp);
                }
            }
            else
            {
                // If unsuccessful response then output the Error
                return "Error: {0} ({1})" + (int)response.StatusCode + response.ReasonPhrase;
            }

            return ResponseFormatter.KBlog_FormatResponse(itemList);
        }

        public static string ParseTransferWiseProdEngBlogResponse(HttpResponseMessage response)
        {
            // Reading XML
            XmlDocument xml = new XmlDocument();

            List<TWPEBlog_Item> itemList = new List<TWPEBlog_Item>();

            if (response.IsSuccessStatusCode)
            {
                // If successful response then parse XML
                xml.LoadXml(response.Content.ReadAsStringAsync().Result);

                // Extract XML Element Types
                XmlNodeList items = xml.SelectNodes("/rss/channel/item");

                // Load data into XML items first
                foreach (XmlNode item in items)
                {
                    TWPEBlog_Item temp = new TWPEBlog_Item();

                    foreach (XmlElement element in item)
                    {
                        // Determine XML Element Type
                        switch (element.Name)
                        {
                            case "title":
                                temp.title = element.InnerText;
                                break;
                            case "link":
                                temp.link = element.InnerText;
                                break;
                            case "pubDate":
                                temp.pubDate = ConvertToShortDate(element.InnerText);
                                break;
                            case "category":
                                temp.category += element.InnerText + ";";
                                break;
                            case "description":
                                temp.description = element.InnerText;
                                break;
                            case "content:encoded":
                                temp.content = element.InnerText;
                                break;
                            case "media:content":
                                temp.imageSrc = element.InnerText;
                                break;
                            default:
                                temp.other += (";" + element.Name);
                                break;
                        }
                    }

                    itemList.Add(temp);
                }
            }
            else
            {
                // If unsuccessful response then output the Error
                return "Error: {0} ({1})" + (int)response.StatusCode + response.ReasonPhrase;
            }

            return ResponseFormatter.TWPEBlog_FormatResponse(itemList);
        }

        public static string ParseVisualStudioBlogResponse(HttpResponseMessage response)
        {
            // Reading XML
            XmlDocument xml = new XmlDocument();

            List<VSBlog_Item> itemList = new List<VSBlog_Item>();

            if (response.IsSuccessStatusCode)
            {
                // If successful response then parse XML
                xml.LoadXml(response.Content.ReadAsStringAsync().Result);

                // Extract XML Element Types
                XmlNodeList items = xml.SelectNodes("/rss/channel/item");             
                
                // Load data into XML items first
                foreach (XmlNode item in items)
                {
                    VSBlog_Item temp = new VSBlog_Item();

                    foreach (XmlElement element in item)
                    {
                        // Determine XML Element Type
                        switch (element.Name)
                        {
                            case "title":
                                temp.title = element.InnerText;
                                break;
                            case "link":
                                temp.link = element.InnerText;
                                break;
                            case "pubDate":
                                temp.pubDate = ConvertToShortDate(element.InnerText);
                                break;
                            case "dc:creator":
                                temp.creator = element.InnerText;
                                break;
                            case "category":
                                temp.category = element.InnerText;
                                break;
                            case "description":
                                temp.description = element.InnerText;
                                break;
                            case "content:encoded":
                                temp.encodedContent = element.InnerText;
                                break;
                            default:
                                temp.other += (";" + element.Name);
                                break;
                        }                        
                    }

                    itemList.Add(temp);
                }
            }
            else
            {
                // If unsuccessful response then output the Error
                return "Error: {0} ({1})" + (int)response.StatusCode + response.ReasonPhrase;
            }

            return ResponseFormatter.VSBlog_FormatResponse(itemList);
        }

        // Change Short Date functionality here
        private static string ConvertToShortDate(string longDate)
        {
            DateTime convertedDate = Convert.ToDateTime(longDate);

            string shortDate = convertedDate.ToShortDateString() + " " + convertedDate.ToShortTimeString();

            return shortDate;
        }
    }
}