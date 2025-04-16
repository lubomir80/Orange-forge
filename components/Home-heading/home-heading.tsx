
import HeadingComponent from './heading-component'
import HeadingTitle from './heading-title'
import HeadingImage from './heading-image'

function HomeHeading() {
   return (
      <section className='px-[20px] md:px-[40px]'>
         <HeadingImage />
         <HeadingTitle />
         <HeadingComponent />
      </section>
   )
}

export default HomeHeading