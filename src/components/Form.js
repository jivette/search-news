import React from "react";
import NewWrapper from "./NewWrapper";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { word: "", news: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ word: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (!this.state.word) {
      return;
    }
    await fetch(
      `http://newsapi.org/v2/everything?q=${this.state.word}&from=2020-04-08&sortBy=popularity&apiKey=53c012451189474fbea12382c8df024e`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ news: data.articles });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          marginTop: 20
        }}
      >
        <form
          onSubmit={this.handleSubmit}
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <h1 style={{ color: "white" }}>Search News</h1>
          <input
            type="text"
            name="word"
            placeholder="Enter search item"
            value={this.state.value}
            onChange={this.handleChange}
            style={{
              width: 300,
              borderRadius: 5,
              height: 35,
              border: "none",
              marginBottom: 15,
              paddingLeft: 5
            }}
          />
          <input
            type="submit"
            value="Search"
            style={{
              width: 300,
              borderRadius: 5,
              height: 35,
              border: "none",
              background: "cadetblue",
              color: "white",
              fontSize: 17
            }}
          />
        </form>
        {this.state.news.length > 0 ? (
          <NewWrapper news={this.state.news} />
        ) : null}
      </div>
    );
  }
}

export default Form;
