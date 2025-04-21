
import HeadingComponent from './Heading-component'
import HeadingTitle from './Heading-title'
import HeadingImage from './Heading-image'

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