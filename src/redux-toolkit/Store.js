import { configureStore } from '@reduxjs/toolkit'
import RoleSlice from './Slice/RoleSlice'
import  userSlice  from './Slice/UserSlice'


export const Store = configureStore({
  reducer: {
  users: userSlice,
  roles: RoleSlice
  },
})