import React from 'react';
import TitleListItem from './TitleListItem';

const TitleList = ({titles}) => {

    const titleItems = titles.map((title, index) => {
        return <TitleListItem key={index} title={title} />
    })

    return (
        <div className='title-list'>
    <h3>Title List</h3>
    <ul>
        {titleItems}
    </ul>
        </div>
    )
}

export default TitleList;