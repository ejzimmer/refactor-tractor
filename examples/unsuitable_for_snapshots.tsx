import React from 'react'
import { render } from '@testing-library/react'

interface Props {
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmationModal({ onConfirm, onCancel }: Props) {

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
  it('matches the snapshot', () => {
    const { container } = render(<ConfirmationModal onConfirm={jest.fn()} onCancel={jest.fn()} />)

    expect(container).toMatchSnapshot()
  })
})