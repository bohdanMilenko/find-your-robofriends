import React from "react";
import {robots} from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            robots: {robots},
            searchField: ''
        }
    }

    render() {
        return (
            <div className='tc'>
                <h2>Your Space For Robots!</h2>
                <SearchBox/>
                <CardList robots={robots}/>
            </div>
        );

    }
}

export default App;