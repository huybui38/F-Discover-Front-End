import React from 'react'

import PropTypes from 'prop-types'
import { FaBookmark, FaStar } from 'react-icons/fa'

import { CardWrapper, Card, Image, IconBookmark, Title, GroupStar } from './CardImage.elements'

const propType = {
    infoPlace: PropTypes.shape({
        id: PropTypes.number,
        srcBackground: PropTypes.type,
        srcImageCard: PropTypes.type,
        titleImageCard: PropTypes.string,
        titleDescription: PropTypes.string,
        description: PropTypes.string,
    }),
}

export const CardImage = ({ infoPlace }) => {
    return (
        <CardWrapper className="card-image__wrapper">
            <Card className="card-image">
                <Title>
                    <span>{infoPlace.titleImageCard}</span>
                    <GroupStar>
                        <FaStar className="star star__checked" />
                        <FaStar className="star star__checked" />
                        <FaStar className="star star__checked" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                    </GroupStar>
                </Title>
                <Image src={infoPlace.srcImageCard.type}></Image>
                <IconBookmark>
                    <FaBookmark />
                </IconBookmark>
            </Card>
        </CardWrapper>
    )
}

CardImage.propTypes = propType

export default CardImage
