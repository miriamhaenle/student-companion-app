import React from 'react'
import ReactStars from 'react-rating-stars-component'
import styled from 'styled-components'

export default function StarRating({ headline, editable }) {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <StarRatingContainer>
      <h2>{headline}</h2>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={30}
        activeColor="#FFCF00"
        color="#F7EBE8"
        edit={editable}
      />
    </StarRatingContainer>
  )
}

const StarRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
