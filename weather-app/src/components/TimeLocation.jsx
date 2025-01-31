import React from 'react'

const TimeLocation = ({
  weather: {formattedLocalTime, name , country },
}) => {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
<p className='text-white text-xl font-extralight '>
    
    {formattedLocalTime}
    </p>

      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>{`${name},${country}`}
        </p>
         </div>
    
    </div>
  )
}

export default TimeLocation

