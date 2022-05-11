export const getCardListFromName = (query) => {
    return `https://api.scryfall.com/cards/search?q=name=${query}`;
}
