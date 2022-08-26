using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Interfaces
{
    public interface ICategoryReader
    {
        /// <summary>
        /// Executes read operation.
        /// </summary>
        /// <param name="category">Target category</param>
        Task<List<ArticleSummary>> Read(ICategory category);

        /// <summary>
        /// Find the first article in the list.
        /// </summary>
        Task<ArticleSummary?> GetTopArticleSummary(ICategory category);
    }
}