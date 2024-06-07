import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  tick() {
    this.setState({
      date: new Date()
    })
    // 需要根据上一个state改变的时候，需要使用prevState
    // 不需要就直接改
  }

  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }
  
  render() {
    return (
      <div className="Clock">
	<h2>
	  {this.state.date.toLocaleTimeString()}
	</h2>
      </div>
    )
  }
}

export default Clock;
