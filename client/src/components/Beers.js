import React, { Component } from 'react';
import axios from 'axios'

class Beers extends Component{

  state = {
    beers: []
  }

  componentDidMount() {
    axios.get(`api/all_beers`)
      .then(res => {
        const beers = res.data;
        this.setState({ beers });
      })
  }

  render(){
    return(
      <div style={styles.text}>
        <p>test text</p>
      </div>
    )
  }
}

const styles = {
  text: {
    color: 'white'
  }
}

export default Beers

