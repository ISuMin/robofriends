import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import SearchBar from '../../components/SearchBar/SearchBar'
import CardList from '../../components/CardList/CardList';
import Scroll from '../../components/Scroll/Scroll';
import { setSearchField, requestRobots } from '../../actions';
import './App.css';

const mapStateToProps = state => {
  return { 
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {

    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return isPending ? <h1>Loading</h1> : (
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