import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      gifs: []
    };
  }

  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=vuNAMKRtnXL2FlMZiqxu96JYLCyhy1p3&limit=25&rating=G')
    .then(response => response.json())
    .then(responseData => {
      this.setState({ gifs: responseData.data });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render(){
    console.log(this.state.gifs);
    return(
      <div>
        THIS IS THE APP.
      </div>
    );
  }
}
