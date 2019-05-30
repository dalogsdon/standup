import React, { Component } from 'react';
import Navbar from './Navbar';
import Meta from './Meta';

import "../styles/page.scss";

class Page extends Component {
    render() {
        return (
            <div className="page">
                <Meta />
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}

export default Page;
