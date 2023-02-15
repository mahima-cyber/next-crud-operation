import { createSlice } from '@reduxjs/toolkit'

const initialState={
data:[],
userEdit:[]
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
   AddUser: (state,action)=>{
     state.data.push(action.payload)
   },
   DeleteUser:(state, action)=>{
    state.data.splice(action.payload,1)
   },
   EditUser:(state,action)=>{
    state.userEdit=state.data[action.payload]
   },
   UpdateUser:(state,action)=>{
    state.data[action.payload.id] = action.payload
    // state.data.splice(action.payload[0],1,action.payload[1])
   },
    }
})
export const {AddUser ,DeleteUser,UpdateUser ,EditUser} = userSlice.actions
export default userSlice.reducer