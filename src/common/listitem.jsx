import React, { Component } from 'react';
import Elipse from '../assets/elipse.svg';

class ListItem extends Component {
    render() {
        console.log(this.props.status);
        const el=this.props.status=="Active"?<span className="m-text-status-active">{this.props.status}</span>:
        <span className="m-text-status-closed">{this.props.status}</span>;
        return (
            <div className="list-wrapper" style={{"background":`${this.props.background}`}}>
                    <div className="col-md-3">
                        <span className="m-text-head"><a href="#">{this.props.project}</a></span>
                    </div>
                    <div className="col-md-2 m-col-1">
                        <span className="m-text-head"><a href="#">{this.props.company}</a></span>
                    </div>
                    <div className="col-md-1 m-col-2">
                        <span className="m-text-head">{this.props.employee}</span>
                    </div>
                    <div className="col-md-1">
                        <span className="m-text-head">{this.props.rater}</span>
                    </div>
                    <div className="col-md-2 m-col-2">
                        <span className="m-text-head">{this.props.participation}</span>
                    </div>
                    <div className="col-md-2 m-col-2">
                        <span className="m-text-head">{this.props.expiry}</span>
                    </div>
                    <div className="col-md-1 status">
                        {el}
                        <div className="elipse">
                            <img src={Elipse} className="img-elipse" />
                        </div>

                    </div>
                    {/* <div className="col-md-1 elipse">

                    </div> */}
            </div>
        );
    }
}

export default ListItem;