import React from 'react'
import format from 'date-fns/format'
import { formatShortDate } from './example_1'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'


function DayOfTheWeekWidget({ date = '' }: { date?: string | number }) {
  if (!date) {
    return <div>No date entered</div>
  }

  const formattedDate = formatShortDate(date)
  const dayOfTheWeek = format(new Date(date), 'EEEE')

  return <div>{formattedDate} is a {dayOfTheWeek}</div>
}

describe('DayOfTheWeekWidget', () => {
  it('renders ?? when passed an empty string', () => {
    const { container } = render(<DayOfTheWeekWidget date="" />)
    expect(container).toHaveTextContent('No date entered')
  })

  it('renders ?? when passed the number 0', () => {
    const { container } = render(<DayOfTheWeekWidget date={0} />)
    expect(container).toHaveTextContent('No date entered')
  })

  it('renders ?? when passed a Tuesday', () => {
    const { container } = render(<DayOfTheWeekWidget date="2021-08-03" />)
    expect(container).toHaveTextContent('2021-08-3 is a Tuesday')
  })
})