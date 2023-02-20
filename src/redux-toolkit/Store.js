import { configureStore } from '@reduxjs/toolkit'
import AuthLogin  from './AuthLogin/AuthSlice'
import RoleSlice from './Slice/RoleSlice'
import  userSlice  from './Slice/UserSlice'


export const Store = configureStore({
  reducer: {
  users: userSlice,
  roles: RoleSlice,
  login: AuthLogin
  },
})