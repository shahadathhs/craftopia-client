import Lottie from "lottie-react";
import testimonial from "../assets/lottiesfile/testimonilas.json";
import PropTypes from 'prop-types';
import reviewImg from "../assets/review.jpg"

const Testimonial = ({reviews}) => {
  return (
    <div className="my-1 md:my-8">
      <div className="hero">
        <Lottie className="h-[300px] md:h-screen object-fill" animationData={testimonial} loop={true} />
        <div className="hero-content">
        <img className="mx-auto rounded-xl" src={reviewImg} alt="" />
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        {
          reviews.map(review => 
          <div key={review.id} className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-blue-600">
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                {/* Review */}
                {review.review}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-blue-600">
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-blue-600 text-gray-50">
              {/* Image */}
              <img src={review.image} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500" />
              {/* name */}
              <p className="text-xl font-semibold leading-tight">{review.name}</p>
            </div>
          </div>
          )
        }
      </div>
    </div>
  );
};

export default Testimonial;

Testimonial.propTypes = {
  reviews: PropTypes.array,
}