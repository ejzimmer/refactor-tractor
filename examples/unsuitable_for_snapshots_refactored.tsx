import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react'

interface Props {
  onConfirm: () => void
  onCancel: () => void
}

function ConfirmationModal({ onConfirm, onCancel }: Props) {

  return (
    <div>
      <p>Can we fix it?</p>
      <div>
        <button onClick={onConfirm}>Yes, we can!</button>
        <button onClick={onCancel}>No, we can't</button>
      </div>
    </div>
  )
}

describe('ConfirmationModal', () => {
  const confirmSpy = jest.fn();
  const cancelSpy = jest.fn();

  beforeEach(() => {
    render(<ConfirmationModal onConfirm={confirmSpy} onCancel={cancelSpy} />)
  })

  afterEach(() => {
    confirmSpy.mockClear()
    cancelSpy.mockClear()
  })

  it('calls confirm on click', () => {
    const confirmButton = screen.getByText('Yes, we can!')
    fireEvent.click(confirmButton)

    expect(confirmSpy).toHaveBeenCalled();
  })

  it('calls cancel on click', () => {
    const cancelButton = screen.getByText('No, we can\'t')
    fireEvent.click(cancelButton)

    expect(cancelSpy).toHaveBeenCalled()
  })
})

