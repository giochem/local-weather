import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import weatherService from './weatherService'
const initialState = {
    weatherData: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getWeather = createAsyncThunk(
    'weathers/getWeather',
    async (local, thunkAPI) => {
        try {
            return await weatherService.getWeather(local)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.weatherData = action.payload
            })
            .addCase(getWeather.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = weatherSlice.actions
export default weatherSlice.reducer