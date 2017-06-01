import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  search() {
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;

    console.log(FETCH_URL)
  }

  pressEnter(event) {
    if(event.key == 'Enter'){
      this.search();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              value={this.state.query}
              placeholder="Search for an Artist..."
              onChange={(event) => {this.setState({query: event.target.value})}}
              onKeyPress={event => this.pressEnter(event)}/>
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div>Artist picture</div>
        <div>Artist name</div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
