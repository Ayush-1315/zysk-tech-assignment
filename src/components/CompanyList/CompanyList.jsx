import companyLogo1 from "../../assets/company1.png";
import companyLogo2 from "../../assets/company2.png";
import companyLogo3 from "../../assets/company3.png";
import companyLogo4 from "../../assets/company4.png";
import companyLogo5 from "../../assets/company5.png";
import companyLogo6 from "../../assets/company6.png";

import CompanyListCSS from "./companyList.module.css";
export const CompanyList = () => {
  return (
    <>
      <span>Join 4,000+ companies already growing</span>
    <div className={CompanyListCSS.listContainer}>
      <div>
        <img
          src={companyLogo1}
          alt="company-1"
          className={CompanyListCSS.company}
        />
      </div>
      <div>
        <img
          src={companyLogo2}
          alt="company-2"
          className={CompanyListCSS.company}
        />
      </div>
      <div>
        <img
          src={companyLogo3}
          alt="company-3"
          className={CompanyListCSS.company}
        />
      </div>
      <div>
        <img
          src={companyLogo4}
          alt="company-4"
          className={CompanyListCSS.company}
        />
      </div>
      <div>
        <img
          src={companyLogo5}
          alt="company-5"
          className={CompanyListCSS.company}
        />
      </div>
      <div>
        <img
          src={companyLogo6}
          alt="company-6"
          className={CompanyListCSS.company}
        />
      </div>
    </div></>
  );
};
