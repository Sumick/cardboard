import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import BoardContainer from '../../Board.container'
import { describe, expect, it, vi } from 'vitest'
import * as dataModule from '../../../../data'

describe('BoardContainer integration tests', () => {
  // MSW version
  it('adds a new card when <CardAddNew /> is clicked', async () => {
    // Render the BoardContainer
    render(<BoardContainer />)

    // Simulate click on <CardAddNew />
    await waitFor(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Add new card' }))

      // Assertions
      // Check if a new card is displayed
      expect(screen.getByText('Click to start noting')).toBeInTheDocument() // Adjust based on how a new card is displayed
    })
  })

  // Mock version
  it('adds a new card when <CardAddNew /> is clicked', async () => {
    // Mock the findCards function and POST request in CardModel
    vi.spyOn(dataModule, 'findCards').mockResolvedValue([])
    const createCardSpy = vi
      .spyOn(dataModule.CardModel.prototype, 'create')
      .mockResolvedValue()

    // Render the BoardContainer
    render(<BoardContainer />)

    // Simulate click on <CardAddNew />
    await waitFor(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Add new card' }))
      // Assertions
      // Check if a new card is displayed
      expect(screen.getByText('Click to start noting')).toBeInTheDocument() // Adjust based on how a new card is displayed
    })

    expect(createCardSpy).toHaveBeenCalledTimes(1)
  })

  it('deletes a card with empty content on Backspace press', async () => {
    // Mock findCards and deleteCard
    vi.spyOn(dataModule, 'findCards').mockResolvedValue([
      { id: 1, content: '', createdAt: new Date().toISOString() },
    ])
    const deleteCardSpy = vi
      .spyOn(dataModule.CardModel.prototype, 'create')
      .mockResolvedValue()

    // Render the BoardContainer
    render(<BoardContainer />)

    await waitFor(() => {
      // Simulate Backspace press on the textarea with empty content
      const card = screen.getByText('Click to start noting')

      fireEvent.click(card)

      const textarea = screen.getByPlaceholderText(
        'Start typing or press Backspace to delete this card'
      )
      fireEvent.keyDown(textarea, { key: 'Backspace' })

      // Assertions
      expect(deleteCardSpy).toHaveBeenCalledWith(1)
      expect(screen.queryByTestId(`card-${1}`)).not.toBeInTheDocument()
    })
  })
})
