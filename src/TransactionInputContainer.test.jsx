import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import TransactionInputContainer from './TransactionInputContainer';

import mockInitState from '../fixtures/mockInitState';

jest.mock('react-redux');

describe('TransactionInputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      ...mockInitState,
    }));
  });

  it('listens change events', () => {
    const { getByLabelText } = render(<TransactionInputContainer />);

    const controls = [
      { label: '거래처', name: 'source', value: '카페' },
      { label: '메모', name: 'memo', value: '친구들이랑' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(dispatch).toBeCalledWith({
        type: 'application/changeTransactionFields',
        payload: { name, value },
      });
    });
  });

  it('listens click event', () => {
    const { getByText } = render(<TransactionInputContainer />);

    fireEvent.click(getByText('저장'), {
      transaction: {
        type: '',
        category: '',
        transactionFields: {
          breakdown: 0,
          source: '',
          memo: '',
        },
      },
    });

    expect(dispatch).toBeCalledWith({
      type: 'application/setTransaction',
      payload: {
        transaction: {
          type: '',
          category: '',
          transactionFields: {
            breakdown: 0,
            source: '',
            memo: '',
          },
        },
      },
    });
  });
});
