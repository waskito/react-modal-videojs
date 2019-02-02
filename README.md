# react-modal-videojs

> React VideoJS on Modal Dialog

[![NPM](https://img.shields.io/npm/v/react-modal-videojs.svg)](https://www.npmjs.com/package/react-modal-videojs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-modal-videojs
```

## Usage

```jsx
import React, { Component } from 'react'
import ModalVideo from 'react-modal-videojs'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
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
    const { poster, src, show } = this.state;
    return (
      <div>
        <h1>React Modal VideoJS</h1>
        <div className="container">
          <ModalVideo
            playerId={ new Date() *1 }
            src={src}
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
```

## License

MIT © [waskito](https://github.com/waskito)