import React, { Component } from 'react'
import PokeTimer from './PokeTimer';
import './PokeFetch.css';

class PokeFetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokeInfo: '',
      pokeSprite: '',
      pokeName: '',
    }
  }

  fetchPokemon() {
    let min = Math.ceil(1);
    let max = Math.floor(152);
    let pokeNum = Math.floor(Math.random() * (max - min) + min);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        this.setState({
          pokeInfo: res,
          pokeSprite: res.sprites.front_default,
          pokeName: res.species.name,
        })
      })
      .catch((err) => console.log(err))
  }

  // componentDidMount() {
  //   interval = setInterval(() => {
  //     timer((prevTime) => prevTime + 10);
  //   }, 10);
  // }

  // componentDidUpdate() {
  //   let delta = Date.now() - startTimeRef.current;
  //   setTimeout(time + delta);
  //   startTimeRef.current = Date.now();
  // }

  // componentWillUnmount() {
  //   clearInterval(interval);
  // }

  render() {
    return (
      <div className={'wrapper'}>
        <button className={'start'} onClick={() => this.fetchPokemon()}>Start!</button>
        <h1 className={'timer'} onClick={() => this.fetchPokemon()}>Timer<PokeTimer /></h1>
        <div className={'pokeWrap'} >
          <img className={'pokeImg'} src={this.state.pokeSprite} />
          <h1 className={'pokeName'}>{this.state.pokeName}</h1>
        </div>
      </div>
    )
  }
}

export default PokeFetch;