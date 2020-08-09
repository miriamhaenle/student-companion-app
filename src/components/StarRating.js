import React from 'react'
import ReactStars from 'react-rating-stars-component'

export default function StarRating() {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <section>
      <h2>Rate your day</h2>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={30}
        activeColor="#FFCF00"
        color="#F7EBE8"
      />
    </section>
  )
}
