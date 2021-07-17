import React from 'react'

import ReactDOM from 'react-dom'
import { FaRegTimesCircle } from 'react-icons/fa'
import styled from 'styled-components'

import { ButtonIcon } from '../ButtonIcon'

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
`
const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
`
const StyledModal = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`
const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 8px;

    & > p {
        margin: 0;
    }
`
const ModalMain = styled.div`
    position: relative;
    z-index: 3;

    background: white;
    border-radius: 3px;
    min-width: 350px;
`
const Title = styled.p``
const Dialog = ({ isShowing, hide, children, title, ...others }) =>
    isShowing
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
                      <ModalOverlay onClick={() => hide()} />
                      <StyledModal {...others}>
                          <ModalMain>
                              <ModalHeader>
                                  <Title>
                                      <b>{title}</b>
                                  </Title>
                                  <ButtonIcon
                                      icon={
                                          <FaRegTimesCircle
                                              style={{ width: '20px', height: '20px' }}
                                          />
                                      }
                                      onClick={() => hide()}
                                  />
                              </ModalHeader>
                              {children}
                          </ModalMain>
                      </StyledModal>
                  </ModalWrapper>
              </React.Fragment>,
              document.body
          )
        : null

export default Dialog
