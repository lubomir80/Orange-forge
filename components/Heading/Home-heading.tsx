import Box from '../Box'
import HeadingComponent from './Heading-component'
import HeadingImage from './Heading-image'
import HeadingTitle from './Heading-title'

function HomeHeading() {
   return (
      <section>
         <Box>
            <HeadingImage />
            <HeadingTitle />
            <HeadingComponent />
         </Box>
      </section>
   )
}

export default HomeHeading