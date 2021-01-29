import React from "react"

const Footer = () => {
    return(
        <div>
            <img src={window.footBannerURL} alt="" className="foot-banner" />
            <div className="footer">
                Contact Me | Portfolio | LinkedIn
            {/* <img src={window.meURL} alt="" className="me" /> */}
            </div>
        </div>
    )
}


export default Footer;