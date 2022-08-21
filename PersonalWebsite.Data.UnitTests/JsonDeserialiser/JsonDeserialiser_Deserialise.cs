using NUnit.Framework;
using PersonalWebsite.Data.Models;
using PersonalWebsite.Data.Readers;

namespace PersonalWebsite.Data.UnitTests.JsonDeserialiser
{
    internal class JsonDeserialiser_Deserialise
    {
        [Test]
        public void Deserialise_ReturnsObject()
        {
            // arrange
            var deserialiser = new JsonDeserialiser<List<Category>>();
            var exampleContent = "[{\"id\": 1,\"name\": \"About\",\"showArticleList\": false,\"articles\": []}]";

            // act
            var result = deserialiser.Deserialise(exampleContent) ?? new List<Category>();

            // assert
            Assert.IsTrue(result.Any());
        }
    }
}
