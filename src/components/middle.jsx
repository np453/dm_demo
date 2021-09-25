import React, { Component } from 'react';
import arrow from '../assets/arrow_black.svg';
import ListItem from '../common/listitem';
import Graph from './graph';

class Middle extends Component {
    render() {
        return (
            <div className="middle-wrapper">
                <div className="col-md-7 m-outer-1">
                    <div className="m-inner-1">
                        <div className="m-inhert-1">
                            <span className="m-text-1">Recent Projects</span>
                            <span className="m-text-2">Check all the current projects</span>
                        </div>
                        <div className="m-inhert-2">
                            <div className="m-dropdown">
                                <span className="m-text-3">All Projects</span>
                                <img src={arrow} className="m-arrow"></img>
                            </div>
                        </div>
                    </div>
                    <div className="m-inner-2">
                        {/* <TableList /> */}
                        <div className="col-md-3">
                            <span className="m-text-head">Project Name</span>
                        </div>
                        <div className="col-md-2 m-col-1">
                            <span className="m-text-head">Company</span>
                        </div>
                        <div className="col-md-1 m-col-2">
                            <span className="m-text-head">Employees</span>
                        </div>
                        <div className="col-md-1">
                            <span className="m-text-head">Raters</span>
                        </div>
                        <div className="col-md-2 m-col-2">
                            <span className="m-text-head">Participation</span>
                        </div>
                        <div className="col-md-2 m-col-2">
                            <span className="m-text-head">Expiry Date</span>
                        </div>
                        <div className="col-md-1">
                            <span className="m-text-head">Status</span>
                        </div>
                        

                    </div>
                    <div className="list-middle-wrapper">
                        <ListItem project="Naman Patel" company="box8" employee="namanpatel" rater="avi" participation="100" expiry="27-09-2021" status="Active" background=""></ListItem>
                        <ListItem project="Naman Patel" company="box8" employee="namanpatel" rater="avi" participation="100" expiry="27-09-2021" status="Closed" background="white"></ListItem>
                        <ListItem project="Naman Patel" company="box8" employee="namanpatel" rater="avi" participation="100" expiry="27-09-2021" status="Active" background=""></ListItem>
                        <ListItem project="Naman Patel" company="box8" employee="namanpatel" rater="avi" participation="100" expiry="27-09-2021" status="Active" background="white"></ListItem>
                        <ListItem project="Naman Patel" company="box8" employee="namanpatel" rater="avi" participation="100" expiry="27-09-2021" status="Active" background=""></ListItem>
                        <ListItem project="Naman Patel" company="box8" employee="namanpatel" rater="avi" participation="100" expiry="27-09-2021" status="Active" background="white"></ListItem>
                        <ListItem project="Naman Patel" company="box8" employee="namanpatel" rater="avi" participation="100" expiry="27-09-2021" status="Active" background=""></ListItem>
                        <ListItem project="Naman Patel" company="box8" employee="namanpatel" rater="avi" participation="100" expiry="27-09-2021" status="Active" background="white"></ListItem>
                        <ListItem project="Naman Patel" company="box8" employee="namanpatel" rater="avi" participation="100" expiry="27-09-2021" status="Active" background=""></ListItem>
                        <ListItem project="Naman Patel" company="box8" employee="namanpatel" rater="avi" participation="100" expiry="27-09-2021" status="Active" background="white"></ListItem>
                    </div>
                </div>
                <div className="col-md-5 m-outer-2">
                        <Graph />
                </div>
                
            </div>
        );
    }
}

export default Middle;