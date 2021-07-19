import React, { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";

class Player extends Component {
  render() {
    const { open, toggleModal } = this.props;

    return (

      <Modal
        open={open}
        onClose={toggleModal}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "50%",
           // padding: "unset",
            backgroundColor: "red",
           
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)"
          },
          closeButton: {
            background: "yellow"
          }
        }}
        center
      >
        <ReactPlayer
          url="https://vimeo.com/29171553"
          width="100%"
          height="calc(100vh - 100px)"

        />
      </Modal>
    );
  }
}

export default Player;
