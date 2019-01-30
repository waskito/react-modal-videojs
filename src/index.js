import React, { Component } from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import styles from './styles.css'
import VideoContent from './content';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  return (
    <div className={`${styles.modal} ${showHideClassName}`}>
      <section className={styles.modalContent}>
        {children}
        <span
          className={styles.closeButton}
          onClick={handleClose}
        >
          ×
        </span>
      </section>
    </div>
  );
};

const Controls = {
    "play": "playToggle",
    "volume": "volumePanel",
    "seekbar": "progressControl",
    "timer": "remainingTimeDisplay",
    "playbackrates": "playbackRateMenuButton",
    "fullscreen": "fullscreenToggle"
}

class ModalVideo extends Component {
    render() {
      const { show, showModal, handleClose } = this.props
        return (
            <div>
                <a className={styles.fakePreview} onClick={showModal}>
                  <img src={this.props.preview} alt={this.props.caption} />
                  <span className={styles.playButton}></span>
                </a>
                {show &&
                <Modal show={show} handleClose={handleClose} >
                  <VideoContent {...this.props} />
                </Modal>
                }
            </div>
        )
    }
}

export default ModalVideo;