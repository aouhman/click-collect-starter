import React from 'react'
import {useQuery} from "@apollo/client";
import {GET_PRODUCTS} from "../../lib/queries";
import Card from "./Card";
import {Context} from "../../context";

const styles = {
    gallery: {
        height: 'calc(100vh - 120px)',
        overflow: 'scroll'
    }
}

// main 48. Apollo Client Hook : useQuery
function Gallery({category}) {
    const {filtersChecked} = React.useContext(Context);

    const {loading, error, data} = useQuery(
        GET_PRODUCTS, {
            variables: {category: category}
        })
     let array = [];
    const productWithFilter = () => {
        if(!filtersChecked.length) return data?.products
      filtersChecked.forEach((filter)=>{
          array = [...array,...data?.products?.filter(product=> product.filter === filter.toLowerCase())]

      });
        return array;
    }
    if (loading) return <div>Loading</div>;
    if (error) return <div>Sorry an error occurred {error}</div>
    if (!data) return <div>No data!</div>
    const products = productWithFilter();
    return (<div className="col-md-8 order-md-2 col-lg-9">
        <div className="container-fluid" style={styles.gallery}>
            <div className="row">
                {products?.map((product) => (
                    <Card {...product}/>
                ))}
            </div>
        </div>
    </div>)
}

export default Gallery