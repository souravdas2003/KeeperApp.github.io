import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>MADE BY SOURAV DAS</p>
    </footer>
  );
}

export default Footer;
