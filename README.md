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


class Example extends Component {
  constructor(props){
    super(props)
    this.state = {
      poster: "http://example.com/source/poster.png",
      src: "http://example.com/source/video.mp4",
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
    const { poster, src, show} = this.state;
    return (
      <ModalVideo
        preview={poster}
        src={src}
        show={show}
        showModal={this.showModal}
        handleClose={this.hideModal}
      />
    )
  }
}
```

## License

MIT © [waskito](https://github.com/waskito)
