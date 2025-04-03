import HireBtn from './Hire-btn'
import Language from './Language'
import Logo from './Logo'
import Menu from './Menu'
import Navigation from './Navigation'
import Social from './Social'



function Header() {
   return (
      <header className='z-10 w-full bg-transparent'>
         <div className='h-[65px] md:h-[95px] flex items-center relative px-[40px]'>
            <Logo />
            <Navigation />
            <HireBtn />
            <Social />
            <Language />
            <Menu />
         </div>
      </header>
   )
}

export default Header