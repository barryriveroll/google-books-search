import React from "react";

const styles = {
  header: {
    padding: 80,
    margin: "10px 0px",
    borderRadius: 4
  },
  skinnyHeader: {
    fontWeight: 300
  }
};

function Header(props) {
  return (
    <div style={styles.header} className="row center z-depth-1">
      <h2 style={styles.skinnyHeader}>(React) Google Books Search</h2>
      <h6>Search for books via Google Books and save favorites</h6>
    </div>
  );
}

export default Header;
