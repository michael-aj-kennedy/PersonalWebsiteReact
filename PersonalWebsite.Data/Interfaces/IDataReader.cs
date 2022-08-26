using PersonalWebsite.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
    }
}
