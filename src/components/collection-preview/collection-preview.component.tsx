import './collection-preview.styles.scss';
import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

interface CollectionPreviewProps {
    title: string,
    items: { id: number, name: string, imageUrl: string, price: number }[]
}

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price}/>
                    ))
            }
        </div>
    </div>
);

export default CollectionPreview;
