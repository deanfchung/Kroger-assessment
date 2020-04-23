import React from 'react';

const CategoryDisplay = (props) => {
    const { activeCategory } = props;

    return (
        <div>
            <header><h4>Active Category: {activeCategory}</h4></header>
        </div >
    )
}

export default CategoryDisplay;