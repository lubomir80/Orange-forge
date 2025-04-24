
import HeadingComponent from './Heading-component'
import HeadingTitle from './Heading-title'
import HeadingImage from './Heading-image'
import Box from '../Box'

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