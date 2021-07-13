import styled from 'styled-components'
import { PropsWithChildren } from 'react'

export const AppLayout = (props: PropsWithChildren<{}>) => (
  <Layout>{props.children}</Layout>
)

const Layout = styled.div`
  max-width: 1216px;
  margin: 0 auto;
`
