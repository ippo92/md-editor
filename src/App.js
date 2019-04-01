import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import './App.css';

import marked from 'marked'

import { sampleText } from './sampleText'

class App extends Component {

  state = {
    text: sampleText
  }

  componentDidUpdate () {
    const { text } = this.state
    localStorage.setItem('text', text) 
  }

  componentDidMount () {

    const text = localStorage.getItem('text')

    if (text) {
      this.setState({text})
    }
    else {
      this.setState({ text: sampleText })
    }
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  renderText = text => {
    const __html = marked(text, { sanitize: true})
    return { __html }
  
  }
  

  render() {
    return (
      <div id="app-wall" style={{ backgroundColor: "rgba(0, 204, 204, .15)" }}>
       <div id="app">
       <header>fichier.md
            <div class="buttons"></div>
        </header>
        <div class="editor">
        <textarea class="code" style={{ color: "white" }} onChange={this.handleChange} value={ this.state.text }></textarea>
        <div dangerouslySetInnerHTML={this.renderText(this.state.text)} class="result"></div>
        </div>
       </div>
      
      
      </div>
    );
  }
}

export default App;