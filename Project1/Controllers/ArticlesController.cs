using Microsoft.AspNetCore.Mvc;
using PersonalWebsite.Data.Models;
using PersonalWebsite.Data.Readers;

namespace Project1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Articles : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly DataReader _dataReader;

        public Articles(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
            //TODO: Inject IDataReader
            _dataReader = new DataReader();
        }

        /// <summary>
        /// Retrieve a list of categories with basic statistics.
        /// 
        /// </summary>
        [HttpGet]
        [Route("categories")]
        public async Task<ActionResult<List<Category>>> GetCategories()
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
