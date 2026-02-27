import React from "react";

const Post = ({ postResource }) => {
  const post = postResource.read();

  if (!post) {
    return (
      <div style={styles.errorBox}>
        <h2 style={styles.errorTitle}>Cannot load post data!</h2>
        <p style={styles.errorText}>Please check your network connection.</p>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>📰 Post Information</h2>

      <div style={styles.section}>
        <h3 style={styles.subTitle}>Title</h3>
        <p style={styles.content}>{post.title}</p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.subTitle}>Content</h3>
        <p style={styles.content}>{post.body}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: "650px",
    margin: "40px auto",
    padding: "25px",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#2c3e50",
    borderBottom: "2px solid #eee",
    paddingBottom: "10px",
  },
  section: {
    marginBottom: "20px",
    padding: "15px",
    borderRadius: "12px",
    backgroundColor: "#f8f9fa",
  },
  subTitle: {
    margin: "0 0 10px 0",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#34495e",
  },
  content: {
    margin: 0,
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#555",
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

export default Post;
