import React, { Component } from 'react';

/*页面首次加载执行
  componentWillMount
  render
  componentDidMount

  属性变化会依次调用：
  componentWillReceiveProps
  shouldComponentUpdate
  componentWillUpdate
  render
  componentDidUpdate

  状态变化会依次调用：
  shouldComponentUpdate
  componentWillUpdate
  render
  componentDidUpdate
*/

class Child extends Component {
  componentWillMount() {
    console.log('componentWillMount')
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render(){
    const { name } = this.props;
    console.log('render')
    return name;
  }
}

export default Child;
