import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid footer_wrapper d-flex flex-row justify-content-between" >
                <div className="footer_text1">
                <span className="ftext">Copyright © 2021 GrowMetrix PTY LTD. All Rights Reserved.</span>
                </div>
                <div className="footer_text2">
                <span className="ftext">TERMS & CONDITIONS</span>
                <span className="ftext">COOKIE POLICY</span>
                <span className="ftext">PRIVACY POLICY</span> 
                </div>   
            </div>
        );
    }
}

export default Footer;