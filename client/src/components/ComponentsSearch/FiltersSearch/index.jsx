import React from 'react';
import { filtersParams } from 'config/config';

const FiltersSearch = ({ filter, updateFilter }) => (
    <div className="filters">
        <span className="filters__title">
            Поиск по:
        </span>
        <div className="filters__wrapper">
            {filtersParams.map(({title, keys}, key) => (
                <span
                    key={key}
                    className={`filters__wrapper-type ${keys === filter ? 'active' : ''}`}
                    onClick={() => updateFilter(keys)}
                >
                    {title}
                </span>
            ))}
        </div>
    </div>
);

export default FiltersSearch;
