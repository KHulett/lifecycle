import React, {Component} from 'react';
import { loadPartialConfig } from '@babel/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

 componentDidMount() { //add in async
  fetch('https://jsonplaceholder.typicode.com/users') // add in await then figure out what to do with .then's
    .then(res => {
      return res.json();
    })
      .then(data => {  
      console.log(data)
      this.setState({
        isLoaded: true,
        items:data,
      })
    })
}

render() {
  var {isLoaded, items} = this.state;
  if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="App">
        <div className="Names">
          <ul>
            {items.map(el => {
              return (
                <li key={el.id}>
                  Name: {el.name} | UserName: {el.username} | {' '} <a href={`https.://${el.website}`}> Website </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
}
export default App;