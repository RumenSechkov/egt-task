import React from 'react'
import { useSelector } from 'react-redux'
import { IComponent } from '@interfaces/component'
import type { RootState } from '@state/store'
import Loading from '@organisms/loading'
import Navigation from '@organisms/navigation'

interface ILayout {
  hasNavigation?: boolean
}

const Layout = ({ hasNavigation, children }: IComponent & ILayout) => {
  const loading = useSelector((state: RootState) => state.ui.loading)

  return (
    <main>
      <Loading loading={loading} />
      {hasNavigation && <Navigation />}
      {children}
    </main>
  )
}

export default Layout
