import { useEffect } from 'react'

import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { updatePost } from '../../../features/Profile/profileSlice'
import { Error, Success } from '../../../helpers/notify'
import useInput from '../../../hooks/useInput'
import { fetchLocationAsync } from '../../../services/app/appSlice'
import { Button } from '../../Button'
import { Dropdown } from '../../Input/Dropdown'
import TextFieldInput from '../../Input/TextField'
import { SimpleCircleLoader } from '../../Loading/Loader'

const StyledDropdown = styled(Dropdown)`
    width: 100px;
    display: none;
`
const StyledVideoInput = styled(TextFieldInput)`
    font-size: 30px;
`
export const StepTwo = ({ videoID }) => {
    const [location, locationHandler] = useInput('')
    const [content, contentHandler] = useInput('')
    const locationsState = useSelector((state) => state.app.locations)
    const fetchStatus = useSelector((state) => state.profile.status)
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
    // const locations = [
    //     {
    //         value: 'Hello',
    //         text: 'Hello Text',
    //     },
    //     {
    //         value: 'Hello2',
    //         text: 'Hello Text2',
    //     },
    // ]
    useEffect(() => {
        if (fetchStatus == 'succeeded') {
            Success('Cập nhật thành công')
        }
    }, [fetchStatus])
    const saveHandler = () => {
        if (!content) Error('Chọn địa điểm!')
        const data = { videoID, content, location }
        // console.log(videoID)
        dispatch(updatePost(data))
    }
    return (
        <>
            <h1>Step two</h1>
            <StyledVideoInput
                label="Tên videos"
                handleChange={contentHandler}
                value={content}
            ></StyledVideoInput>
            <StyledDropdown options={locations} handlerChange={locationHandler} />
            <Button onClick={saveHandler}>Save</Button>
            {fetchStatus == 'loading' ? <SimpleCircleLoader /> : null}
        </>
    )
}
StepTwo.propTypes = {
    videoID: PropTypes.string,
}
