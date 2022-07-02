import React from 'react';
import Footer from '../Footer/Footer';
import HomeScreen from '../screens/HomeScreen';
import Banner from './banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <HomeScreen></HomeScreen>
            {/* <Footer></Footer> */}
            
        </div>
    );
};

export default Home;