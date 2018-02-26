import React, { Component } from 'react'
import Stage from './Components/Stage'
import Picks from './Components/Picks'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stages: null
    }

    return
  }

  async componentDidMount() {
    const scheduleApi = await fetch('https://api.overwatchleague.com/schedule')
    const schedule = await scheduleApi.json()
    const { stages } = schedule.data

    return this.setState({ stages })
  }

  render() {
    const { stages } = this.state

    return (
      <main className="container-fluid">
        {!stages && (
          <h1>Stages not loaded</h1>
        )}

        {stages && (
          <Picks stages={stages}/>
        )}

        {stages && stages.map(stage => (
          <Stage key={stage.id} stage={stage}/>
        ))}
      </main>
    );
  }
}

export default App;
