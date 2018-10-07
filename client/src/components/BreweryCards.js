import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
          <Link to={`/brewery/${encodeURIComponent(this.props.entry.name)}`}>
            <Button color='blue'>{this.props.entry.name.substring(0, 8)}</Button>
          </Link>
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