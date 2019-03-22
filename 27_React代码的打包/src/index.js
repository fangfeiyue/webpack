import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import Child from './child/Child';

// 别名的方式引入，需要配置alias
import Child from 'fang/Child';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'fang'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'F'
      });
    }, 2000);
  }

  render() {
    return <div><Child name={this.state.name} /></div>
  };
}

ReactDom.render(<App/>, document.getElementById('root'));
