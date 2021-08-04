import React from 'react'
import format from 'date-fns/format'
import { formatShortDate } from './example_1'
import { render } from '@testing-library/react'
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
})