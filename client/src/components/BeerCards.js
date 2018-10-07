import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  Dimmer,
  Loader,
  Button,
  Image,
} from 'semantic-ui-react'

class BeerCards extends Component{

  state = {
    seeMore: false,
    seeLink: false,
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
      console.log(this.props.entry.name)
      console.log(encodeURIComponent(this.props.entry.name))
      return(
        <Card color='green'>
          {this.props.entry.labels ? (<Image src={this.props.entry.labels.medium} />) : (<Image src='https://pbs.twimg.com/profile_images/1217567809/BeerDirectoryAvatar_400x400.jpg' />)}
          <Card.Content>
            <Card.Header>{this.props.entry.name}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Card.Description><strong>Style: </strong>{this.props.entry.style.name}</Card.Description>
          </Card.Content>
          <Card.Content extra>
          {!this.state.seeMore ? (this.showLess()) : (this.showFull())}
          {!this.state.seeMore ? (<Button onClick={() => {this.toggleSeeMore()}}>Read More</Button>) : (<Button onClick={() => {this.toggleSeeMore()}}>Read Less</Button>)}
          <Link to={`/beer/${encodeURIComponent(this.props.entry.name)}`}>
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




export default BeerCards