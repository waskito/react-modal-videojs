import React, { Component } from 'react'
import ModalVideo from 'react-modal-videojs'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      source: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      poster: "https://raw.githubusercontent.com/waskito/react-modal-videojs/master/example/public/preview.png",
      show: false
    }
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  render () {
    const { poster, source, show } = this.state;
    return (
      <div>
        <h1>React Modal VideoJS</h1>
        <div className="container">
          <ModalVideo
            playerId={ (new Date() *1).toString() }
            source={source}
            preview={poster}
            show={show}
            showModal={this.showModal}
            handleClose={this.hideModal}
          />
        </div>
      </div>
    )
  }
}
