import React from 'react'

import { CenterFlexContainer } from '../../../components/Container/FlexContainer'
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
                            By typing log in, you will agree with our terms of service and privacy
                        </Description>
                        <SocialButton fullWidth padding="10px" center>
                            Hello
                        </SocialButton>
                        <SocialButton fullWidth padding="10px" center>
                            Hello
                        </SocialButton>
                        <SocialButton fullWidth padding="10px" center>
                            Hello
                        </SocialButton>
                        <SocialButton fullWidth padding="10px" center>
                            Hello
                        </SocialButton>
                    </RightForm>
                </LoginContainer>
            </CenterFlexContainer>
        </div>
    )
}

export default LoginPage
