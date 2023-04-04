import { Grid } from "@nextui-org/react";
import FavoritoCardPokemon from "./FavoritoCardPokemon";

export const FavoritoPokemon = ({ favoritosPokemon }: any) => {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {
                favoritosPokemon.map((id: number) => {
                    return (<FavoritoCardPokemon id={id} key={id}/>)
                })
            }
        </Grid.Container>
    )
}