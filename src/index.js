import React, { Component } from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import styles from './styles.css'
import VideoContent from './content';
import closeButton from './close-button.png';

const Modal = ({ handleClose, show, children, modalBackdropClass, modalContentClass, modalCloseButtonClass, fade, noOuterClose, fluid }) => {
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  return (
    <div className={`${styles.modal} ${showHideClassName}`}>
      <div onClick={noOuterClose ? (() => { return true }) : handleClose} className={`${styles.backdrop} ${modalBackdropClass ? modalBackdropClass : ''}`}></div>
      <section className={`${styles.modalContent} ${fluid ? styles.contentFluid : ''} ${fade === false ? '' : styles.fade} ${modalContentClass ? modalContentClass : ''}`}>
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
      const { show, showModal, handleClose, noOuterClose, fluid } = this.props
        return (
            <div>
                <a className={styles.fakePreview} onClick={showModal}>
                  <img src={this.props.preview} alt={this.props.alt} />
                  <span className={styles.playButton}></span>
                </a>
                {show &&
                <Modal show={show} handleClose={handleClose} noOuterClose={noOuterClose} fluid={fluid} >
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

ModalVideo.propTypes = {
  noOuterClose: PropTypes.bool,
  fluid: PropTypes.bool
}

ModalVideo.defaultProps = {
  noOuterClose: false,
  fluid: true
}

export default ModalVideo;