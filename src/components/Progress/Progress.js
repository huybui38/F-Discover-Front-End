import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProgressContainer = styled.div`
    background-color: #d8d8d8;
    border-radius: 20px;
    position: relative;
    margin: 15px 0;
    height: 30px;
    width: 300px;
`
const ProgressStatus = styled.div`
    background: linear-gradient(to left, #f2709c, #ff9472);
    box-shadow: 0 3px 3px -5px #f2709c, 0 2px 5px #f2709c;
    border-radius: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: ${(props) => props.number + '%'};
    opacity: 1;
    transition: 1s ease 0.3s;
`
export const ProgressBar = ({ number }) => {
    return (
        <ProgressContainer>
            <ProgressStatus number={number}>{number}%</ProgressStatus>
        </ProgressContainer>
    )
}
ProgressBar.propTypes = {
    number: PropTypes.number,
}
