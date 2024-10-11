import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://web.facebook.com/people/M-Ali/pfbid0PSELzFThMAjazLBkmH4HjoqVq7SAoLDoUU1fs6QDnGwJJne64XLKQq2Q9sHEKR7Nl/?mibextid=ZbWKwL"><FaFacebookF /></a> 
            </span>
            <span className="bannerIcon">
               <a href="https://github.com/muhammadali35"><FaGithub /></a>
            </span>
            <span className="bannerIcon">
               <a href="https://www.linkedin.com/in/muhammad-ali-0282b6275/"><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-3 pt-1">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
           
              <CgWebsite/>
            </span>
            <span className="bannerIcon">
            <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media