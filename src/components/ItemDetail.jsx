

const ItemDetail = ({item}) => {
    return <div style={{width: "300px"}}>
        <div>{item?.title}</div>
        <div style={{marginTop: "50px"}}>{item?.body}</div>
    </div>
}

export default ItemDetail