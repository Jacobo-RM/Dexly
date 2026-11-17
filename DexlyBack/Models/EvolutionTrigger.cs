using System.Text.Json.Serialization;

namespace Dexly.Models;

[JsonConverter(typeof(JsonStringEnumConverter<EvolutionTrigger>))]
public enum EvolutionTrigger
{
    [JsonStringEnumMemberName("level-up")] LevelUp,
    [JsonStringEnumMemberName("item")] Item,
    [JsonStringEnumMemberName("trade")] Trade
}