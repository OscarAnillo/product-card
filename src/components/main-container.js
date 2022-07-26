import ProductText from "./product-text";

import { product, productName, productLegend
 } from "../data/product-data";

export default function MainContainer(){
    return (
        <div className="main">
            <ProductText product={product} productName={productName} productLegend={productLegend}/>
        </div>
    )
}