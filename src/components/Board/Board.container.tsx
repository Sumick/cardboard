import { useEffect, useState } from 'react'

import { Board } from './Board'
import { Card } from '../Card/Card'

import { CardModel } from '../../data/card'
import { findCardsByBoardId } from '../../data/card/api'

const MY_BOARD_ID = 1

const BoardContainer = () => {
  const [cards, setCards] = useState<CardModel[]>([])

  useEffect(() => {
    const fetchCards = async () => {
      const cards = await findCardsByBoardId(MY_BOARD_ID)
      setCards(cards)
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
          onSaveContent={() => {}}
        />
      ))}
    </Board>
  )
}

export default BoardContainer
