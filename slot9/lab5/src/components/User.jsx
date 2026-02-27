import React from "react";

const User = ({ userResource }) => {
    const user = userResource.read();

    if (!user) {
        return (
            <div style={styles.errorBox}>
                <h2 style={styles.errorTitle}>Cannot load post data!</h2>
                <p style={styles.errorText}>Please check your network connection.</p>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{user.name}</h2>
            <p style={styles.email}>{user.email}</p>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "400px",
        margin: "40px auto",
        padding: "25px",
        borderRadius: "15px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },
    name: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#2c3e50",
        marginBottom: "10px",
    },
    email: {
        fontSize: "16px",
        color: "#555",
    },
    error: {
        textAlign: "center",
        marginTop: "50px",
        color: "red",
        fontFamily: "Arial, sans-serif",
    },
      errorBox: {
    maxWidth: "650px",
    margin: "40px auto",
    padding: "25px",
    borderRadius: "15px",
    backgroundColor: "#ffe6e6",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  errorTitle: {
    color: "#c0392b",
    fontSize: "20px",
    fontWeight: "bold",
  },
  errorText: {
    color: "#555",
    marginTop: "10px",
  },
};

export default User;
