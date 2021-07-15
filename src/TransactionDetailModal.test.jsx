import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import TransactionDetailModal from './TransactionDetailModal';

jest.mock('react-redux');

describe('TransactionDetailModal', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      budget: '',
      year: 2021,
      month: 7,
      transactionFields: {
        breakdown: '',
        source: '',
        memo: '',
      },
      dailyTransaction: {
        year: 2021,
        month: 7,
        date: 1,
        day: 4,
        transactionHistory: [
          { type: '수입', breakdown: 10000 },
          { type: '지출', breakdown: 20000 },
        ],
      },
    }));
  });

  it('renders transaction modal', () => {
    const { container } = render(
      <TransactionDetailModal />,
    );

    expect(container).toHaveTextContent('거래처');
    expect(container).toHaveTextContent('메모');
  });
});
