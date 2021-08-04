import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react'

interface Props {
  onConfirm: () => void
  onCancel: () => void
}

function ConfirmationModal({ onConfirm, onCancel }: Props) {

  const handleCancel = (event: Event) => {
    event.preventDefault();
    onCancel();
  }

  const handleSpace = (event: KeyboardEvent) => {
    const keyPressed = event.code
    if (keyPressed === 'Space') {
      handleCancel(event);
    }
  }

  return (
    <div>
      <p>Can we fix it?</p>
      <div>
        <button onClick={onConfirm}>Yes, we can!</button>
        <a onClick={handleCancel} onKeyDown={handleSpace} href="#">No, we can't</a>
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

  it('call cancel when the space bar is pressed', () => {
    const cancelButton = screen.getByText('No, we can\'t')
    fireEvent.keyDown(cancelButton, { code: 'Space' })

    expect(cancelSpy).toHaveBeenCalled();
  })

  it('doesn\'t call cancel when any other key is pressed', () => {
    const cancelButton = screen.getByText('No, we can\'t')
    fireEvent.keyDown(cancelButton, { code: 'Tab' })

    expect(cancelSpy).not.toHaveBeenCalled()
  })
})

