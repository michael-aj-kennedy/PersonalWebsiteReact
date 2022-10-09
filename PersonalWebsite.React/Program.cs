using PersonalWebsite.Data.Interfaces;
using PersonalWebsite.Data.Readers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();


var assembly = System.Reflection.Assembly.GetAssembly(typeof(Program));
var assemblyLocation = assembly?.Location ?? "";
var searchLocation = $"{assemblyLocation.Substring(0, assemblyLocation.LastIndexOf("\\"))}\\Data";
builder.Services.AddTransient<IDataReader>(s => new DataReader(new IndexFileReader(searchLocation), new CategoryFileReader(searchLocation), new ArticleFileReader(searchLocation)));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
