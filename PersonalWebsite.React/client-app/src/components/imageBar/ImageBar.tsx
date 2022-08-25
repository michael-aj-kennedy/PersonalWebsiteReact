import React from 'react';
import sideImage from './../../images/background/1.jpg'
import './ImageBar.css';

export function ImageBar() {
    return (
        <div className="mk-sidebar full-height">
            <div className="border-right border-light full-height">
                <div className="border-right border-dark full-height">
                    <div className="full-height">
                        <img src={sideImage} alt="sunset"></img>
                    </div>
                </div>
            </div>
        </div>
  );
}
