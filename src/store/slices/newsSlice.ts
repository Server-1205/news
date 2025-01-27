﻿import { WritableDraft } from './../../../node_modules/immer/src/types/types-external';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilters, INews } from '../../interfaces';
import { PAGE_SIZE } from '../../components/constants/constnts';

interface State {
  news: INews[];
  filters: IFilters;
}

const initialState: State = {
  news: [],
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  },
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews(state: WritableDraft<State>, action: PayloadAction<INews[]>) {
      state.news = action.payload;
    },

    setFilters(
      state: WritableDraft<State>,
      action: PayloadAction<{ key: string; value: string | null | number }>
    ) {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setNews, setFilters } = newsSlice.actions;

export default newsSlice.reducer;
