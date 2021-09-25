import React, { Component } from 'react';

class Analytics extends Component {
    render() {
        return (
            <div className="analytics-wrapper">
                <div className="col-md-3 outer1">
                    <div className="col-md-7 inner1">
                        <span className="text1">TOTAL COMPANY</span>
                        <div className="in1">
                            <span className="text2">+1</span> 
                            <span className="text3">(09-08-2021)</span>
                        </div>  
                    </div>
                    <div className="col-md-5 inner2">
                        <span className="text4">100</span>
                    </div>
                </div>
                <div className="col-md-6 outer2">
                    <div className="col-md-3 inner3">
                            <span className="text5">250</span>
                            <span className="text6">TOTAL PROJECTS</span>
                            <div className="in2">
                                <span className="text7">+1</span> 
                                <span className="text8">(09-08-2021)</span>
                            </div>
                    </div>
                    <div className="col-md-2 in3 mfo bso">
                        <span className="text9">200</span>
                        <span className="text10">Active Projects</span>
                    </div>
                    <div className="col-md-2 in4 ufo bso">
                        <span className="text11">50</span>
                        <span className="text12">Closed Projects</span>
                    </div>
                    <div className="col-md-2 in4 ufo bso">
                        <span className="text11">400</span>
                        <span className="text12">Total Employees</span>
                    </div>
                    <div className="col-md-2 in4 ufo">
                        <span className="text11">500</span>
                        <span className="text12">Total Raters</span>
                    </div>

                </div>
                <div className="col-md-3 outer3">
                    <div className="col-md-6 inner3">
                        <span className="text5">02</span>
                        <span className="text6">TOTAL TICKETS</span>
                        <div className="in2">
                            <span className="text7">+1</span> 
                            <span className="text8">(09-08-2021)</span>
                        </div>
                    </div>
                    <div className="col-md-6 inner4">
                        <div className="in3">
                            <span className="text9">01</span>
                            <span className="text10">New Tickets</span>
                        </div>
                        <div className="in4">
                            <span className="text11">01</span>
                            <span className="text12">in Review</span>
                        </div>

                    </div>
                </div>
                
            </div>
        );
    }
}

export default Analytics;