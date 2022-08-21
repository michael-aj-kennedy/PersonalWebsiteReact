using PersonalWebsite.Data.Interfaces;
using System.Text.Json.Serialization;

namespace PersonalWebsite.Data.Models
{
    public class Category : ICategory
    {
        /// <inheritdoc/>
        [JsonPropertyName("id")]
        public int Id { get; set; }

        /// <inheritdoc/>
        [JsonPropertyName("name")]
        public string Name { get; set; } = string.Empty;

        /// <inheritdoc/>
        [JsonPropertyName("showArticleList")]
        public bool ShowArticleList { get; set; }

        /// <inheritdoc/>
        [JsonPropertyName("articleSource")]
        public string ArticleSource { get; set; } = string.Empty;

        /// <inheritdoc/>
        [JsonPropertyName("default")]
        public bool Default { get; set; }
    }
}
