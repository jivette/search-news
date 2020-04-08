import React from "react";

class New extends React.Component {
  render() {
    const { title, content, url, urlToImage } = this.props.content;
    console.log(this.props);
    return (
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          marginBottom: 20,
          background: "aliceblue",
          width: 300,
          padding: 20,
          marginRight: "3%",
          boxSizing: "border-box"
        }}
      >
        <div
          alt="imageNotice"
          style={{
            width: "100%",
            height: 150,
            backgroundImage: `url(${urlToImage})`,
            backgroundSize: "cover"
          }}
        ></div>
        <div style={{ flex: 1, textAlign: "justify", wordBreak: "break-all" }}>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <a
            href={url}
            style={{
              flexDirection: "row",
              display: "flex",
              flexWrap: "wrap",
              color: "white",
              textDecoration: "none",
              alignItems: "center",
              background: "#a50000",
              padding: 10,
              marginBottom: 20,
              borderRadius: 20,
              width: 200,
              justifyContent: "center"
            }}
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
}
export default New;
