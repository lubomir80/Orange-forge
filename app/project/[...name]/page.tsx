import AnimationPage from "@/components/Animation/AnimationPage";
import Project from "@/components/Project/Project";


type Params = Promise<{ name: string }>


export async function generateMetadata({ params }: { params: Params }) {
   const { name } = await params
   return {
      title: `Project ${name}`,
   }
}



async function SingleProjectPage({ params }: { params: Params }) {
   const { name } = await params

   return (
      <AnimationPage>
         <Project name={name} />
      </AnimationPage>
   )


}

export default SingleProjectPage