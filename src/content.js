import React, { Component } from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import styles from './styles.css'

const Controls = {
    "play": "playToggle",
    "volume": "volumePanel",
    "seekbar": "progressControl",
    "timer": "remainingTimeDisplay",
    "playbackrates": "playbackRateMenuButton",
    "fullscreen": "fullscreenToggle"
}

class VideoContent extends Component {
    constructor(props){
      super(props)
      this.player = {};
    }
    componentDidMount() {
        this.initPlayer(this.props);
        this.initEvents(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.setControlVisibility(this.player, nextProps.hideControls);
        if(this.props.src !== nextProps.src){
            this.initPlayer(nextProps);
        }
    }

    componentWillUnmount() {
        if (this.player) this.player.dispose();
    }

    initPlayer(props) {
        const playerOptions = this.generatePlayerOptions(props);
        this.player = videojs(document.querySelector(`[id='${props.playerId}']`), playerOptions);
        this.player.src(props.src)
        this.player.poster(props.poster)
        this.setControlVisibility(this.player, props.hideControls);
    }

    generatePlayerOptions(props){
        const playerOptions = {};
        playerOptions.controls = props.controls;
        playerOptions.autoplay = props.autoplay;
        playerOptions.preload = props.preload;
        playerOptions.width = props.width;
        playerOptions.height = props.height;
        playerOptions.bigPlayButton = props.bigPlayButton;
        const hidePlaybackRates = props.hidePlaybackRates || props.hideControls.includes('playbackrates');
        if (!hidePlaybackRates) playerOptions.playbackRates = props.playbackRates;
        return playerOptions;
    }

    setControlVisibility(player, hiddenControls){
        Object.keys(Controls).map(x => { player.controlBar[Controls[x]].show() })
        hiddenControls.map(x => { player.controlBar[Controls[x]].hide() });
    }

    initEvents(props) {
        let currentTime = 0;
        let previousTime = 0;
        let position = 0;

        this.player.ready(() => {
            props.onReady(this.player);
            window.player = this.player;
        });
        this.player.on('play', () => {
            props.onPlay(this.player.currentTime());
        });
        this.player.on('pause', () => {
            props.onPause(this.player.currentTime());
        });
        this.player.on('timeupdate', (e) => {
            props.onTimeUpdate(this.player.currentTime());
            previousTime = currentTime;
            currentTime = this.player.currentTime();
            if (previousTime < currentTime) {
                position = previousTime;
                previousTime = currentTime;
            }
        });
        this.player.on('seeking', () => {
            this.player.off('timeupdate', () => { });
            this.player.one('seeked', () => { });
            props.onSeeking(this.player.currentTime());
        });

        this.player.on('seeked', () => {
            let completeTime = Math.floor(this.player.currentTime());
            props.onSeeked(position, completeTime);
        });
        this.player.on('ended', () => {
            props.onEnd();
        });
    }

    render() {
        return (
          <video id={this.props.playerId} className={`video-js ${styles.sizeAuto} ${this.props.bigPlayButtonCentered? 'vjs-big-play-centered' : ''} ${this.props.className}`}></video>
        )
    }
}

VideoContent.propTypes = {
    playerId: PropTypes.string,
    src: PropTypes.string,
    poster: PropTypes.string,
    controls: PropTypes.bool,
    responsive: PropTypes.bool,
    fluid: PropTypes.bool,
    fill: PropTypes.bool,
    autoplay: PropTypes.bool,
    preload: PropTypes.oneOf(['auto', 'none', 'metadata']),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hideControls: PropTypes.arrayOf(PropTypes.string),
    bigPlayButton: PropTypes.bool,
    bigPlayButtonCentered: PropTypes.bool,
    onReady: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onTimeUpdate: PropTypes.func,
    onSeeking: PropTypes.func,
    onSeeked: PropTypes.func,
    onEnd: PropTypes.func,
    playbackRates: PropTypes.arrayOf(PropTypes.number),
    hidePlaybackRates: PropTypes.bool,
    className: PropTypes.string,
    show: PropTypes.bool,
    showModal: PropTypes.func,
    handleClose: PropTypes.func
}

VideoContent.defaultProps = {
    src: "",
    poster: "",
    responsive: false,
    fluid: false,
    fill: true,
    controls: true,
    autoplay: true,
    preload: 'auto',
    playbackRates: [0.5, 1, 1.5, 2],
    hidePlaybackRates: false,
    className: "",
    hideControls: [],
    bigPlayButton: false,
    onReady: () => { },
    onPlay: () => { },
    onPause: () => { },
    onTimeUpdate: () => { },
    onSeeking: () => { },
    onSeeked: () => { },
    onEnd: () => { }
}


export default VideoContent;