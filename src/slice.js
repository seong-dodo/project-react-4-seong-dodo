import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    budget: 0,
    year: 2021,
    month: 7,
    selectedType: null,
    transaction: {
      type: '',
      category: '',
      transactionFields: {
        breakdown: 0,
        source: '',
        memo: '',
      },
    },
    dailyTransaction: {
      year: 2021,
      month: 7,
      date: 1,
      day: 4,
      transactionHistory: [],
    },
  },
  reducers: {
    changeBudget(state, { payload: { value } }) {
      return {
        ...state,
        budget: value,
      };
    },
    selectType(state, { payload: name }) {
      return {
        ...state,
        selectedType: name,
      };
    },
    changeTransactionType(state, { payload: name }) {
      const selectedType = {
        ...state.transaction,
        type: name,
      };
      return {
        ...state,
        transaction: selectedType,
      };
    },
    changeTransactionCategory(state, { payload: name }) {
      const selectedCategory = {
        ...state.transaction,
        category: name,
      };
      return {
        ...state,
        transaction: selectedCategory,
      };
    },
    changeTransactionFields(state, { payload: { name, value } }) {
      const newTransactionFields = {
        ...state.transaction,
        transactionFields: {
          ...state.transaction.transactionFields,
          [name]: value,
        },
      };
      return {
        ...state,
        transaction: newTransactionFields,
      };
    },
    setTransaction(state, { payload: { transaction } }) {
      return {
        ...state,
        transaction,
      };
    },
    setPreviousMonth(state, { payload: { month } }) {
      if (month === 1) {
        return {
          ...state,
          year: state.year - 1,
          month: state.month + 11,
        };
      }
      return {
        ...state,
        month: state.month - 1,
      };
    },
    setNextMonth(state, { payload: { month } }) {
      if (month === 12) {
        return {
          ...state,
          year: state.year + 1,
          month: state.month - 11,
        };
      }
      return {
        ...state,
        month: state.month + 1,
      };
    },
    setDailyTransaction(state, { payload: { date, day } }) {
      const newDailyTransaction = { ...state.dailyTransaction, date, day };
      return {
        ...state,
        dailyTransaction: newDailyTransaction,
      };
    },
  },
});

export const {
  changeBudget,
  selectType,
  changeTransactionType,
  changeTransactionCategory,
  changeTransactionFields,
  setPreviousMonth,
  setNextMonth,
  setTransaction,
  setDailyTransaction,
} = actions;

export default reducer;
