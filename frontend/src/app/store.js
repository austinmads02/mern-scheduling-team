import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import slotReducer from '../features/slots/slotSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    slots: slotReducer,
  },
})
