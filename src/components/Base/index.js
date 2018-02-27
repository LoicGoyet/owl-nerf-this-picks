import React from "react"
import GameList from "../GameList"

class Base extends React.Component {
    componentDidMount() {
        return this.props.fetch()
    }

    render() {
        return <GameList gameList={[1]}/>
    }
}

export default Base