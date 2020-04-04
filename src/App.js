import React from "react";
import {robots} from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log(this.state.searchfield)
    };

    render() {
        const filteredRobots = this.state.robots.filter( robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return (
            <div className='tc'>
                <h2>Your Space For Robots!</h2>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );

    }
}

export default App;