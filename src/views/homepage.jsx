import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import DashHeader from '../components/dashHeader';
import Analytics from '../components/analytics';
import Middle from '../components/middle';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <DashHeader />
                <Analytics />
                <Middle />
                <Footer />
            </div>
        );
    }
}

export default Homepage;