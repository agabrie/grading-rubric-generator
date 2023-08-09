import { configureStore } from '@reduxjs/toolkit'
import rubricReducer from '../features/rubric/rubricSlice'

export default configureStore({
  reducer: {
    rubric:rubricReducer
  }
})