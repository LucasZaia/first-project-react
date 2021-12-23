import PropTypes from 'prop-types'

function Item ({item, data}){
    return (
        <>
        <li>{item} - {data}</li>
        </>
    )
}

Item.propTypes ={
    item: PropTypes.string,
    data: PropTypes.string
}

Item.defaultProps = {
    item: 'item',
    data: '11/11/11'
}

export default Item;