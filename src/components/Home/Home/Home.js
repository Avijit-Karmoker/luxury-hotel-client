import React from 'react';
import Amenities from '../Amenities/Amenities/Amenities';
import FeaturedRoom from '../FeaturedRoom/FeatureRoom/FeaturedRoom';
import Footer from '../../Shared/Footer/MainFooter/Footer';
import Headers from '../Headers/Headers';
import Navbar from '../../Shared/Navbar/Navbar';
import Reviews from '../Review/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Headers></Headers>
            <FeaturedRoom></FeaturedRoom>
            <Amenities></Amenities>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;