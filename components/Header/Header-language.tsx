import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"

function HeaderLanguage({ className }: { className?: string }) {
   return (
      <div className={`${className} cursor-pointer`}>
         <Select>
            <SelectTrigger className="w-[70px]">
               <SelectValue placeholder="en" />
            </SelectTrigger>
            <SelectContent>
               <SelectItem value="en" disabled={true}>en</SelectItem>
            </SelectContent>
         </Select>
      </div>
   )
}

export default HeaderLanguage