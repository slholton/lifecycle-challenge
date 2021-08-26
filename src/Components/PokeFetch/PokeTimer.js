import React, { Component } from 'react'

class PokeTimer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            isOn: false,
            start: 10000
        }

        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    startTimer() {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval (() => this.setState({
            time: Date.now() - this.state.start
        }), -1000)
    }

    stopTimer() {
        this.setState ({isOn: false})
        clearInterval(this.timer)
    }

    resetTimer() {
        this.setState({time: 0, isOn: false})
    }

    render() {

        let start = (this.state.time === 100000) 
        ? <button onClick={this.startTimer}>Start</button> 
        : null

        // let stop = (this.state.time ===10000) || !this.state.isOn) ? null 
        // : <button onClick={this.stopTimer}>Stop</button>

        let resume = (this.state.time === 10000 || this.state.isOn) ?
        null :
        <button onClick={this.startTimer}>Resume</button>

        let reset = (this.state.time === 10000 || this.state.isOn) ?
        null :
        <button onClick={this.resetTimer}>Reset</button>

        return(
            <div>
                <h3>timer: {(this.state.time)}</h3>
                    {start}
                    {resume}
                    {/* {stop} */}
                    {reset}
            </div>
        )
    }
};

export default PokeTimer;