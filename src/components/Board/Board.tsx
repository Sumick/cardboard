import styled from 'styled-components'
import { PropsWithChildren } from 'react'

import { Spacings } from '../../theme/spacings'

const columnWidth = '1fr'

const BoardLayout = styled.div`
  display: grid;
  grid-template-columns: ${columnWidth} ${columnWidth} ${columnWidth} ${columnWidth} ${columnWidth};
  grid-column-gap: ${Spacings.S24};
  grid-row-gap: ${Spacings.S24};
`

export const Board = (props: PropsWithChildren<{}>) => (
  <BoardLayout>{props.children}</BoardLayout>
)
