import React, { Component } from 'react';
import arrow from '../assets/arrow.svg'
import arrow_black from '../assets/arrow_black.svg';

class DashHeader extends Component {
    render() {
        return (
            <div className="dash_wrapper">
                <div className="dash1">
                    <span className="dashtext-head">DASHBOARD</span>
                    <span className="dashtext-description">Check your overall statistics</span>
                </div>
                
                <div className="dash2">
                    <div className="dash2-date">
                        <div className="col-md-2 date-1">
                            <img src={arrow_black} className="dash-arrow-left"></img>
                        </div>
                        <div className="col-md-8 date-2">
                            <span>27/09/2021-31/09/2021</span>
                            <img src={arrow_black} className="dash-arrow-down"></img>
                        </div>                       
                        <div className="col-md-2 date-3">
                            <img src={arrow_black} className="dash-arrow-right"></img>
                        </div>
                        
                    </div>
                    <div className="all_work">
                        <span>All Day</span>
                        <img src={arrow_black} className="dash-arrow-down"></img>
                    </div>
                    <div className="create">
                        <span style={{"color":"white"}}>Create New</span>
                        <img src={arrow} className="dash-arrow-down"></img>   
                    </div>
                </div>
            </div>  
        );
    }
}

export default DashHeader;