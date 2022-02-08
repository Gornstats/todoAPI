import React, { Component } from 'react';

const list = [
  {
    "id":1,
    "title":"1st hardcode todo",
    "body":"react is cooking my PC"
  },
  {
    "id":2,
    "title":"second hardcode todo",
    "body":"this will do"
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list };
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
