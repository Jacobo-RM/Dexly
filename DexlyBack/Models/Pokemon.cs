namespace Dexly.Models;


public class Pokemon
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int Generation { get; set; }
    public List<PokemonType> Types { get; set; } = new();
    public double HeightM { get; set; }
    public double WeightKg { get; set; }
    public bool IsLegendary { get; set; }
    public PokemonStats Stats { get; set; } = new();
    public List<PokemonAbility> Abilities { get; set; } = new();
    public int? EvolvesFrom { get; set; }
    public List<PokemonEvolution> EvolvesTo { get; set; } = new();
    public string Description { get; set; } = string.Empty;
    public PokemonSprites Sprites { get; set; } = new();
}