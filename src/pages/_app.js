import Layout from '../components/layout/index'
// import Header from '@/components/layout/Header'
import '@/styles/globals.css'
import { Provider } from "react-redux";
import { Store } from '@/redux-toolkit/Store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={Store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  )
}
