import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CalendarContainer from './CalendarContainer';
import {
  setDailyTransaction,
} from './slice';

jest.mock('react-redux');

describe('CalendarContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      breakdown: '',
      year: 2021,
      month: 7,
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

  function renderCalendarContainer() {
    return render((
      <CalendarContainer />
    ));
  }

  it('renders calendar days', () => {
    const { container } = renderCalendarContainer();

    expect(container).toHaveTextContent('일');
  });

  describe('CalendarMonth', () => {
    it('renders calendar date', () => {
      const { container } = renderCalendarContainer();

      expect(container).toHaveTextContent(1);
    });

    it('listens click event and renders transaction modal', () => {
      const { container, getByText } = renderCalendarContainer();

      fireEvent.click(getByText(1));

      expect(dispatch).toBeCalledWith(setDailyTransaction({ date: 1, day: 4 }));
      expect(container).toHaveTextContent('내역추가');
    });
  });
});
