using Microsoft.AspNetCore.Mvc;
using PersonalWebsite.Data.Interfaces;
using PersonalWebsite.Data.Models;

namespace PersonalWebsite.React.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IDataReader _dataReader;

        public BlogController(IDataReader dataReader)
        {
            _dataReader = dataReader;
        }

        [HttpGet]
        [Route("categories")]
        public async Task<ActionResult<List<Category>>> Categories()
        {
            var categories = await _dataReader.ReadCategories();

            if (categories == null || !categories.Any())
            {
                return NoContent();
            }

            return categories;
        }

        [Route("articles")]
        public async Task<ActionResult<CategoryContent>> Articles()
        {
            return await Articles("");
        }

        [Route("articles/{search}")]
        public async Task<ActionResult<CategoryContent>> Articles(string search)
        {
            var articles = await _dataReader.GetCategoryArticles(search);

            if (articles == null || articles.ArticleSummaries == null || !articles.ArticleSummaries.Any())
            {
                return NoContent();
            }

            return articles;
        }
    }
}
