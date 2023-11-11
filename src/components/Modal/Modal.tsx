import ReactModal from 'react-modal';
import ModalCloseButton from './ModalCloseButton';
import ModalTitle from './ModalTitle';

ReactModal.setAppElement('#root');

/** Modal 컴포넌트 */
function Modal(props) {
  
  /** Modal 닫기 */
  const closeModal = (): void => props.onRequestClose();

  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={closeModal}
      contentLabel={props.title}
    >
      <ModalCloseButton
        onClick={closeModal}
      />

      <ModalTitle
        title={props.title}
      />

      <div>
        {props.children}
      </div>
    </ReactModal>
  );
}

export default Modal;