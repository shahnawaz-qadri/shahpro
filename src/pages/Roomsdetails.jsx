import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';

const Roomsdetails = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setmainImage] = useState(null)
  useEffect(() => {
    const room = roomsDummyData.find((r) => r._id === id)
    if (room) {
      setRoom(room)
      setmainImage(room.images[0])
    }


  }, [id])


  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex flex-col md:flex-row gap-2 items-start md:items-center'>
        <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name} <span className='text-sm font-inter'>({room.roomType})</span></h1>
        <p className='bg-orange-500 rounded-full font-inter py-1.5 px-3 text-white'>20% OFF</p>
      </div>
      <div className='flex items-center gap-2 mt-2'>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${i < room.rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
        <p className='ml-2'>200+ reviews</p>
      </div>
      {/* room address */}
      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt="location-icon" />
        <span>{room.hotel.address}</span>
      </div>
      {/* room image */}
      <div className='flex flex-col lg:flex-row mt-4 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img src={mainImage} alt="Room Image" className='w-full rounded-xl shadow-lg object-cover' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images.length > 1 && room.images.map((image, index) => (
            <img onClick={() => setmainImage(image)}
              key={index}
              src={image}
              alt="Room Image"
              className={` max-w-xl w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image ? 'outline outline-3 outline-orange-500' : ''}`} />
          ))}
        </div>
      </div>
      {/* room details  */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
          <h1 className="md:text-4xl text-3xl font-playfair">Experience Luxury Like Never Before</h1>
          <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
            {room.amenities.map((item, index) => (
              <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                <img src={facilityIcons[item]} alt={item} className='w-6 h-6' />
                <p className='text-xs'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      {/* room price  */}
        <p className="mt-4 flex text-2xl font-semibold">${room.pricePerNight} / night</p>
      </div>
{/* Add more room details if needed */}
 <form className="flex flex-col md:flex-row md:items-center justify-between w-full max-w-7xl mx-auto mt-10 px-10 py-10 bg-white shadow-[0_0_20px_rgba(0,0,0,0.25)] rounded-xl">
<div className="flex flex-col lg:flex-row items-center gap-4">
 
    {/* Check-in */}
    <div className="flex flex-col w-full lg:w-auto">
      <label htmlFor="checkin" className="text-sm font-medium text-gray-700 mb-1">Check-in</label>
      <input
        type="date"
        id="checkin"
        name="checkin"
        className="border border-gray-300 rounded px-3 py-2 w-full lg:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
<div  className= "bg-gray-300/70 h-15 w-px max-md:hidden">
  
</div>
    {/* Check-out */}
    <div className="flex flex-col w-full lg:w-auto">
      <label htmlFor="checkout" className="text-sm font-medium text-gray-700 mb-1">Check-out</label>
      <input
        type="date"
        id="checkout"
        name="checkout"
        className="border border-gray-300 rounded px-3 py-2 w-full lg:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div  className= "bg-gray-300/70 h-15 w-px max-md:hidden">
  
</div>

    {/* Guests */}
    <div className="flex flex-col w-full lg:w-auto">
      <label htmlFor="guests" className="text-sm font-medium text-gray-700 mb-1">Guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        defaultValue="1"
        className="border border-gray-300 rounded px-3 py-2 w-full lg:w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    </div>
     {/* Button */}
    <div className="flex flex-col w-full lg:w-auto self-end lg:self-auto">
      <label className="invisible mb-1">Submit</label>
      <button
        type="submit"
        className="bg-blue-600 text-white px-30 py-5 rounded hover:bg-blue-700 transition w-full lg:w-auto"
      >
        Check Availability
      </button>
    </div>
  </form>
  <div className='space-y-4 mt-25'>
    {roomCommonData.map((spec,index)=>(
      <div key={index} className='flex items-start gap-2'>
<img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5'/>
<div>
  <p className='text-base'>{spec.title}</p>
  <p className='text-gray-500'>{spec.description}</p>
</div>
      </div>
    ))}
    </div>
    <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
      <p>Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.</p>
    </div>
    <div className='flex flex-col items-start gap-4'>
      <div>
        <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
         <div className='flex items-center gap-2 mt-2'>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${i < room.rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
        <p className='ml-2'>200+ reviews</p>
      </div>
      
      </div>
      <div>
        
      </div>
      <button className='rounded cursor-pointer text-white px-6 py-2.5 mt-4 bg-blue-600 hover:bg-primary-dull transition-all'>Contact Now</button>

    </div>
    
</div>

  
  );
};

export default Roomsdetails;