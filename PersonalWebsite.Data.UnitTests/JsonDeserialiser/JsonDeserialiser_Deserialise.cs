using Xunit;
using PersonalWebsite.Data.Models;
using PersonalWebsite.Data.Readers;

namespace PersonalWebsite.Data.UnitTests.JsonDeserialiser
{
    public class JsonDeserialiser_Deserialise
    {
        [Fact]
        public void Deserialise_ReturnsObject()
        {
            // arrange
            var deserialiser = new JsonDeserialiser<List<Category>>();
            var exampleContent = "[{\"id\": 1,\"name\": \"About\",\"showArticleList\": false,\"articles\": []}]";

            // act
            var result = deserialiser.Deserialise(exampleContent) ?? new List<Category>();

            // assert
            Assert.True(result.Any());
        }
    }
}
