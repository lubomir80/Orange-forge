import FooterTitle from "./Footer-title"


function FooterOffices() {
   return (
      <div>
         <FooterTitle className='text-white/50'>Offices</FooterTitle>
         <div className="lg:text-lg">
            <span>
               <p>Johan Jongkindstraat 358</p>
               <p>1089CK Amsterdam</p>
               <p>Netherlands</p>
               <p>&nbsp;</p>
               <p>KVK number: 9999666</p>
               <p>BTW-ID: NL000000</p>
               <p>&nbsp;</p>
            </span>
            <a href="tel:+48 645 671 934">+48 645 671 934</a>
         </div>
      </div>
   )
}

export default FooterOffices