/* eslint-disable unused-imports/no-unused-imports */
import React, { useState, useEffect, useRef } from 'react'

import ReCAPTCHA from 'react-google-recaptcha'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { CenterFlexContainer } from '../../../components/Container/FlexContainer'
import FacebookIcon from '../../../components/Icons/Facebook'
import GoogleIcon from '../../../components/Icons/Google'
import PhoneIcon from '../../../components/Icons/Phone'
import ZaloIcon from '../../../components/Icons/Zalo'
import { Label } from '../../../components/Label/index'
import { Link } from '../../../components/Link'
import { Loading } from '../../../components/Loading'
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
import authApi from '../../../services/api/authApi'
import firebase, {
    PopupFacebookLogin,
    PopupGoogleLogin,
    zaloLogin,
} from '../../../services/authentication/'
import { updateIns } from '../../../utils/apiCaller'
import { login } from '../loginSlice'

export const LoginPage = () => {
    const [isShowing, toggle] = useModal()
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const onZaloLoginSuccess = (result) => {
        onOAuthSuccess(result.code, 'zalo')
    }
    let dispatch = useDispatch()
    const onFirebaseLoginSuccess = async (result) => {
        onOAuthSuccess(await result.user.getIdToken(true))
    }
    const onOAuthSuccess = async (OAuthToken, type = 'firebase') => {
        setIsLoading(true)
        try {
            let result = await authApi.getToken(OAuthToken, type)
            localStorage.setItem('token', result.data.token)
            updateIns()
            dispatch(login(result.data.token))
            history.push('/explore')
        } catch (error) {
            console.log(error)
            Error('Something wrongs')
        } finally {
            setIsLoading(false)
        }
    }
    const handleBtnLogin = (type) => {
        return (event) => {
            switch (type) {
                case 'google':
                    PopupGoogleLogin()
                        .then(onFirebaseLoginSuccess)
                        .catch((ex) => {
                            Error('Login failed, please try again!')
                        })
                    break
                case 'facebook':
                    PopupFacebookLogin()
                        .then(onFirebaseLoginSuccess)
                        .catch((ex) => {
                            Error('Login failed, please try again!')
                        })
                    break
                case 'zalo':
                    zaloLogin(onZaloLoginSuccess)
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
            <Loading isLoading={isLoading} />
            <div id="recaptcha-container"></div>
            <PhoneModal
                isShowing={isShowing}
                toggle={toggle}
                appVerify={window.recaptchaVerifier}
                onSuccess={onFirebaseLoginSuccess}
            />
            <PageContainer>
                <FaddedLayer />
            </PageContainer>
            <CenterFlexContainer style={{ height: '100vh' }}>
                <LoginContainer>
                    <LeftForm />
                    <RightForm>
                        <Logo src={logo} />
                        <Description>
                            By typing log in, you will agree with our terms of <Link>service</Link>{' '}
                            and <Link>privacy</Link>
                        </Description>
                        <SocialButton
                            fullWidth
                            padding="10px"
                            center
                            onClick={handleBtnLogin('phone')}
                        >
                            <PhoneIcon />
                            Phone number
                        </SocialButton>
                        <SocialButton
                            fullWidth
                            padding="10px"
                            center
                            onClick={handleBtnLogin('google')}
                        >
                            <GoogleIcon />
                            Google
                        </SocialButton>
                        <SocialButton
                            fullWidth
                            padding="10px"
                            center
                            onClick={handleBtnLogin('facebook')}
                        >
                            <FacebookIcon />
                            <Label>Facebook</Label>
                        </SocialButton>
                        <SocialButton
                            fullWidth
                            padding="10px"
                            center
                            onClick={handleBtnLogin('zalo')}
                        >
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
