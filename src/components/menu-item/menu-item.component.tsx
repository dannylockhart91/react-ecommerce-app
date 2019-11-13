import './menu-item.styles.scss';
import React from "react";
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface MenuItemProps extends RouteComponentProps {
    title: string,
    imageUrl: string,
    size: string,
    linkUrl: string
}

const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className='background-image'/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
