import React from 'react'
import { useSelector } from 'react-redux'
import { IComponent } from '@interfaces/component'
import Loading from '@organisms/loading'
import Navigation from '@organisms/navigation'

interface ILayout {
  hasNavigation?: boolean
}

const Layout = ({ hasNavigation, children }: IComponent & ILayout) => {
  const loading = useSelector((state) => state.ui.loading)

  return (
    <main>
      <Loading loading={loading}>loading</Loading>
      {hasNavigation && <Navigation />}
      {children}
    </main>
  )
}

export default Layout
