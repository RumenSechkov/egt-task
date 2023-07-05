import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@state/store'
import RouterProvider from '@providers/router'
import ModalProvider from '@providers/modal'

createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={store}>
    <ModalProvider />
    <RouterProvider />
  </ReduxProvider>,
)
