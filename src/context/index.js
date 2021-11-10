import React, {Component, useState} from "react";

export const Context = React.createContext();

const FiltersProvider = ({children}) => {
    const categories = ["Women", "Men", "Kids", "Accessories"];
    const filters = ["Top", "Bottom", "Jacket"];
    const [category, setCategory] = useState(categories[0]);
    const [filtersChecked, setFiltersChecked] = useState({Top: false, Bottom: false, Jacket: false});
    const updateFilters = (e) =>
        setFiltersChecked((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.checked,
        }));

    const updateCategory = (value) => setCategory(value);

    const filtersKeys = () => {
        return Object.entries(filtersChecked)
            .map(([key, value]) => value && key)
            .filter((obj) => !!obj);
    };

    const value = React.useMemo(() => {
        return {
            categories,
            filters,
            updateCategory,
            updateFilters,
            filtersChecked:filtersKeys(),
            category
        }
    }, [category,filtersChecked])
    return <Context.Provider value={value}>{children}</Context.Provider>
}

export const withContext = (Component) => () => {
    return (
        <Context.Consumer>
            {(value) => <Component value={value}/>}
        </Context.Consumer>
    )
};
export default FiltersProvider;