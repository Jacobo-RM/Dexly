using Dexly.Models;
using Dexly.Services;
using Microsoft.AspNetCore.Mvc;

namespace Dexly.Controller;

[ApiController]
[Route("/[controller]")]
public class PokemonController : ControllerBase
{
    private readonly PokemonService _pokemonService;

    public PokemonController(PokemonService pokemonService)
    {
        _pokemonService = pokemonService;
    }

    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<Pokemon>>> GetPokemons()
    {
        return Ok(await _pokemonService.GetPokemonsAsync());
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Pokemon>> GetPokemonByPokedexId(int id)
    {
        var pokemon = await _pokemonService.GetPokemonByPokedexId(id);
        return pokemon is null ? NotFound() : Ok(pokemon);
    }

    [HttpGet("name/{name}")]
    public async Task<ActionResult<Pokemon>> GetPokemonByName(string name)
    {
        var pokemon = await _pokemonService.GetPokemonByName(name);
        return pokemon is null ? NotFound() : Ok(pokemon);
    }

    [HttpGet("type/{type}")]
    public async Task<ActionResult<IReadOnlyList<Pokemon>>> GetPokemonsByType(PokemonType type)
    {
        return Ok(await _pokemonService.GetPokemonsByType(type));
    }

    [HttpGet("generation/{generation:int}")]
    public async Task<ActionResult<IReadOnlyList<Pokemon>>> GetPokemonsByGeneration(int generation)
    {
        return Ok(await _pokemonService.GetPokemonsByGeneration(generation));
    }
}