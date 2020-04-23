import React, { useEffect } from 'react';
import { getCategory } from '../apis'
import styled from 'styled-components'

const CategorySelect = (props) => {
    const { list, setList, setActiveCategory } = props
    useEffect(() => {
        (async () => {
            const result = await getCategory()
            setList(result.reduce((acc, item) => {
                acc.push(
                    <li key={item.id} onClick={() => setActiveCategory(item.name)}>
                        {item.name} - {item.short_name}
                    </li>)
                return acc
            }, []))
        })()
    }, [list, setActiveCategory, setList])

    return (
        <List>{list}</List >
    )
}

const List = styled.ul`
    padding-left: 10rem;
    margin-right: 5rem;
    width: 25%;
    cursor: pointer;

    li:hover {
        font-size: 20px;
        border: 1px solid black
    }
`

export default CategorySelect