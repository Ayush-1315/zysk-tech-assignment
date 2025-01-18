import { footerLinks } from "../../data/data";
import FooterLink from "../FooterLink/FooterLink";

const Footer=()=>{
    return<footer>
        <div className="footer-container">
            {footerLinks.map((option,index)=><FooterLink {...option} key={index}/>)}
        </div>
        <div className="footer-branding">
            <img src="/images/logo.png" alt="footer-branding" />            
            <p>© 2077 zysktechnologies. All rights reserved.</p>
        </div>
    </footer>
}
export default Footer;