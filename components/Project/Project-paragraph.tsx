
type ParagraphProps = {
   text: string,
   className?: string,
}

function ProjectParagraph({ text, className }: ParagraphProps) {
   return (
      <p className={`${className} max-w-[550px]`}>
         {text}
      </p>
   )
}

export default ProjectParagraph