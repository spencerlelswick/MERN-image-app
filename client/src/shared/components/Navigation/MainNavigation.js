import './MainNavigation.css'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import { Link } from 'react-router-dom'
import SideDrawer from './SideDrawer'
import { useState } from 'react'

const MainNavigation = () => {
  const openDrawer = () => {
    setDrawIsOpen(!drawIsOpen)
  }
  const [drawIsOpen, setDrawIsOpen] = useState(false)
  return (
    <>
      {drawIsOpen && (
        <SideDrawer>
          <nav className='main-navigation__drawer-nav'>
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className='main-navigation__menu-btn' onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className='main-navigation__title'>
          <Link to='/'>Your Places</Link>
        </h1>
        <nav>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  )
}
export default MainNavigation
