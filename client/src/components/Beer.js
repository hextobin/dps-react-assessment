import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
  Card,
  Container,
  Segment,
  Dimmer,
  Loader,
  Image,
  Button,
} from 'semantic-ui-react'

class Beer extends Component{

  state = {
    beer: []
  }

  componentDidMount() {
    axios.get(`/api/beer/${window.location.href.split('/').pop()}`)
      .then(res => {
        const beer = res.data;
        this.setState({ beer: beer });
      })
  }

  render(){
    const our_beer = this.state.beer.entries[0]
    console.log(our_beer)
    if (this.state.beer.length !== 0) {
      return(
        <Container style={styles.text}>
          <Card fluid>
            <Image src={our_beer.labels.medium} centered />
            <Card.Content>
              <Card.Header>{our_beer.name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Card.Description><strong>Style: </strong>{our_beer.style.name}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Card.Description><strong>ABV: </strong>{our_beer.abv}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Card.Description><strong>Organic: </strong>{our_beer.is_organic === 'Y' ? ('Yes') : ('No')}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Card.Description><strong>Description: </strong>{our_beer.description}</Card.Description>
            </Card.Content>
            <Card.Content>
              <Link to='/beers'>
                <Button color='blue'>Back</Button>
              </Link>
            </Card.Content>
          </Card>
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

export default Beer