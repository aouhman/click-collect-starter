const calculateTotal = ($0, $1) => $0 + $1;
const selectItems = state => state.items;
export const selectorCartTotal = state => {
    return selectItems(state).map((item) => item.quantity * item.price).reduce(calculateTotal, 0);
}
