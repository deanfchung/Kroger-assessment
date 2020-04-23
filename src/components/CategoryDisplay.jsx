import React from 'react';
import styled from 'styled-components'

const CategoryDisplay = (props) => {
    const { activeCategory, menu } = props;

    const tableItems = menu ? menu.reduce((array, item) => {
        array.push(
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
            </tr>)
        return array;
    }, []) : null

    const content = menu ?
        (<Table className="categories_table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {tableItems}
            </tbody>
        </Table>)
        : null;
    return (
        <div><header><h4>Category: {activeCategory}</h4></header>{content}</div>
    )
}

const Table = styled.table`
    border-collapse: collapse;  
    width: 75%;

    td {
        border: 1px solid black;
        font-size: 15px
    }
`
export default CategoryDisplay;