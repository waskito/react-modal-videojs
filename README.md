# react-modal-videojs

> React VideoJS on Modal Dialog. Based from [react-video-js](https://github.com/sylvesteraswin/react-video-js), I tweak it a bit.

[![NPM](https://img.shields.io/npm/v/react-modal-videojs.svg)](https://www.npmjs.com/package/react-modal-videojs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

Check the [Demo](https://waskito.github.io/react-modal-videojs)

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
            playerId={ (new Date() *1).toString() }
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

## Props
* `playerId`: (required) String.
* `source`: (required) String.
* `sourceHD`: String, default `''`.
* `poster`: String, default `null`.
* `responsive`: Boolean, default `false`.
* `fluid`: Boolean, default `false`.
* `fill`: Boolean, default `true`.
* `skin`: String, default `default`.
* `autoplay`: Boolean, default `true`.
* `bigPlayButton`: Boolean, default `false` (Because `autoplay` is `true`).
* `customSkinClass`: String, default `''`.
* `height`: Number, default `null`.
* `width`: Number, default `null`.
* `loop`: Boolean, default `false`.
* `onReady`: Functon, `callback(videoJsPlayer)`.
* `resize`: Boolean, default `true`.
* `options`: Boolean, default
* `onEnded`: Function, `callback(videoJsPlayer)`.
* `onPlay`: Function, `callback(videoJsPlayer)`.
* `onPause`: Function, `callback(videoJsPlayer)`.
* `debounce`: Number, default `300`.
* `bigPlayButtonCentered`: Boolean.
* `modalBackdropClass`: String, default `''`.
* `modalContentClass`: String, default `''`.
* `modalCloseButtonClass`: String, default `''`.
* `fadeIn`: Boolean, default `true`.
* `alt`: String, default `''`.

## License

MIT © [waskito](https://github.com/waskito)
