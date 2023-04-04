const toggleFavoritos = (id: number) => {
    console.log("toggleFavoritos Lamando");
    let favoritos: number[] = JSON.parse(localStorage.getItem("Favoritos") || "[]");

    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(pokeId => pokeId !== id);
    } else {
        favoritos.push(id);
    }

    localStorage.setItem("Favoritos", JSON.stringify(favoritos));
}

const exitsInFavoritos = (id: number): boolean => {
    if(typeof window === "undefined") return false;
    const favoritos: number[] = JSON.parse(localStorage.getItem("Favoritos") || "[]");
    return favoritos.includes(id);
}

const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem("Favoritos") || "[]");
}

export default { toggleFavoritos, exitsInFavoritos, pokemons };