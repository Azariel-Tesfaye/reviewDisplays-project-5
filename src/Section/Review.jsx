
import ReviewCard from '../Components/ReviewCard'
import { reviewData } from '../Constants'

const Review = () => {
  return (
    <div>
        <div className='w-[33rem] h-80'>
            {reviewData.map((review) =>
            <ReviewCard
                imgURL={review.imgURL}
                name = {review.name}
                job = {review.job}
                reviewSentence = {review.reviewSentence}
            />
            )}
        </div>
    </div>
  )
}

export default Review