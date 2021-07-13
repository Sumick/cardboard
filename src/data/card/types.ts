export interface CardModel {
  id: number
  content: string
  createdAt: string
}

export interface CardCreateModel extends Omit<CardModel, 'id'> {}

export interface CardEditModel extends CardModel {}
