import { pokeApi } from "@/api";
import { Layout } from "../components/layouts";

const title = "Listado de Pokemones";

function HomePage({ pokemons }:any) {
  return (
    <Layout title={title}>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon:any) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id}/>
        ))}
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from 'next'
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemon";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get("/pokemon?limit=151");
  const pokemons: any = data.results.map((el: (typeof data), index: number) => ({ ...el, id: index + 1, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg` }));
  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;