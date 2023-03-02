import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import '../css/table.css';

const Table = () => {
  const {
    data,
    filterData,
    handleChange,
    columnFilter,
    handleColumnFilter,
    comparisonFilter,
    handleComparisonFilter,
    valueFilter,
    handleValueFilter,
    handleClick,
    columnOption,
  } = useContext(SWContext);

  const filterPlanets = data.filter((planet) => (
    planet.name.includes(filterData.filterByName.name)
  ));

  return (
    <div>
      <h1 className="title">Star Wars Planet Search</h1>
      <form className="form">
        <div>
          <label htmlFor="search">
            <input
              type="text"
              data-testid="name-filter"
              id="search"
              name="search"
              className="search"
              placeholder="Filtrar por nome"
              onChange={ handleChange }
            />
          </label>
        </div>
        <label htmlFor="columnFilter">
          <select
            data-testid="column-filter"
            id="columnFilter"
            name="columnFilter"
            className="columnFilter"
            onChange={ handleColumnFilter }
            value={ columnFilter }
          >
            {
              columnOption.map((option) => (
                <option
                  key={ option }
                  value={ option }
                >
                  {option}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="comparisonFilter">
          <select
            data-testid="comparison-filter"
            id="comparison"
            name="comparison"
            className="comparison"
            onChange={ handleComparisonFilter }
            value={ comparisonFilter }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="valueFilter">
          <input
            type="number"
            data-testid="value-filter"
            id="valueFilter"
            name="valueFilter"
            className="valueFilter"
            onChange={ handleValueFilter }
            value={ valueFilter }
          />
        </label>
        <div>
          <button
            type="button"
            data-testid="button-filter"
            className="button-filter"
            onClick={ handleClick }
          >
            Filtrar
          </button>
        </div>
      </form>
      <hr className="hr-table" />
      <table border="5" className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            filterPlanets.map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{/* planet.films */}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{/* planet.url */}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
