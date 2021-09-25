import React, { Component } from 'react';
import Chart from '../common/chart';
import Info from '../assets/info.svg';
import share from '../assets/share.svg';

class Graph extends Component {
    render() {
        return (
            <div>
                <div className="graph-wrapper">
                    <div className="col-md-4 head1">
                        <span className="text1">Employees</span>
                        <span className="text2">Check emp participation</span>
                    </div>
                    <div className="col-md-4 head1">
                        <span className="text1">Raters</span>
                        <span className="text2">Check raters participation</span>
                    </div>
                    <div className="col-md-4 head1">
                        <span className="text1">Project management</span>
                        <span className="text2">Check stats on projects’ management</span>
                    </div>
                </div>
                <div className="middle-graph-wrapper">
                    <Chart />
                </div>
                <div className="lower">
                    <div className="in-1">
                        <img src={Info}></img>
                        <span className="f-text-1">You can share this graphical representation with the above listed data</span>
                    </div>
                    <div className="in-2">
                        <div className="m-share">
                            <img src={share} className="img-share"></img>
                            <span className="m-text-3">Share</span>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Graph;