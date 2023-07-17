import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../../api'

export const Search = ({onSearchChange}) => {

    const loadOptions = async (inputValue) => {

        try {
            const response = await fetch(`${GEO_API_URL}/cities?namePrefix${inputValue}`, geoApiOptions);
            const result = await response.text();
            console.log(result);

            // Process the result and construct the options array
            const options = []; // Replace with your actual options array

            return { options }; // Return an object with "options" property
        } catch (error) {
            console.error(error);
            return { options: [] }; // Return an empty options array in case of error
  }

    }

    const [search, setSearch] = useState(null);
    const handleOnChange = (searchData) => {

        setSearch(searchData);
        onSearchChange(searchData);

    }


    return (
        <div className="search">
            < AsyncPaginate
                placeholder="Search For City"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </div>
    )
}
