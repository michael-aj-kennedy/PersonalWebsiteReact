using System.Diagnostics;
using System.Text.Json;

namespace PersonalWebsite.Data.Readers
{
    public class JsonDeserialiser<T>
    {
        internal async Task<string> ReadFile(string filePath)
        {
            var returnData = string.Empty;

            try
            {
                if (File.Exists(filePath))
                {
                    returnData = await File.ReadAllTextAsync(filePath);
                }
                else
                {
                    Trace.TraceError($"JsonDeserialiser.ReadFile() : File {filePath} not found.");
                }
            }
            catch (Exception ex)
            {
                Trace.TraceError($"JsonDeserialiser.ReadFile() : Error reading {filePath}.\r\n{ex}");
            }

            return returnData;
        }

        internal T? Deserialise(string json)
        {
            T? returnData = default;

            try
            {
                if (!string.IsNullOrWhiteSpace(json))
                {
                    returnData = JsonSerializer.Deserialize<T>(json);
                }
                else
                {
                    Trace.TraceError($"JsonDeserialiser.Deserialise() : No JSON content.");
                }
            }
            catch (Exception ex)
            {
                Trace.TraceError($"JsonDeserialiser.Deserialise() : Error deserialising content.\r\n{ex}");
            }

            return returnData ?? default;
        }
    }
}
