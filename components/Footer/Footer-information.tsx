import FooterOffices from "./Footer-offices"
import FooterSocial from "./Footer-social"


function FooterInformation() {
   return (
      <div className="space-y-15 flex-1">
         <FooterOffices />
         <FooterSocial />
      </div>
   )
}

export default FooterInformation