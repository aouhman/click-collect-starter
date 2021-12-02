import React from 'react';
import CartFooter from './CartFooter'
import {Table} from '../components'
import {useSelector} from "react-redux";
import {selectorCartTotal} from "../../lib/redux/selectors/selector";
import Row from "./Row";

function Cart() {
    const items = useSelector((state) => state.items)
    const total =useSelector(selectorCartTotal);

    return (
        <Table items={items} heading="My Shopping Cart" subheading="items in your cart">
            <tbody>
            {!items.length && <div> No Items in the cart yet </div>}
            {items.map((item) =>(
                <Row {...item}/>
            ))}
            </tbody>
            <CartFooter total={total}/>
        </Table>
    );
}

export default Cart;
