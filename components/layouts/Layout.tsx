import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui"

type Props = {
    children: string | JSX.Element | JSX.Element[],
    title?: string
}

const origin = (typeof window === "undefined") ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Gerson Rodriguez" />
                <meta name="description" content={`Informacion sobre el Pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                <meta property="ogititle" content={`Informacion sobre ${title}`} />
                <meta property="ogidescription" content={`Esta es la pagina sobre ${title}`} />
                <meta property="ogiimage" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main>
                {children}
            </main>
        </>
    )
}