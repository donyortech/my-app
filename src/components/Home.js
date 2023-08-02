import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Website</h1>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    maxWidth: "800px",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    fontWidth: "bold",
    color: "#333",
  },
};
