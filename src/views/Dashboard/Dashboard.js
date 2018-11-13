import React, { Component } from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      API_Data: false,
      Empty_data: null
    };
  }
  render() {
    return (
      <div>
        <Sample/>
        <div>You are now at {location.pathname}</div>
      </div>
    );
  }
}
class Sample extends Dashboard {
  render() {
    return (
      <div>
        Sample
      </div>
    );
  }
}
export default Dashboard;
