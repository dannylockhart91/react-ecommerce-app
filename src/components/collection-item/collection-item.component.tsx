import './component.item.styles.scss';
import React from "react";

interface CollectionItemProps {
    imageUrl: string,
    name: string,
    price: number
}

const CollectionItem: React.FC<CollectionItemProps> = ({ imageUrl, name, price }) => (
    <div className='collection-item'>
        <div className='image' style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='collection-item-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
);

export default CollectionItem;
