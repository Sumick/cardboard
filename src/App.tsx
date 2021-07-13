import React from 'react'
import GlobalStyle from './theme/globalStyles'

import { AppLayout } from './components/AppLayout/AppLayout'
import { AppHeader } from './components/AppHeader/AppHeader'

import Board from './components/Board/Board.container'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <AppHeader />
        <Board />
      </AppLayout>
    </>
  )
}

export default App
