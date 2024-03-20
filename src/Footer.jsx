import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Akriti Subedi</p>
    </footer>
  );
}

export default Footer;
