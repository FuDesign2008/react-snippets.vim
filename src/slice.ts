/**
 *
 * @author
 * @date
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from 'src/pages/home/store'
import {
  ApiNameResponseData,
  ApiNameRequestParams,
  getApiData,
} from './apiName'

interface SliceNameState {
  loading: boolean
  error: string
  data: ApiNameResponseData | null
}

const initialState: SliceNameState = {
  loading: false,
  error: '',
  data: null,
}

const sliceNameSlice = createSlice({
  name: 'sliceNameSlice',
  initialState,
  reducers: {
    getDataStart(state): void {
      state.loading = true
    },
    getDataSuccess(state, action: PayloadAction<ApiNameResponseData>): void {
      state.loading = false
      state.data = action.payload
    },
    getDataError(state, action: PayloadAction<string>): void {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  getDataStart,
  getDataSuccess,
  getDataError,
} = sliceNameSlice.actions

export default sliceNameSlice.reducer

export const fetchData = (params: ApiNameRequestParams): AppThunk => async (
  dispatch,
): Promise<void> => {
  try {
    dispatch(getDataStart())
    const data = await getApiData(params)
    dispatch(getDataSuccess(data))
  } catch (err) {
    dispatch(getDataError(err as string))
  }
}
