import React, { Component } from "react";
import { createClient } from "contentful";
import {BrowserRouter, Route, Link} from 'react-router-dom'


class Test extends Component {
  constructor() {
    super();
    this.state = { items: [] };
    this.client = createClient({
      space: "xd2120uguiqw",
      accessToken:
        "zxN1svY1J8QHgpWN-zG6nt4BbjM2bnX71ol4lulIngU",
      host: "preview.contentful.com"
    });
  }


  componentDidMount() {
    this.client
      .getEntries({
         content_type: "page",
         'fields.slug': "about-us",
         include: 3,
                    
      })
      .then((response) => {
        this.setState({ items: response.items })
        console.log(response)  
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {this.state.items.map((page) => {
              return <li key={page.sys.id}>{page.fields.name}</li>;
            })}
          </ul>
          <p>{this.state.items.map((page) => {
              return <li key={page.sys.id}>{page.fields.seoDescription}</li>;
            })}</p>   
          <p>{this.state.items.map((page) => {
              return <li key={page.sys.id}>{page.fields.body[0].fields.name}</li>;
            })}</p>        
        </header>
      </div>
    );
  }
}

export default Test;
