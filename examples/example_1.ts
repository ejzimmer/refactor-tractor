import format from 'date-fns/format';

export const formatShortDate = (timestamp: string | number = ''): string => {
	if (!timestamp) {
		return '';
	}

	return format(new Date(timestamp), 'yyyy-MM-d');
};

describe('formatShortDate', () => {
})