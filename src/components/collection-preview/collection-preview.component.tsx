import './collection-preview.styles.scss';
import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import { Item } from '../../store/cart/cart.types';

interface CollectionPreviewProps {
    title: string,
    items: Item[]
}

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
            }
        </div>
    </div>
);

export default CollectionPreview;
