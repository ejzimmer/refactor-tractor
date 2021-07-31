import format from 'date-fns/format';

export const formatShortDate = (timestamp: string | number = ''): string => {
	if (!timestamp) {
		return '';
	}

	return format(new Date(timestamp), 'yyyy-MM-d');  
};

describe('formatShortDate', () => {
  it('returns an empty string when passed undefined', () => {
    expect(formatShortDate()).toBe('')
  })

  it('throws a RangeError when passed a string which isn\'t a date', () => {
    expect(() => formatShortDate('foo')).toThrow(RangeError)
  })

  it('converts an invalid date into a valid one', () => {
    expect(formatShortDate('2020-02-31')).toBe('2020-03-2')
  })
  
  it('pads months to two digits, but not days', () => {
    expect(formatShortDate('2020-2-3')).toBe('2020-02-3')
  })

  it('removes padding from days, but not months', () => {
    expect(formatShortDate('2020-02-3')).toBe('2020-02-3')
  })

  it('does ?? when passed a number', () => {
    expect(formatShortDate(1627716427528)).toBe('2021-07-31')
  })

  it('does ?? when passed a negative number', () => {
    expect(formatShortDate(-1627716427528)).toBe('1918-06-4')
  })

  it('does ?? when passed 0', () => {
    expect(formatShortDate(0)).toBe('')
  })
})