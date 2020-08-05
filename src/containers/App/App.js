import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import SearchBar from '../../components/SearchBar/SearchBar'
import CardList from '../../components/CardList/CardList';
import Scroll from '../../components/Scroll/Scroll';
import { setSearchField } from '../../actions';
import './App.css';

const mapStateToProps = state => {
  return { searchField: state.searchField }
}

const mapDispatchToProps = (dispatch) => {
  return { onSearchChange: (event) => dispatch(setSearchField(event.target.value)) }
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      robots : [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
      .then( users => this.setState({robots: users}))
  }

  render() {

    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return !robots.length ? <h1>Loading</h1> : (
      <Fragment>
        <header className="app-header">
          <h1>Robo Friends</h1>
          <SearchBar searchChange = {onSearchChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)