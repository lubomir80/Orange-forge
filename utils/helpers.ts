export function getMarginClass(index: number | undefined): string | undefined {
   if (!index) return
   return index % 2 === 0 ? 'md:mb-6 xl:mb-12' : 'md:mt-6 xl:mt-12';
}