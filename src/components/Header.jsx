import React from 'react';
import '../styles/Header.scss';

export const Header = (props) => {
    return(
        <div className="Header">
            {props.children}
        </div>
    )
}
