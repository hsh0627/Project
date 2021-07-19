import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import useAxiosGet from "../Hooks/HtttpRequests";

export default function Home() {
    const url = `https://60f2a6fb6d44f30017788718.mockapi.io/api/v1/products?page=1&limit=10`;
    
    let products = useAxiosGet(url)

    let content = null

    if(products.error){
        content = <p>There was an error please refresh or try again later.</p>
    }

    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        content =
        products.data.map((product, key) => 
            <div key={key}>
                <ProductCard 
                    product={product}
                />
            </div>
        )
    }
    
    return (
        <div>
            <h1 className="font-bold text-2xl pb-3">
                最新文章
            </h1>
            {content}
        </div>
    )
}
