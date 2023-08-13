export interface ICard {
  id: number,
  src: string,
  matched: boolean
}

export interface ICards {
  cards: ICard[]
}
