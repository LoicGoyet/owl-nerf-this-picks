import React from "react"
import ReactDOM from "react-dom"

import GameList from "./components/GameList"

class App extends React.Component {
    render() {
        return (
            <div>
                <GameList gameList={["hello", "world"]}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));