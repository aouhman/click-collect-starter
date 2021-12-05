import React from 'react';
import CartFooter from './CartFooter'
import {Table} from '../components'
import {useSelector} from "react-redux";
import {selectorCartTotal} from "../../lib/redux/selectors/selector";
import Row from "./Row";

function Cart() {
    const items = useSelector((state) => state.cart.items)
    const total =useSelector(selectorCartTotal);

    return (
        <Table items={items} heading="My Shopping Cart" subheading="items in your cart">
            <tbody>
            {!items.length && <div> No Items in the cart yet </div>}
            {items.map((item) =>(
                <Row key={item.id} {...item}/>
            ))}
            </tbody>
            <CartFooter total={total}/>
        </Table>
    );
}

export default Cart;
