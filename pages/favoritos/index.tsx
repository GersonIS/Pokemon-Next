import { Layout } from "@/components/layouts"
import { FavoritoPokemon, NoFavoritos } from "@/components/ui"
import { localFavoritos } from "@/utils";
import { useEffect, useState } from "react"

const index = () => {
  const [favoritosPokemon, setFavoritosPokemon] = useState<number[]>([]);
  useEffect(() => {
    setFavoritosPokemon(localFavoritos.pokemons());
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritosPokemon.length === 0 ? (<NoFavoritos />) : (
        <FavoritoPokemon favoritosPokemon={favoritosPokemon} />
      )}
    </Layout>
  )
}

export default index