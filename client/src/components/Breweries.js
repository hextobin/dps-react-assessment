import React, { Component } from 'react';
import axios from 'axios'
import { 
  Container,
  Card,
  Dimmer,
  Loader,
  Segment,
 } from 'semantic-ui-react'
import BreweryCards from './BreweryCards'

class Breweries extends Component{

  state = {
    breweries: [],
  }

  componentDidMount() {
    axios.get(`api/all_breweries?per_page=150`)
      .then(res => {
        const breweries = res.data;
        
        let new_breweries = breweries.entries.filter(brew => 
          // debugger
          (brew.hasOwnProperty('images') && brew.hasOwnProperty('description'))
        )
        // console.log(new_breweries)
        this.setState({ breweries: new_breweries });
      })
  }

  BreweryCards = () => {
    // console.log(this.state.beers) //object all entries
    // console.log(this.state.breweries.entries) // array of object entries
    // console.log(this.state.beers.entries[4]) // single object entry
    // console.log(this.state.beers.entries[4].name) // string
    // console.log(this.state.beers.entries[4].style.name) // string
    // console.log(this.state.beers.entries[4].description) // string
    console.log(this.state.breweries)
    return this.state.breweries.map((entry, i) => 
      <BreweryCards key={i} entry={entry} />
    )


    // breweries.filter(brew => {
    //   brew.images.square_medium !== undefined
    // })
  }

  render(){
    if (this.state.breweries.length !== 0) {
      return(
        <Container style={styles.text}>
          <Card.Group itemsPerRow={4}>
            {this.BreweryCards()}
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

export default Breweries