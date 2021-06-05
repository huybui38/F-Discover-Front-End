/* eslint-disable unused-imports/no-unused-imports */
import React, { useState, useEffect, useRef } from 'react'

import ReCAPTCHA from 'react-google-recaptcha'

import { CenterFlexContainer } from '../../../components/Container/FlexContainer'
import FacebookIcon from '../../../components/Icons/Facebook'
import GoogleIcon from '../../../components/Icons/Google'
import PhoneIcon from '../../../components/Icons/Phone'
import ZaloIcon from '../../../components/Icons/Zalo'
import { Label } from '../../../components/Label/index'
import { Link } from '../../../components/Link'
import Modal from '../../../components/Modal/Modal'
import { LoginContainer, PageContainer } from '../components/Container'
import { Description } from '../components/Description'
import FaddedLayer from '../components/FaddedLayer'
import { LeftForm } from '../components/LeftForm'
import { Logo } from '../components/Logo'
import PhoneModal from '../components/PhoneModal'
import { RightForm } from '../components/RightForm'
import { SocialButton } from '../components/SocialButton'

import logo from '../../../assets/logo.png'
import { Error, Success } from '../../../helpers/notify'
import useModal from '../../../hooks/useModal'
import firebase from '../../../services/authentication/'
import { PopupFacebookLogin } from '../../../services/authentication/FacebookAuthentication'
import { PopupGoogleLogin } from '../../../services/authentication/GoogleAuthentication'

export const LoginPage = () => {
    // useEffect(() => {
    //     if (!refCaptcha.current) {
    //         refCaptcha.current = new firebase.auth.RecaptchaVerifier('captcha-container')
    //     }
    // })
    // const setUpCaptcha = () => {
    //     if (window.recaptchaVerifier) {
    //         return
    //     }
    //     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('captcha-container')
    // }
    const { isShowing, toggle } = useModal()
    const [msg, setMsg] = useState('')
    const handleLogin = (type) => {
        return (event) => {
            switch (type) {
                case 'google':
                    PopupGoogleLogin()
                        .then((result) => {
                            console.log(result)
                        })
                        .catch((ex) => {
                            Error('Đăng nhập thất bại!!')
                        })
                    break
                case 'facebook':
                    PopupFacebookLogin()
                        .then((result) => {
                            console.log(result)
                        })
                        .catch((ex) => {
                            Error('Đăng nhập thất bại!!')
                        })
                    break
                case 'zalo':
                    break
                case 'phone':
                    toggle()
                    break
                default:
                    alert('Not found')
                    break
            }
        }
    }
    useEffect(() => {
        if (window.recaptchaVerifier) return
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            size: 'invisible',
        })
    })
    return (
        <div>
            <div id="recaptcha-container"></div>
            <PhoneModal
                isShowing={isShowing}
                toggle={toggle}
                appVerify={window.recaptchaVerifier}
            />
            <PageContainer>
                <FaddedLayer />
            </PageContainer>
            <CenterFlexContainer style={{ height: '100vh' }}>
                <LoginContainer>
                    <LeftForm />
                    <RightForm>
                        {msg}
                        <Logo src={logo} />
                        <Description>
                            By typing log in, you will agree with our terms of <Link>service</Link>{' '}
                            and <Link>privacy</Link>
                        </Description>
                        <SocialButton
                            fullWidth
                            padding="10px"
                            center
                            onClick={handleLogin('phone')}
                        >
                            <PhoneIcon />
                            Phone number
                        </SocialButton>
                        <SocialButton
                            fullWidth
                            padding="10px"
                            center
                            onClick={handleLogin('google')}
                        >
                            <GoogleIcon />
                            Google
                        </SocialButton>
                        <SocialButton
                            fullWidth
                            padding="10px"
                            center
                            onClick={handleLogin('facebook')}
                        >
                            <FacebookIcon />
                            <Label>Facebook</Label>
                        </SocialButton>
                        <SocialButton fullWidth padding="10px" center onClick={handleLogin('zalo')}>
                            <ZaloIcon />
                            <Label>Zalo</Label>
                        </SocialButton>
                    </RightForm>
                </LoginContainer>
            </CenterFlexContainer>
        </div>
    )
}

export default LoginPage
