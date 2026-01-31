import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import CustumerRating from "../components/custumerRating";
import JoinHotel from "../components/JoinHotel";
import Overview from "../components/Overview";

const Homepage = () => {
    return (
        <>
            <Hero />
            <FeaturedDestination />
            <ExclusiveOffers/>
            <CustumerRating/>
            <JoinHotel/>
           
        </>
    )
}
export default Homepage;