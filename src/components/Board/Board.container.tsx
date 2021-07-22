import { useEffect, useState } from 'react'

import { Board } from './Board'
import { Card } from '../Card/Card'

import { CardEntity } from '../../data/card'
import { findCards } from '../../data/card/api'

const BoardContainer = () => {
  const [cards, setCards] = useState<CardEntity[]>([])

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cards = await findCards()
        setCards(cards)
      } catch (error) {
        console.warn(
          'Ensure your server is running. For more details check our readme.'
        )
        setCards([])
      }
    }
    fetchCards()
  }, [])

  return (
    <Board>
      {cards.map((cardProps) => (
        <Card
          key={cardProps.id}
          id={cardProps.id}
          content={cardProps.content}
          createdAt={cardProps.createdAt}
        />
      ))}
    </Board>
  )
}

export default BoardContainer
