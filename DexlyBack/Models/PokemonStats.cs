using System.Text.Json.Serialization;

namespace Dexly.Models;

public class PokemonStats
{
    public int Hp { get; set; }
    public int Attack { get; set; }
    public int Defense { get; set; }
    public int SpecialAttack { get; set; }
    public int SpecialDefense { get; set; }
    public int Speed { get; set; }

    [JsonIgnore]
    public int Total => Hp + Attack + Defense + SpecialAttack + SpecialDefense + Speed;
}