import moment from 'moment';

export const formatShortDate = (timestamp: string | number = ''): string => {
	if (!timestamp) {
		return '';
	}

	return moment(timestamp).format('yyyy-MM-D');
};

describe('formatShortDate', () => {
})