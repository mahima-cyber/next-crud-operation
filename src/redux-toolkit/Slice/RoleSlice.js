import { createSlice } from '@reduxjs/toolkit'

const initialState={
    roleData:[],
    roleEdit:[],
    }

    export const RoleSlice = createSlice({
        name:'role',
        initialState,
        reducers:{
       AddRole:(state,action)=>{
        state.roleData.push(action.payload)
       },
       DeleteRole:(state, action)=>{
        state.roleData.splice(action.payload,1)
       },
       EditRole:(state,action)=>{
        state.roleEdit=state.roleData[action.payload]
       },
       UpdateRole:(state,action)=>{
        state.roleData[action.payload.id] = action.payload
    //    state.roleData.splice(action.payload[0],1,action.payload[1])
       console.log(7667,action.payload)
       },
        }  
    })
    export const { AddRole,DeleteRole,EditRole,UpdateRole} = RoleSlice.actions
export default RoleSlice.reducer