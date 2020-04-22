import React, { useEffect, useState } from 'react'
import { getCategory } from '../apis'
import styled from 'styled-components'
function App() {
	const [list, setList] = useState([])
	useEffect(() => {
		(async () => {
			const result = await getCategory()
			setList(result.reduce((acc, item) => {
				acc.push(<li key={item.id} className='categories-list-item'>{item.name} - {item.short_name}</li>)
				return acc
			}, []))
		})()
	}, [])
	return (
		<>
			<Header><h4>Menu Categories</h4></Header>
			<Categories ><List className='categories-list'>{list}</List>
				<Content><h4>Category:</h4> </Content></Categories>
		</>)
}
const Header = styled.header`
    width: 100%;
    margin-top: 21px;
    margin-bottom: 21px;
`

const List = styled.ul`
	padding-left: 10rem;
	width: 25%
`
const Categories = styled.section`
display: flex

`
const Content = styled.div`
`
export default App
