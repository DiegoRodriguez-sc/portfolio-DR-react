import React from "react";
import { IoMailOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Contact = () => {
  const handleEmail = () => {
    window.open("mailto:diego.rodriguez.sc@gmail.com");
  };
  const handleGithub = () => {
    window.open("https://github.com/DiegoRodriguez-sc", "__blank");
  };
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/diego-rodriguez-sc/", "__blank");
  };

  return (
    <div>
      <section id="contact">
        <div className="container">
          <div className="heading-wrapper">
            <div className="heading">
              <p className="title">
                Want to <br />
                contact me?
              </p>
              <p className="separator" />
              <p className="subtitle">
                Please, you can press the icons or you can find me with the link
                to contact me:
              </p>
              <br />
              <div className="subtitle">
                <p onClick={handleEmail}>
                  <IoMailOutline /> Diego.rodriguez.sc@gmail.com{" "}
                </p>
                <p onClick={handleGithub}>
                  <IoLogoGithub /> DiegoRodriguez-sc
                </p>
                <p onClick={handleLinkedin}>
                  <IoLogoLinkedin /> Diego Rodriguez{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
