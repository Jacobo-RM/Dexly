using System.Text.Json.Serialization;

namespace Dexly.Models;

[JsonConverter(typeof(JsonStringEnumConverter<PokemonType>))]
public enum PokemonType
{
    [JsonStringEnumMemberName("normal")] Normal,
    [JsonStringEnumMemberName("fire")] Fire,
    [JsonStringEnumMemberName("water")] Water,
    [JsonStringEnumMemberName("electric")] Electric,
    [JsonStringEnumMemberName("grass")] Grass,
    [JsonStringEnumMemberName("ice")] Ice,
    [JsonStringEnumMemberName("fighting")] Fighting,
    [JsonStringEnumMemberName("poison")] Poison,
    [JsonStringEnumMemberName("ground")] Ground,
    [JsonStringEnumMemberName("flying")] Flying,
    [JsonStringEnumMemberName("psychic")] Psychic,
    [JsonStringEnumMemberName("bug")] Bug,
    [JsonStringEnumMemberName("rock")] Rock,
    [JsonStringEnumMemberName("ghost")] Ghost,
    [JsonStringEnumMemberName("dragon")] Dragon,
    [JsonStringEnumMemberName("dark")] Dark,
    [JsonStringEnumMemberName("steel")] Steel,
    [JsonStringEnumMemberName("fairy")] Fairy

    
}