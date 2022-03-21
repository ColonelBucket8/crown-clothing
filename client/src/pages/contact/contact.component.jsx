import React from "react";
import {
  ContactPageContainer,
  TitleContainer,
  ImageContainer,
  Image,
} from "./contact.style";

const Contact = () => {
  return (
    <ContactPageContainer>
      <TitleContainer>Contact Page</TitleContainer>
      <ImageContainer>
        <Image
          src="http://www.theblackplanet.org/wp-content/uploads/2016/10/Deathspell-Omega-logo.jpg"
          alt="logo"
        />
      </ImageContainer>
      <p>
        <span>
          <strong>Email: </strong>test@gmail.com
        </span>
        <br />
        <span>
          <strong>Phone: </strong>013-456789
        </span>
        <br />
        <span>
          <strong>Address: </strong>123 Railway Road, Melbourne, 56399, KL
        </span>
      </p>
    </ContactPageContainer>
  );
};

export default Contact;
