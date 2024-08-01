import React from 'react'

const ReviewCard = ({imgURL,name, job, reviewSentence}) => {
  return (
    <div>
        <div>
            <img src={imgURL} alt={name} />
        </div>
        
    </div>
  )
}

export default ReviewCard