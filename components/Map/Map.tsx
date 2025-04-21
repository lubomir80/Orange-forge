import dynamic from "next/dynamic"
const MyMap = dynamic(() => import("@/components/Map/Map-leafletjs"), { ssr: false })

function Map() {
   return (
      <section className='h-[500px] lg:h-[35vw] relative z-0 p-10'>
         <div className='absolute top-[-55px] left-[60px] rounded-2xl shadow-lg px-10 py-10 w-fit bg-white z-20'>
            <h3 className='text-[20px] font-semibold'>Our clients geography</h3>
         </div>

         <MyMap />

      </section>
   )
}

export default Map