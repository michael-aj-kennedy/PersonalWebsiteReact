using PersonalWebsite.Data.Interfaces;
using System.Text.Json.Serialization;

namespace PersonalWebsite.Data.Models
{
    public class Article : IArticle
    {
        [JsonPropertyName("content")]
        public string Content { get; set; } = string.Empty;

        [JsonPropertyName("summary")]
        public ArticleSummary Summary { get; set; } = new ArticleSummary();
    }
}
