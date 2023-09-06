import { StyledModal, StyledOverlay } from './Modal.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  handleKeyDown = event => {
    if (event.code === `Escape`) {
      this.props.onClose();
    }
  };

  handlerOnClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <StyledOverlay onClick={this.handlerOnClick}>
        <StyledModal>
          <img
            src={this.props.modalData.modalUrl}
            alt={this.props.modalData.alt}
          />
        </StyledModal>
      </StyledOverlay>
    );
  }
}
Modal.propTypes = {
  modalData: PropTypes.shape({
    modalUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
