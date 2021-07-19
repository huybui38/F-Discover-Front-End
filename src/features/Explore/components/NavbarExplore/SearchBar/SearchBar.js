import react, { useCallback, useRef, useState } from 'react'

import { debounce } from 'lodash'
import { FaSearch } from 'react-icons/fa'

import { ButtonIcon } from '../../../../../components/ButtonIcon'

import useDetectClickOutside from '../../../../../hooks/useDetectionClickOut'
import { search } from '../../../../../services/api/searchApi'
import LocationItem from '../LocationItem'
import UserItem from '../UserItem'
import * as Styled from './styled.elements'

function SearchBar() {
    const wrapperRef = useRef(null)
    const [isDisable, setIsDisable] = useState(true)
    const [userList, setUserList] = useState([])
    const [locationList, setLocationList] = useState([])
    const [keyWord, setKeyword] = useState('')

    const fetchResultDropdown = (key) => {
        search(key)
            .then((res) => {
                setUserList(res.data.filter((data) => data.type === 'user'))
                setLocationList(res.data.filter((data) => data.type === 'location'))
            })
            .catch((e) => {
                console.log(e)
                Error('Server error.')
            })
    }
    const debounceDropDown = useCallback(
        debounce((nextValue) => fetchResultDropdown(nextValue), 1000),
        []
    )
    console.log(userList, locationList)
    function handleInputOnchange(e) {
        const value = e.target.value
        setKeyword(value)
        console.log('value: ', value)
        if (value) {
            debounceDropDown(value)
        }
    }

    const handleCloseResultSearch = () => {
        setIsDisable(true)
    }
    useDetectClickOutside(wrapperRef, () => handleCloseResultSearch())
    return (
        <Styled.SearchBarContainer ref={wrapperRef}>
            <Styled.Search
                type="text"
                placeholder="Search..."
                value={keyWord}
                onChange={handleInputOnchange}
                onClick={() => setIsDisable(false)}
                onFocus={() => setIsDisable(false)}
            />
            <Styled.BtnSearch>
                <ButtonIcon icon={<FaSearch style={{ width: '16px', height: '16px' }} />} />
            </Styled.BtnSearch>
            <Styled.Results isDisable={isDisable}>
                <Styled.ResultList numberItems={userList.length + locationList.length}>
                    {userList &&
                        userList.map((user) => (
                            <UserItem
                                key={user.result.id}
                                user={user.result}
                                setIsDisable={setIsDisable}
                            />
                        ))}
                    {locationList &&
                        locationList.map((location) => (
                            <LocationItem
                                key={location.result.id}
                                location={location.result}
                                setIsDisable={setIsDisable}
                            />
                        ))}
                    {/* <Styled.ViewControl>
                        <ButtonIcon
                            // disabled={pageNumber === 1 ? true : false}
                            onClick={handleBack}
                            size="small"
                            icon={<FaLongArrowAltLeft />}
                        />
                        <ButtonIcon
                            // disabled={awardResults.length ? false : true}
                            onClick={handleNext}
                            size="small"
                            icon={<FaLongArrowAltRight />}
                        />
                    </Styled.ViewControl> */}
                </Styled.ResultList>
            </Styled.Results>
        </Styled.SearchBarContainer>
    )
}

export default SearchBar
