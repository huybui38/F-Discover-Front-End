/* eslint-disable unused-imports/no-unused-imports */
import React from 'react'

import { CenterFlexContainer } from '../../../components/Container/FlexContainer'
import FacebookIcon from '../../../components/Icons/Facebook'
import GoogleIcon from '../../../components/Icons/Google'
import PhoneIcon from '../../../components/Icons/Phone'
import ZaloIcon from '../../../components/Icons/Zalo'
import { Label } from '../../../components/Label/index'
import { Link } from '../../../components/Link'
import { LoginContainer, PageContainer } from '../components/Container'
import { Description } from '../components/Description'
import FaddedLayer from '../components/FaddedLayer'
import { LeftForm } from '../components/LeftForm'
import { Logo } from '../components/Logo'
import { RightForm } from '../components/RightForm'
import { SocialButton } from '../components/SocialButton'

import logo from '../../../assets/logo.png'

export const LoginPage = () => {
    return (
        <div>
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
                        <SocialButton fullWidth padding="10px" center>
                            <PhoneIcon />
                            Phone number
                        </SocialButton>
                        <SocialButton fullWidth padding="10px" center>
                            <GoogleIcon />
                            Google
                        </SocialButton>
                        <SocialButton fullWidth padding="10px" center>
                            <FacebookIcon />
                            <Label>Facebook</Label>
                        </SocialButton>
                        <SocialButton fullWidth padding="10px" center>
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
