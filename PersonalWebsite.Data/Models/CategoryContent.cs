﻿using PersonalWebsite.Data.Interfaces;

namespace PersonalWebsite.Data.Models
{
    public class CategoryContent : ICategoryContent
    {
        /// <inheritdoc/>
        public int CategoryId { get; set; }

        /// <inheritdoc/>
        public string CategoryName { get; set; } = "";

        /// <inheritdoc/>
        public bool OverrideArticleList { get; set; }

        /// <inheritdoc/>
        public ArticleSummary[] ArticleSummaries { get; set; } = new ArticleSummary[] {};

        /// <inheritdoc/>
        public string DefaultArticleId { get; set; } = "";

        /// <inheritdoc/>
        public string SearchCategoryName { get; set; } = "";

        /// <inheritdoc/>
        public bool HideArticleList { get; set; }
    }
}
