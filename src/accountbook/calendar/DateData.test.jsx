import { render } from '@testing-library/react';

import DateData from './DateData';

import mockExpenseTransaction from '../../../fixtures/mockExpenseTransaction';
import mockIncomeTransaction from '../../../fixtures/mockIncomeTransaction';
import mockDailyData from '../../../fixtures/mockDailyData';

describe('DateData', () => {
  function renderDateData(histories = undefined) {
    return render((
      <DateData
        histories={histories}
      />
    ));
  }

  context('without histories', () => {
    it('renders nothing', () => {
      const { queryByText } = renderDateData();

      expect(queryByText('- 1,000 원')).toBeNull();
      expect(queryByText('+ 1,000 원')).toBeNull();
    });
  });

  context('with histories', () => {
    describe('renders transaction data with "지출" and "수입" type', () => {
      const histories = {
        dailyData: mockDailyData,
        totalExpense: '1,000',
        totalIncome: '1,000',
        transactionHistories: [mockExpenseTransaction, mockIncomeTransaction],
      };

      it('renders transaction data', () => {
        const { container } = renderDateData(histories);

        expect(container).toHaveTextContent('- 1,000원');
        expect(container).toHaveTextContent('+ 1,000원');
      });
    });

    it('when with only "지출" type data', () => {
      const histories = {
        dailyData: mockDailyData,
        totalExpense: '1,000',
        totalIncome: '',
        transactionHistories: [mockExpenseTransaction],
      };

      const { container } = renderDateData(histories);

      expect(container).toHaveTextContent('- 1,000원');
    });

    it('when with only "수입" type data', () => {
      const histories = {
        dailyData: mockDailyData,
        totalExpense: '',
        totalIncome: '1,000',
        transactionHistories: [mockIncomeTransaction],
      };

      const { container } = renderDateData(histories);

      expect(container).toHaveTextContent('+ 1,000원');
    });
  });
});
