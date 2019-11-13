import React from "react";
import { SHOP_DATA, ShopData } from './shop.data';

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

interface ShopPageProps {
}

interface ShopPageState {
    collections: ShopData[]
}

class ShopPage extends React.Component<ShopPageProps, ShopPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map((collection) => (
                        <CollectionPreview key={collection.id} title={collection.title} items={collection.items}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;
