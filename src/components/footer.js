import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="footer">
                    <p className="footer-text">Questions? Contact us at info@campk12.com</p>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Footer;