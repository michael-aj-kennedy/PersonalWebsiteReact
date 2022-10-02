using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Interfaces
{
    public interface ICategoryContent
    {
        /// <summary>
        /// Category Id.
        /// </summary>
        int CategoryId { get; set; }

        /// <summary>
        /// Category Name.
        /// </summary>
        string CategoryName { get; set; }

        /// <summary>
        /// Indicates that the article list is being overridden.
        /// </summary>
        bool OverrideArticleList { get; set; }

        /// <summary>
        /// Article summaries associated with category.
        /// </summary>
        ArticleSummary[] ArticleSummaries { get; set; }

        /// <summary>
        /// First article to select.
        /// </summary>
        string DefaultArticleId { get; set; }

        /// <summary>
        /// Category name that the article summary list is associated with.
        /// </summary>
        string SearchCategoryName { get; set; }

        /// <summary>
        /// Indicates that the article list will be hidden.
        /// </summary>
        public bool HideArticleList { get; set; }
    }
}
