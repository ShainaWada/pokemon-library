import { getPokemon } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/pokemonImage";
import { Progress } from "@/components/ui/progress";

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
  const { pokemonName } = params;

  const pokemonObject = await getPokemon(pokemonName);

  console.log(pokemonObject);

  return (
    <>
      <h1 className="pt-4 text-4xl text-bold">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
      <div className="m-4" style={{ position: 'relative', width: '300px', height: '300px' }}>
        <PokemonImage
          image={pokemonObject.sprites.other['official-artwork'].front_default}
          name={`picture of ${pokemonName}`} />
      </div>
      <h3>Weight: {pokemonObject.weight}</h3>
      <div className="flex-col">
        {pokemonObject.stats.map((statObject: any) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;
          return (
            <div className="flex items-stretch" style={{ width: '500px' }} key={statName}>
              <h3 className="w-2/4 p-3">{statName}: {statValue}</h3>
              <Progress className="w-2/4 m-auto" value={statValue} />
            </div>
          )
        })}
      </div >
    </>
  )
}
