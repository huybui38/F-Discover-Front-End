import React from 'react'

import ReactDOM from 'react-dom'
import { AiFillCloseCircle } from 'react-icons/ai'
import styled from 'styled-components'

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
`
const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
`
const StyledModal = styled.div`
    z-index: 100;
    background: white;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 3px;
    max-width: 500px;
    padding: 2rem;
`
const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
// const ModalCloseButton = styled.button`
//     font-size: 1.4rem;
//     font-weight: 700;
//     line-height: 1;
//     color: #000;
//     opacity: 0.3;
//     cursor: pointer;
//     border: none;
// `
const ModalTitle = styled.span`
    font-size: 1.7rem;
`
const Modal = ({ isShowing, hide, children, title = '' }) =>
    isShowing
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <ModalOverlay />
                  <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
                      <StyledModal>
                          <ModalHeader>
                              <ModalTitle>{title}</ModalTitle>
                              {/* <button
                                  type="button"
                                  className="modal-close-button"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                  onClick={hide}
                              ></button> */}
                              <AiFillCloseCircle onClick={hide} style={{ cursor: 'pointer' }} />
                          </ModalHeader>
                          {children}
                      </StyledModal>
                  </ModalWrapper>
              </React.Fragment>,
              document.body
          )
        : null

export default Modal
