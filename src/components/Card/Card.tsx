import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { CardModel } from '../../data/card'

import { CardContentForm } from './card-elements/CardContentForm'

import { Colors } from '../../theme/colors'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { FontSize, LineHeight } from '../../theme/tokens'

interface CardProps extends CardModel {
  onSaveContent(): void
}

export const Card = (props: CardProps) => {
  const ref = useRef(null)
  const [isEditing, setEditing] = useState(false)

  const handleSetEditingOff = () => {
    setEditing(false)
  }

  useOutsideClick(ref, handleSetEditingOff)

  const handleSetEditingOn = () => {
    setEditing(true)
  }

  const handleSaveContent = () => {
    props.onSaveContent()
    handleSetEditingOff()
  }

  return (
    <CardWrapper>
      <FormattedDate>{props?.createdAt || 'Date'}</FormattedDate>
      {!isEditing ? (
        <p onClick={handleSetEditingOn}>
          {props?.content || 'Click to start noting'}
        </p>
      ) : (
        <CardContentForm onSubmit={handleSaveContent} initialValues={props} />
      )}
    </CardWrapper>
  )
}

const FormattedDate = styled.p`
  color: ${Colors.beige},
  line-height: ${LineHeight.S17};
  font-size: ${FontSize.S14};
`

const CardWrapper = styled.div`
  width: 182px;
  height: 182px;
  padding: 20px;
  border: 1px solid ${Colors.purple};
  transition-duration: 0.8s;

  &:hover {
    cursor: pointer;
    background: ${Colors.whiterun};
    box-shadow: -2px 2px 0px ${Colors.draco};
  }
`
