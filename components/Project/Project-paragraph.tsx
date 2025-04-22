
type ParagraphProps = {
   text: string,
   className?: string,
}

function ProjectParagraph({ text, className }: ParagraphProps) {
   return (
      <p className={`${className} my-[25px] max-w-[550px]`}>
         {text}
      </p>
   )
}

export default ProjectParagraph