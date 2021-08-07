import React from 'react'
import moment from 'moment'
import { formatShortDate } from './example_1'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'


function DayOfTheWeekWidget({ date = '' }: { date?: string | number }) {
  if (!date) {
    return <div>No date entered</div>
  }

  const formattedDate = formatShortDate(date)
  const dayOfTheWeek = moment(date).format('dddd')

  return <div>{formattedDate} is a {dayOfTheWeek}</div>
}

describe('DayOfTheWeekWidget', () => {
  it('shows the error message when passed an empty string', () => {
    const { container } = render(<DayOfTheWeekWidget date="" />)
    expect(container).toHaveTextContent('No date entered')
  })

  it('shows the error message when passed the number 0', () => {
    const { container } = render(<DayOfTheWeekWidget date={0} />)
    expect(container).toHaveTextContent('No date entered')
  })

  it('says Tuesday when passed a Tuesday', () => {
    const { container } = render(<DayOfTheWeekWidget date="2021-08-03" />)
    expect(container).toHaveTextContent('2021-08-3 is a Tuesday')
  })
})