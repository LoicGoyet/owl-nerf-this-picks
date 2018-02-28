import React from "react"
import GameList from "../GameList"

class Base extends React.Component {
    componentDidMount() {
        this.props.fetchPicks()
        this.props.fetchSchedule()
        return true
    }

    render() {
        return <GameList gameList={[1]}/>
    }
}

export default Base