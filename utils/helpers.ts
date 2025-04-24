export function getMarginClass(index: number | undefined): string | undefined {
   if (!index) return

   if (index % 2 === 1 && index > 2) return "mt-4 lg:mt-6"
   if (index % 2 === 0 && index > 2) return "-mt-4 lg:-mt-6"

   return index % 2 === 0 ? '' : 'mt-8 lg:mt-12';
}