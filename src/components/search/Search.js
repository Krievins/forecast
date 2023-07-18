import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../../api'

export const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {

        try {
            const response = await fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, geoApiOptions);
            const result = await response.json();
            console.log(result);

            const options = result.data.map((city) => {
                return {
                  value: `${city.latitude} ${city.longitude}`,
                  label: `${city.name}, ${city.countryCode}`,
                };
              });

            return {
                options,
            };
            
        } catch (error) {
            console.error(error);
            return { options: [] }; // Return an empty options array in case of error
        }
    }

    
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
                loadOptions={(inputValue) => loadOptions(inputValue)}
            />
        </div>
    )
}
