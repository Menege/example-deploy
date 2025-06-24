export type CocktailCode = 'margarita' | 'mojito' | 'a1' | 'kir'

export interface Cocktail {
  idDrink: string
  strDrink: string
  strCategory: string
  strGlass: string
  strInstructions: string
  strDrinkThumb: string
  [key: `strIngredient${number}`]: string | null
  [key: `strMeasure${number}`]: string | null
}

export interface CocktailsResponse {
  drinks: Cocktail[] | null
} 