import moment from 'moment'

export const formatShortDate = (timestamp: string | number = ''): string => {
	if (!timestamp) {
		return '';
	}

  return moment(timestamp).format('yyyy-MM-D')
};

describe('formatShortDate', () => {
  it('returns an empty string when passed undefined', () => {
    expect(formatShortDate()).toBe('')
  })

  it('throws a RangeError when passed a string which isn\'t a date', () => {
    expect(formatShortDate('foo')).toBe('Invalid date')
  })

  it('fails when the input date is invalid', () => {
    expect(formatShortDate('2020-02-31')).toBe('Invalid date')
  })
  
  it('pads months to two digits, but not days', () => {
    expect(formatShortDate('2020-2-3')).toBe('2020-02-3')
  })

  it('removes padding from days, but not months', () => {
    expect(formatShortDate('2020-02-3')).toBe('2020-02-3')
  })

  it('creates a formatted date when passed a number', () => {
    expect(formatShortDate(1627716427528)).toBe('2021-07-31')
  })

  it('creates a formatted date when passed a negative number', () => {
    expect(formatShortDate(-1627716427528)).toBe('1918-06-4')
  })

  it('returns an empty string when passed 0', () => {
    expect(formatShortDate(0)).toBe('')
  })
})