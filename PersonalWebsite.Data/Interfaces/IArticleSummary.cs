namespace PersonalWebsite.Data.Interfaces
{
    public interface IArticleSummary
    {
        /// <summary>
        /// Item Id.
        /// </summary>
        int Id { get; set; }

        /// <summary>
        /// Article Name (string identifier).
        /// </summary>
        string Name { get; set; }

        /// <summary>
        /// Article Title.
        /// </summary>
        string Title { get; set; }

        /// <summary>
        /// Article Summary.
        /// </summary>
        string Summary { get; set; }

        /// <summary>
        /// External URL.
        /// </summary>
        string Url { get; set; }

        /// <summary>
        /// Article date.
        /// </summary>
        DateTime? Date { get; set; }

        /// <summary>
        /// Article data file.
        /// </summary>
        string ArticleDataFile { get; set; }

        /// <summary>
        /// Indicates that an article is pinned to the top of the category list.
        /// </summary>
        bool Pinned { get; set; }
    }
}
