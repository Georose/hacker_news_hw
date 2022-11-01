import React from "react";

const TitleSelect = ({titles, handleSelectChange}) => {

    const handleChange = (event) => {
        const index = event.target.value;
        handleSelectChange(titles[index]);
    }

    const titleOptions = titles.map((title, index) => {
        return <option key={index} value={index}>{title.name}</option>
    });

    return (
        <select onChange={handleChange}>
            {titleOptions}
        </select>
    )
}

export default TitleSelect; 