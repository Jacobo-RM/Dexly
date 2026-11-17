using System.Text.Json;
using System.Text.Json.Serialization;
using Dexly.Models;

namespace Dexly.Services;

public class PokemonService
{
    public string GetJson()
    {
        var json = File.ReadAllText("json\\pokemon.json");
        return json;
    }

    public async Task<List<Pokemon>> GetPokemonsAsync()
    {
        var json = GetJson();
        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };
        options.Converters.Add(new JsonStringEnumConverter());
        var pokemons = JsonSerializer.Deserialize<List<Pokemon>>(json, options);
        return pokemons;
    }

    public async Task<Pokemon> GetPokemonByPokedexId(int id)
    {
        var pokemons = await GetPokemonsAsync();
        return pokemons.FirstOrDefault(p => p.Id == id);
    }

    public async Task<Pokemon> GetPokemonByName(string name)
    {
        var pokemons = await GetPokemonsAsync();
        return pokemons.FirstOrDefault(a => a.Name.Equals(name, StringComparison.OrdinalIgnoreCase));
    }

    public async Task<List<Pokemon>> GetPokemonsByType(PokemonType type)
    {
        var pokemons = await GetPokemonsAsync();
        return pokemons.Where(p => p.Types.Contains(type)).ToList();
    }

    public async Task<List<Pokemon>> GetPokemonsByGeneration(int generation)
    {
        var pokemons = await GetPokemonsAsync();
        return pokemons.Where(p => p.Generation == generation).ToList();;
    }
}