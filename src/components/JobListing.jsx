import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }
 
  return (
    <div className='bg-white rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-gray-600 my-2'>PHP MySQL HTML CSS</div>
          <h3 className='text-xl font-bold'>Find-A-Doc</h3>
        </div>

        <div className='mb-5'>Find-A-Doc is a PHP-based website designed to schedule patient appointments with doctors, eliminating the need for patients to call doctors' offices for appointment scheduling.</div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className='text-indigo-500 mb-5 hover:text-indigo-600'
        >
          {showFullDescription ? 'Less' : 'More'}
        </button>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <Link
            to={`https://github.com/turna62?tab=repositories`}
            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Source
          </Link>
        </div>
      </div>
    </div>
  );
};
export default JobListing;
