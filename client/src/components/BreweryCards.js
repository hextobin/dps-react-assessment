import React, { Component } from 'react'
import {
  Card,
  Dimmer,
  Loader,
  Button,
  Image,
} from 'semantic-ui-react'

class BreweryCards extends Component{

  state = {
    seeMore: false
  }

  showFull = () => {
    return (
      <Card.Content>
        <Card.Description><strong>Description:  </strong>{this.props.entry.description.substring(0, 5000)}</Card.Description>
      </Card.Content>
    )
  }

  showLess = () => {
    console.log('something')
    return (
      <Card.Content>
        <Card.Description><strong>Description:  </strong>{this.props.entry.description.substring(0, 50)}...</Card.Description>
      </Card.Content>
    )
  }

  toggleSeeMore = () => {
    this.setState(state => {
      return { seeMore: !state.seeMore}
    })
  }

  render(){
    if (this.props.entry.description) {
      return(
        <Card color='green'>
          <Image src={this.props.entry.images.square_medium} />
          <Card.Content>
            <Card.Header>{this.props.entry.name}</Card.Header>
          </Card.Content>
          <Card.Content extra>
          {!this.state.seeMore ? (this.showLess()) : (this.showFull())}
          {!this.state.seeMore ? (<Button onClick={() => {this.toggleSeeMore()}}>See More</Button>) : (<Button onClick={() => {this.toggleSeeMore()}}>See Less</Button>)}
          </Card.Content>
        </Card>
    )
    } else {
      return (

          <Card>
            <Dimmer active >
              <Loader size='massive'>Loading</Loader>
            </Dimmer>
          </Card>
      )
    }

  }
}




export default BreweryCards