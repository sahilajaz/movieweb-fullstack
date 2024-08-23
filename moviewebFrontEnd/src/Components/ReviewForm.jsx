import { useRef } from 'react';

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {

 

  return (
    <div className='mt-5 px-7'>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <label htmlFor="review" className='text-white mb-2'>{labelText}</label>
        <textarea 
          id="review" 
          ref={revText}
          rows="7"
          cols="40"
          defaultValue={defaultValue}
          className='px-2 rounded-lg '
        />
        <div className='self-start'>
          <button type='submit' className='text-blue-400 border border-blue-400 px-4 py-1 rounded-lg font-bold mt-10 mb-3 ms-4 hover:text-white hover:bg-blue-500'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
