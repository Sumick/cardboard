import styled from 'styled-components'

import { CardboardLogo } from '../Icons/CardboardLogo'
import { FontSize, LineHeight } from '../../theme/tokens'
import { Colors } from '../../theme/colors'

export const AppHeader = () => (
  <Header>
    <CardboardLogo />
    <Description>
      Daily stamps in time. Simplest online daily notes. Click on the card to
      add today’s note.
    </Description>
  </Header>
)

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 292px;
  padding: 56px 0 64px 0;
`

const Description = styled.p`
  line-height: ${LineHeight.S17};
  text-align: right;

  color: ${Colors.purple};
  font-size: ${FontSize.S14};
`
