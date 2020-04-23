import React, { useState } from 'react'
import styled from 'styled-components'
import CategorySelect from './CategorySelect'
import CategoryDisplay from './CategoryDisplay'
function App() {
	const [list, setList] = useState([])
	const [activeCategory, setActiveCategory] = useState('')
	const [menu, setMenu] = useState(null)

	return (
		<>
			<Header><h4>Menu Categories</h4></Header>
			<Categories >
				<CategorySelect list={list}
					setList={setList}
					setActiveCategory={setActiveCategory}
					setMenu={setMenu}
				/>
				<CategoryDisplay activeCategory={activeCategory} menu={menu} />
			</Categories>
		</>)
}
const Header = styled.header`
    width: 100%;
    margin-top: 21px;
    margin-bottom: 21px;
`

const Categories = styled.section`
display: flex
`
export default App
