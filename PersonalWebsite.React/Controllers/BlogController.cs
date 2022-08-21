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
    }
}
