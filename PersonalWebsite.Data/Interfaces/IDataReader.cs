using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Interfaces
{
    public interface IDataReader
    {
        /// <summary>
        /// Read all categories.
        /// </summary>
        /// <returns></returns>
        Task<List<Category>> ReadCategories();

        /// <summary>
        /// Get the content of a given category or find the category associated with a given article
        /// </summary>
        /// <param name="search"></param>
        /// <returns></returns>
        Task<CategoryContent> GetCategoryArticles(string search);

        /// <summary>
        /// Get the full details of the specified article.
        /// </summary>
        /// <param name="articleIdentifier"></param>
        /// <returns></returns>
        Task<Article> GetArticle(string articleIdentifier);
    }
}
