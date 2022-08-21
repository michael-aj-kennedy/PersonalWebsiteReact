// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

var searchLocation = $"{Environment.CurrentDirectory}\\Data";
var reader = new PersonalWebsite.Data.Readers.IndexFileReader(searchLocation);
await reader.Read();

foreach (var category in reader.Categories)
{
    var categoryReader = new PersonalWebsite.Data.Readers.CategoryFileReader(searchLocation);
    await categoryReader.Read(category);

    foreach (var articleSummary in categoryReader.ArticleSummaries)
    {
        var articleReader = new PersonalWebsite.Data.Readers.ArticleFileReader(searchLocation);
        await articleReader.Read(articleSummary);


    }

}

