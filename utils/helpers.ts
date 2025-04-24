export function getMarginClass(index: number | undefined): string | undefined {
   if (!index) return

   if (index % 2 === 1 && index > 2) return "md:mt-4 xl:mt-6"
   if (index % 2 === 0 && index > 2) return "md:-mt-4 xl:-mt-6"

   return index % 2 === 0 ? '' : 'md:mt-8 xl:mt-12';
}