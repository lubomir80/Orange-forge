import { v4 as uuidv4 } from 'uuid';

type TagsProps = {
   tags: string[],
   className?: string
}

function Tags({ tags, className }: TagsProps) {
   return (
      <div className={`flex gap-2 ${className}`}>
         {tags.map(tag => (
            <p key={uuidv4()}
               className='font-bold uppercase rounded-full border-2 border-current px-3 py-1 sm:px-4 sm:py-2 md:px-5 lg:text-[20px]'>{tag}
            </p>
         ))
         }
      </div>
   )
}

export default Tags