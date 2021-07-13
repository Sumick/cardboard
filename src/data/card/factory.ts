import { CardModel } from './types'
import { generateId } from '../../utils/generators'

export const createCard = (data?: CardModel): CardModel => {
  return {
    id: generateId(),
    content: data?.content || '',
    createdAt: data?.createdAt || '',
  }
}

export const createManyCards = (amount: number) => {
  return [...new Array(amount)].map((_card) => {
    return createCard()
  })
}
