const Row = ({name,price }) => {
    return( 
    <li className="list-group-item d-flex justify-content-between lh-condensed">
    <div>
      <h6 className="my-0">PRODUCT NAME</h6>
      <small className="text-muted"> {name}</small>
    </div>
    <span className="text-muted">${price.toFixed(2)}</span>
  </li>)
}
export default Row