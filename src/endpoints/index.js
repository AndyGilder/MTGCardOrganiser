export const getCardList = (query) => {
    return `https://api.scryfall.com/cards/search?q=${query}`;
}
