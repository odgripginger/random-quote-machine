import React from "react";
import "../quotes.js";
import { QUOTES } from "../quotes.js";

export default class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: QUOTES.text,
      authors: QUOTES.authors,
      current: 60
    };
  }

  handleClick() {
    let current = this.state.current;
    const total = this.state.quotes.length;

    current = Math.floor(Math.random() * total);
    this.setState({ current });
    if (current === this.state.current) this.handleClick();
  }

  render() {
    const current = this.state.current;
    const quote = this.state.quotes[current];
    const author = this.state.authors[current];

    return (
      <div id="quote-box">
        <b id="text-box">
          <p id="text">{quote}</p>
          <br />
          <p id="author">{"- " + author}</p>
        </b>
        <button id="tweet-quote">
          <a
            href={
              "https://twitter.com/intent/tweet?hashtags=quotes,rickandmorty&related=freecodecamp&text=" +
              quote.replace(/\s/g, "%20") +
              "%20%0D-" +
              author.replace(/\s/g, "%20")
            }
          >
            <i class="fab fa-twitter" />
          </a>
        </button>
        <button>
          <a
            href={
              "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
              author.replace(/\s/g, "%20") +
              "&content=" +
              quote.replace(/\s/g, "%20") +
              "%0D" +
              "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
            }
          >
            <i className="fab fa-tumblr" />{" "}
          </a>
        </button>
        <button
          id="new-quote"
          onClick={() => {
            this.props.dropColor();
            return this.handleClick();
          }}
        >
          New Quote
        </button>
      </div>
    );
  }
}
