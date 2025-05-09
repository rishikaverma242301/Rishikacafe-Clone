import React from 'react';

const Forth = () => {
  return (
    <div data-aos="fade-up" className='mt-24'>
      <div className="h-[150vh] bg-[url('https://demo2.pavothemes.com/arucafe/wp-content/uploads/2024/05/banner-home1.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-[90%] sm:w-[80%] h-[70%] gap-10 p-6 sm:p-3">
          
          <div className="bg-white p-6 sm:p-8 flex flex-col justify-center text-center">
            <h5 className="text-orange-500 mb-2 text-sm sm:text-base">FIND THE WAY</h5>
            <h1 className="text-amber-950 text-3xl sm:text-4xl mb-4">Contact Us</h1>
            <p className="text-sm sm:text-base mb-4">
              Northern End Of The Oversea Passenger<br />
              329 Queensberry Street,<br />
              North Melbourne VIC 3051
            </p>
            <h4 className="text-amber-950 text-sm sm:text-base">OPENING HOURS</h4>
            <button className='bg-orange-500 text-white mt-6 sm:mt-8 py-2 px-6 sm:px-8'>Get Direction</button>
          </div>
          
          <div className="bg-white p-6 sm:p-8 flex flex-col justify-center text-center">
            <h5 className="text-orange-500 mb-2 text-sm sm:text-base">BOOK A TABLE</h5>
            <h1 className="text-amber-950 text-3xl sm:text-4xl mb-4">Online Reservation</h1>
            <p className="text-sm sm:text-base mb-4">
              Northern End Of The Oversea Passenger<br />
              329 Queensberry Street,<br />
              North Melbourne VIC 3051
            </p>
            <h4 className="text-amber-950 text-sm sm:text-base">BOOKING</h4>
            <button className='bg-orange-500 text-white mt-6 sm:mt-8 py-2 px-6 sm:px-8'>Book A table</button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Forth;
