import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={window.footBannerURL} alt="" className="foot-banner" />
      <div className="footer">
        <div className="diego">
          <h4>Diego Chavez</h4>
          <div className="links">
            {" "}
            <a
              href="https://www.linkedin.com/in/diego-chavez-784310114/"
              target="_blank"
            >
              LinkedIn
            </a>
            &nbsp; |&nbsp;{" "}
            <a
              href="https://diegorenechavez.github.io/Portfolio/"
              target="_blank"
            >
              {" "}
              Portfolio
            </a>
          </div>
        </div>
        <div className="paulo">
          <h4>Paulo Bocanegra</h4>
          <div className="links">
            {" "}
            <a
              href="https://www.linkedin.com/in/paulo-bocanegra-a89b641b9/"
              target="_blank"
            >
              {" "}
              LinkedIn{" "}
            </a>
            &nbsp; |&nbsp;{" "}
            <a
              href="https://paulobocanegra.github.io/portfolio/"
              target="_blank"
            >
              {" "}
              Portfolio{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
