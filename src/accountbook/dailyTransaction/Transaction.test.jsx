import { render } from '@testing-library/react';

import Transaction from './Transaction';

import mockExpenseTransaction from '../../../fixtures/mockExpenseTransaction';
import mockIncomeTransaction from '../../../fixtures/mockIncomeTransaction';
import mockDailyData from '../../../fixtures/mockDailyData';

describe('Transaction', () => {
  const handleClickEdit = jest.fn();
  const handleClickDelete = jest.fn();

  function renderTransaction(histories = undefined) {
    return render((
      <Transaction
        histories={histories}
        onClickEdit={handleClickEdit}
        onClickDelete={handleClickDelete}
      />
    ));
  }

  context('without histories', () => {
    it('renders nothing', () => {
      const { queryByText } = renderTransaction();

      expect(queryByText('지출')).toBeNull();
      expect(queryByText('식비')).toBeNull();
      expect(queryByText('1,000')).toBeNull();
      expect(queryByText('마트')).toBeNull();
    });
  });

  context('with histories', () => {
    it('renders with "지출" type transaction', () => {
      const histories = {
        ...mockDailyData,
        transactionHistories: [mockExpenseTransaction],
      };

      const { container } = renderTransaction(histories);

      expect(container).toHaveTextContent('지출');
      expect(container).toHaveTextContent('식비');
      expect(container).toHaveTextContent('마트');
      expect(container).toHaveTextContent('-');
    });

    it('renders with "수입" type transaction', () => {
      const histories = {
        ...mockDailyData,
        transactionHistories: [mockIncomeTransaction],
      };

      const { container } = renderTransaction(histories);

      expect(container).toHaveTextContent('수입');
      expect(container).toHaveTextContent('용돈');
      expect(container).toHaveTextContent('심부름');
      expect(container).toHaveTextContent('+');
    });
  });
});
