import styled from 'styled-components'

import { CardEditModel } from '../../../data/card'

import { FontSize } from '../../../theme/tokens'
import { Colors } from '../../../theme/colors'

import { useInput } from '../../../hooks/useInput'

interface CardContentFormValues extends CardEditModel {}

interface CardContentFormProps {
  initialValues: CardContentFormValues
  onSubmit(values: CardContentFormValues): void
}

export const CardContentForm = (props: CardContentFormProps) => {
  const { value, handleChange } = useInput(props.initialValues.content)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    props.onSubmit({ ...props.initialValues, content: value })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <ContentTextArea
        id={'card-content-textarea'}
        name="content"
        autoFocus
        value={value}
        onBlur={handleSubmit}
        onChange={handleChange}
      />
    </Form>
  )
}

const ContentTextArea = styled.textarea`
  font-size: ${FontSize.S16};
  line-height: 25px;
  width: 100%;
  background: transparent;
  color: ${Colors.wtf};
  border: none;
  outline: transparent;
  resize: none;
  min-height: 120px;
`

const Form = styled.form`
  height: 100%;
`
