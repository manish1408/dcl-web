import Prismic from "@prismicio/client";
import Loader from "./Loader";
import React from "react";
import { Search } from "@material-ui/icons";
import Link from "next/link";
// import { Link } from "prismic-reactjs";
import { hrefResolver, linkResolver } from "prismic-configuration";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
      button: false,
    };
  }

  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    if (!query) {
      this.setState({ query, result: {}, message: "" });
    } else {
      // this.setState( {query: query} ) normal way
      //ES6 way
      this.setState({ query, loading: true, message: "" }, () => {
        this.fetchSearchResults(query);
      });
    }
  };

  fetchSearchResults = (query) => {
    const apiEndpoint = "https://distinctcloud.prismic.io/api/v2";
    const api = Prismic.client(apiEndpoint);
    api
      .query([
        Prismic.Predicates.at("document.type", "blog_post"),
        Prismic.Predicates.fulltext("document", query),
      ])
      .then((data) => {
        const resultNotFoundMsg = !data.results.length
          ? "No Search Result"
          : "";
        this.setState({
          results: data.results,
          message: resultNotFoundMsg,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          message: "Failed to load request",
        });
      });
  };

  renderSearchResults = () => {
    const { results } = this.state;
    if (Object.keys(results).length && results.length) {
      return (
        <div>
          {results.map((result) => {
            return (
              <div key={result.id}>
                <Link as={linkResolver(result)} href={hrefResolver(result)}>
                  <a className="result-items">
                    <h6 className="image-username">
                      {result.data.title[0].text}
                    </h6>
                    <div className="image-wrapper">
                      <img
                        className="image"
                        src={result.data.featured_image.url}
                        alt="image"
                      />
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
  };

  render() {
    const { query, message, loading, results } = this.state;
    return (
      <>
        <form className="search-form">
          <label htmlFor="search-input">
            <span className="screen-reader-text">Search for:</span>
            <input
              className="search-field"
              name="query"
              type="text"
              onChange={this.handleOnInputChange}
              value={this.state.query}
              id="search-input"
              placeholder="Search..."
            />
          </label>
          <button type="submit" onClick={this.handleOnSubmit}>
            <Search />
          </button>
        </form>
        {message && <p>{message}</p>}

        <div className={`search-loading ${loading ? "show" : "hide"}`}>
          <Loader />
        </div>
        {this.renderSearchResults()}
      </>
    );
  }
}

export default SearchComponent;
