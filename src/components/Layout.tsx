'use client'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import MainLoader from './MainLoader'
export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <Provider store={store}>
      <PersistGate loading={<MainLoader/>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
