import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'
import Content from './components/Content'
const BOOKS_URL = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount() {

    fetch(BOOKS_URL).then((data) => {
      return data.json()
    }).then((json) => {
      this.setState({books: json})
    })
  }

  render() {
    return (
      <div>
        <Menu />
        <Content books = {this.state.books}/>
      </div>
    );
  }
}

export default App;
