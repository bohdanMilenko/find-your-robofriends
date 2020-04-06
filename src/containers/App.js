import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(returnedUsers => this.setState({robots: returnedUsers}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log(this.state.searchfield)
    };

    render() {
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        if (!robots.length) {
            return (
                <h1 className='tc'> Loading...</h1>
            )
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Your Space For Robots!</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );

        }
    }
}

export default App;