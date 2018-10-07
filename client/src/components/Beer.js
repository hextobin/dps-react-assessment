import React, { Component } from 'react'
import axios from 'axios'
import {
  Card,
  Container,
  Segment,
  Dimmer,
  Loader,
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
    if (this.state.beer.length !== 0) {
      return(
        <Container style={styles.text}>
          <Card>
            
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