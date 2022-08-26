using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Interfaces
{
    public interface IIndexReader
    {
        /// <summary>
        /// Executes read operation.
        /// </summary>
        Task<List<Category>> Read();
    }
}