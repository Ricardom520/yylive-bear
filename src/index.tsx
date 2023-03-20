import React from 'react'
import ReactDOM from 'react-dom/client'
import { useRoutes, HashRouter } from 'react-router-dom'
import Index from '~/pages'

import './index.scss'

const routes = [
  {
    path: '/',
    name: '主页',
    element: <Index />
  }
]

const Router = () => {
  const elm = useRoutes(routes)

  return elm
}

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <HashRouter>
    <Router />
  </HashRouter>
)
