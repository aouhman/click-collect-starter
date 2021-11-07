import React from 'react'
import {useQuery} from "@apollo/client";
import {GET_PRODUCTS} from "../../lib/queries";
import Cart from "../Cart";
import Card from "./Card";
const styles = {
    gallery : {
      height: 'calc(100vh - 120px)', 
      overflow: 'scroll'
    }
}

// main 48. Apollo Client Hook : useQuery
function Gallery() {
    const {loading,error,data} = useQuery(
        GET_PRODUCTS,{
            variables:{category:"women"}
        })
    if(loading) return <div>Loading</div>;
    if(error) return <div>Sorry an error occurred {error}</div>
    if(!data) return <div>No data!</div>
    return(<div className="col-md-8 order-md-2 col-lg-9">
      <div className="container-fluid" style={styles.gallery}>
        <div className="row">
            {data?.products.map((product)=>(
                <Card {...product}/>
                ))}
        </div>
      </div>
    </div>)
  }
  export default Gallery