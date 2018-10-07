import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
  Container,
  Card,
  Image,
  Button,
  Segment,
  Dimmer,
  Loader,
} from 'semantic-ui-react'

class Brewery extends Component{

  state = {
    brewery: []
  }

  componentDidMount() {
    axios.get(`/api/brewery/${window.location.href.split('/').pop()}`)
      .then(res => {
        const brewery = res.data;
        this.setState({ brewery});
      })
  }

  render(){
    if (this.state.brewery.length !== 0) {
      const our_brewery = this.state.brewery.entries[0]
      console.log(our_brewery)
      return(
        <Container style={styles.text}>
          <Card fluid>
            <Image src={our_brewery.images.square_medium} centered />
            <Card.Content>
              <Card.Header>{our_brewery.name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Card.Description><strong>Description: </strong>{our_brewery.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Card.Description><strong>Established: </strong>{our_brewery.established ? (`${our_brewery.established}`) : ('N/A')}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Card.Description><strong>Organic: </strong>{our_brewery.is_organic === 'Y' ? ('Yes') : ('No')}</Card.Description>
            </Card.Content>
              <Card.Content extra>
                <a href={our_brewery.website} target='_blank' style={styles.link}>
                <Card.Description>{our_brewery.website}</Card.Description>
                </a>
              </Card.Content>
            <Card.Content>
              <Link to='/breweries'>
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
  },
  link: {
    color: 'blue'
  }
}

export default Brewery
