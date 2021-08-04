import React from 'react'
import { formatShortDate } from './example_1'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import dayjs from 'dayjs'


function DayOfTheWeekWidget({ date = '' }: { date?: string | number }) {
  if (!date) {
    return <div>No date entered</div>
  }

  const formattedDate = formatShortDate(date)
  const dayOfTheWeek = dayjs(date).format('dddd')

  return <div>{formattedDate} is a {dayOfTheWeek}</div>
}

describe('DayOfTheWeekWidget', () => {
  it('renders ?? when passed an empty string', () => {
    const { container } = render(<DayOfTheWeekWidget date="" />)
    expect(container).toMatchSnapshot()
  })

  it('renders ?? when passed the number 0', () => {
    const { container } = render(<DayOfTheWeekWidget date={0} />)
    expect(container).toMatchSnapshot()
  })

  it('renders ?? when passed a Tuesday', () => {
    const { container } = render(<DayOfTheWeekWidget date="2021-08-03" />)
    expect(container).toMatchSnapshot()
  })
})