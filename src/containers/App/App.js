import React, { Component, Fragment } from 'react'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import SearchBar from '../../components/SearchBar/SearchBar'
import CardList from '../../components/CardList/CardList';
import Scroll from '../../components/Scroll/Scroll';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      robots : [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
      .then( users => this.setState({robots: users}))
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value })
  }

  render() {

    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));

    return !robots.length ? <h1>Loading</h1> : (
      <Fragment>
        <header className="app-header">
          <h1>Robo Friends</h1>
          <SearchBar searchChange = {this.onSearchChange}/>
        </header>
        <Scroll>
          <ErrorBoundry>
            <CardList robots = {filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </Fragment>
    ) 
  }

}