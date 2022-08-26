namespace PersonalWebsite.Data.Interfaces
{
    public interface ICategory
    {
        /// <summary>
        /// Category Id.
        /// </summary>
        int Id { get; set; }

        /// <summary>
        /// Category Name.
        /// </summary>
        string Name { get; set; }

        /// <summary>
        /// Indicates the id of the category used to override the article list.
        /// </summary>
        int? OverrideArticleListCategoryId { get; set; }

        /// <summary>
        /// File name of associated article list.
        /// </summary>
        string ArticleSource { get; set; }

        /// <summary>
        /// Indicates that the category should be selected by default.
        /// </summary>
        bool Default { get; set; }
    }
}
