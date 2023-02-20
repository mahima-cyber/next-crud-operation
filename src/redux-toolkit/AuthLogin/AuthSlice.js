import {createSlice} from '@reduxjs/toolkit';

const initialState={
    authLogin:[]
}

const authToken = "sljfdjvjkxvldhdlvjlhjdhksjljdfhhirgfhvhcnbvcvlsjsjshshfsklfggsvbl"

export const AuthLogin = createSlice({
    name: 'login',
    initialState,
    reducers:{
        authLogin:(state, action)=>{
            console.log(5656,action.payload)
            if(
                action.payload.email === "admin@gmail.com" &&
                action.payload.password === "12345678"
              ){
              localStorage.setItem("authToken", authToken )
              }else {
                localStorage.setItem("authToken", " " )

              }
        }
    }
})

export const { authLogin} = AuthLogin.actions
export default AuthLogin.reducer