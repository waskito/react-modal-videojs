import React, { Component } from 'react';
import videojs from 'video.js';
import styles from './styles.css'
import VideoContent from './content';
import closeButton from './close-button.png';

const Modal = ({ handleClose, show, children, modalBackdropClass, modalContentClass, modalCloseButtonClass, fade }) => {
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  return (
    <div className={`${styles.modal} ${showHideClassName} ${modalBackdropClass ? modalBackdropClass : ''}`} onClick={handleClose}>
      <section className={`${styles.modalContent} ${fade === false ? '' : styles.fade} ${modalContentClass ? modalContentClass : ''}`}>
        <div className={styles.relativeWrapper}>
        {children}
        </div>
        <span
          className={`${styles.closeButton} ${modalCloseButtonClass ? modalCloseButtonClass : ''}`}
          onClick={handleClose}
        >
          <img src={closeButton} />
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
                  <img src={this.props.preview} alt={this.props.alt} />
                  <span className={styles.playButton}></span>
                </a>
                {show &&
                <Modal show={show} handleClose={handleClose} >
                  <VideoContent {...this.props} />
                </Modal>
                }

                <style>{`
                .video-js .vjs-tech{
                    position: relative;
                }
                `}</style>
            </div>
        )
    }
}

export default ModalVideo;