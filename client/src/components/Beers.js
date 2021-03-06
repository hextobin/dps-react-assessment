import React, { Component } from 'react';
import axios from 'axios'
import { 
  Container,
  Card,
  Dimmer,
  Loader,
  Segment,
 } from 'semantic-ui-react'
 import BeerCards from './BeerCards'

class Beers extends Component{

  state = {
    beers: [],
  }

  componentDidMount() {
    axios.get(`api/all_beers?per_page=200`)
      .then(res => {
        const beers = res.data;
        let new_beers = beers.entries.filter(beer => 
          // debugger
          (beer.hasOwnProperty('labels') && beer.hasOwnProperty('description'))
        )
        this.setState({ beers: new_beers });
      })
  }

  BeerCards = () => {
    // console.log(this.state.beers) //object all entries
    // console.log(this.state.beers) // array of object entries
    // console.log(this.state.beers.entries[4]) // single object entry
    // console.log(this.state.beers.entries[4].name) // string
    // console.log(this.state.beers.entries[4].style.name) // string
    // console.log(this.state.beers.entries[4].description) // string

    return this.state.beers.map((entry, i) => 
      <BeerCards key={i} entry={entry} />
    )
  }

  render(){
    if (this.state.beers.length !== 0) {
      return(
        <Container style={styles.text}>
          <Card.Group itemsPerRow={4}>
            {this.BeerCards()}
          </Card.Group>
        </Container>
      )
    } else {
      return (
        <Container style={styles.text}>
          <Segment>
            <Dimmer active page>
              <Loader size='massive'>Loading</Loader>
            </Dimmer>
          </Segment>
        </Container>
      )
    }
  }
}

const styles = {
  text: {
    color: 'white'
  }
}

export default Beers

