
namespace Dexly.Models;

public class PokemonEvolution
{
    public int PokemonId { get; set; }
    public EvolutionTrigger Trigger { get; set; }
    public int? MinLevel { get; set; }
    public string? Item { get; set; }
}