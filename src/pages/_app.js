import Layout from '../components/layout/index'
// import Header from '@/components/layout/Header'
import '@/styles/globals.css'
import "./index.css"
import { Provider } from "react-redux";
import { Store } from '@/redux-toolkit/Store';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Login from '@/components/auth/Login';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [token,setToken] = useState()

  useEffect(()=>{
    const authToken = typeof window !== "undefined" && localStorage.getItem("authToken");
     setToken(authToken)
     if(token){
      router.replace("/user")
      }else if(!token){
      router.replace("/")
      }
  },[token])

  return (
    <Provider store={Store}>
    {
      router.pathname==="/" ? <Login/> : (
        <Layout>
      <Component {...pageProps} />
    </Layout>
      )
    }
    
    </Provider>
  )
}
