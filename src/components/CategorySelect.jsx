import React, { useEffect } from 'react';
import getData from '../apis'
import styled from 'styled-components'

const CategorySelect = (props) => {
    const { list, setList, setActiveCategory, setMenu } = props

    const handleClick = async (shortName, name) => {
        setMenu(await getData(shortName))
        setActiveCategory(`${name} - ${shortName}`)
    }
    useEffect(() => {
        (async () => {
            const result = await getData()
            setList(result.reduce((acc, item) => {
                acc.push(
                    <li key={item.id} onClick={() => handleClick(item.short_name, item.name)}>
                        {item.name} - {item.short_name}
                    </li>)
                return acc
            }, []))
        })()
    })

    return (
        <List>{list}</List >
    )
}

const List = styled.ul`
    padding-left: 100px;
    padding-right: 50px;
    width: 400px;
    cursor: pointer;

    li:hover {
        font-size: 20px;
        border: 1px solid black
    }
`

export default CategorySelect