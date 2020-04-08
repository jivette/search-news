import React from "react";
import New from "./New";

class NewWrapper extends React.Component {
  render() {
    const news = this.props.news.map((info, index) => (
      <New key={index} content={info} />
    ));

    return (
      <div
        style={{
          width: "80%",
          padding: 30,
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {news}
      </div>
    );
  }
}
export default NewWrapper;
