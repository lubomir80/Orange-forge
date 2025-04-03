import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"

function Language() {
   return (
      <div className="absolute right-[40px]">
         <Select>
            <SelectTrigger className="w-[70px]">
               <SelectValue placeholder="en" />
            </SelectTrigger>
            <SelectContent>
               <SelectItem value="en">en</SelectItem>
            </SelectContent>
         </Select>
      </div>
   )
}

export default Language