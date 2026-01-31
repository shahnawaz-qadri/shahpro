import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import styled from 'styled-components'

import HotelCard from './HotelCard'
import { roomsDummyData } from '../assets/assets'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

// Styled components
const SwiperLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
`

const CustomNavButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 2rem;
  user-select: none;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 50%;
  z-index: 10;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }

  &.custom-prev {
    left: -50px;
  }

  &.custom-next {
    right: -50px;
  }
`

const StyledSwiper = styled(Swiper)`
  flex-grow: 1;
  width: auto !important;

`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

const FeaturedDestination = () => {
  const navigate=useNavigate()

  return (
    <div style={{padding:20, paddingTop:100, backgroundColor:'#f8fafc' }}>
   <Title title='Featured Destination' subTitle='hello welcome to my hotel'/>

   <SwiperLayout>
        <CustomNavButton className="custom-prev">‹</CustomNavButton>

        <StyledSwiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          style={{ width: '80%', marginBottom: 50, marginTop: 50 }}
        >

          {roomsDummyData.slice(0, 6).map((room, index) => (
            <SwiperSlide key={room._id}>
              <HotelCard room={room} index={index} />
            </SwiperSlide>
          ))}
        </StyledSwiper>

        <CustomNavButton className="custom-next">›</CustomNavButton>
       
      </SwiperLayout>
      <ButtonWrapper>
       <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer my-16 px-4 py-2'>
View All The Destination
        </button>
        </ButtonWrapper>
    </div>
  )
}

export default FeaturedDestination
