
import Item from './Forms/Item';
import PropTypes from  'prop-types';


function List(){
    return (
        <>
            <h1>Lista 1</h1>
            <ul>
                <Item item="Item 1" data="11/12/2021"/>
                <Item item="Item 2" data="11/12/2021"/>
                <Item/>
            </ul>
        </>
    )
}

export default List;