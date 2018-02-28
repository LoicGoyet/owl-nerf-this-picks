import React from "react"
import GameList from "../GameList"

class Base extends React.Component {
    componentDidMount() {
        this.props.fetchPicks()
        this.props.fetchSchedule()
        this.props.fetchTeams()
        return true
    }

    render() {
        return (
            <div>
                <GameList gameList={[1]}/>
            </div>
        )
    }
}

export default Base