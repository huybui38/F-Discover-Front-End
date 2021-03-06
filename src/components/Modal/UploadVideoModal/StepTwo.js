import { useEffect } from 'react'

import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { setUpdatePostStatus, updatePost } from '../../../features/Profile/profileSlice'
import { Error, Success } from '../../../helpers/notify'
import useInput from '../../../hooks/useInput'
import { fetchLocationAsync } from '../../../services/app/appSlice'
import { Button, PrimaryButton } from '../../Button'
import { Dropdown } from '../../Input/Dropdown'
import TextFieldInput from '../../Input/TextField'
import { SimpleCircleLoader } from '../../Loading/Loader'

const StyledDropdown = styled(Dropdown)`
    width: 200px;
`
const InputForm = styled.div`
    padding: 5px;
    width: 200px;
`
const StyledVideoInput = styled(TextFieldInput)`
    font-size: 30px;
    input {
        padding: 7px;
    }
`

export const StepTwo = ({ videoID, onSuccess }) => {
    const [location, locationHandler, setLocation] = useInput('')
    const [content, contentHandler, setContent] = useInput('')
    const locationsState = useSelector((state) => state.app.locations)
    const fetchStatus = useSelector((state) => state.profile.status.updatePost)
    const dispatch = useDispatch()
    useEffect(() => {
        if (locationsState.status === 'idle') {
            dispatch(fetchLocationAsync())
        }
    }, [locationsState.status, dispatch])
    const locations = locationsState.data?.map((element) => {
        return {
            value: element.id,
            text: element.name,
        }
    })
    useEffect(() => {
        if (fetchStatus == 'succeeded') {
            Success('Update successfully')
            setContent('')
            setLocation('')
            dispatch(setUpdatePostStatus('idle'))
            onSuccess(true)
        }
    }, [fetchStatus, setContent, setLocation, dispatch, onSuccess])
    const saveHandler = () => {
        if (!content) return Error('Please type your content')
        if (!location) return Error('Please choose location!')
        const data = { videoID, content, location }
        dispatch(updatePost(data))
    }
    return (
        <>
            <h3>Only one step left! To share your F-Post to our community!</h3>
            <InputForm>
                <StyledVideoInput
                    label="Title for your video"
                    handleChange={contentHandler}
                    value={content}
                ></StyledVideoInput>
            </InputForm>
            <InputForm>
                <StyledDropdown
                    options={locations}
                    handlerChange={locationHandler}
                    label="Where is a place in your video"
                />
            </InputForm>
            <PrimaryButton onClick={saveHandler}>Publish</PrimaryButton>
            {fetchStatus == 'loading' ? <SimpleCircleLoader /> : null}
        </>
    )
}
StepTwo.propTypes = {
    videoID: PropTypes.string,
    onSuccess: PropTypes.func,
}
