import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBounds from "../components/ErrorBounds";

// STATE: an object that describes my application
// PROPS: things that come out of STATE
//somewhere in here is a robust search bar

// create class App with components
class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ""
    }
  }
// make requests with componentDidMount
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
      .then(users => this.setState({robots: users}));
  }

// you can write your own functions as well, but check your syntax
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

// finally, remember to render everthing together. Have if statement in case things run slowly
  render(){
    const {robots, searchfield} = this.state;
    const filteredRobot = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (!robots.length) ?
      <h1>Loading</h1>:
      (
        <body>
        <div className="tc">
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBounds>
            <CardList robots={filteredRobot}/>
            </ErrorBounds>
          </Scroll>
        </div>
        </body>
      );
    }
 }
export default App;
