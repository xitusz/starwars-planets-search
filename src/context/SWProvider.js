import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import requestApi from '../services/api';

const SWProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState({ filterByName: { name: '' } });
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [columnOption, setColumnOption] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  useEffect(() => {
    requestApi()
      .then((newData) => setData(newData.results));
  }, []);

  const handleChange = ({ target: { value } }) => {
    setFilterData({ filterByName: { name: value } });
  };

  const handleColumnFilter = ({ target: { value } }) => {
    setColumnFilter(value);
  };

  const handleComparisonFilter = ({ target: { value } }) => {
    setComparisonFilter(value);
  };

  const handleValueFilter = ({ target: { value } }) => {
    setValueFilter(value);
  };

  const handleClick = () => {
    const VALUE = parseInt(valueFilter, 10);

    const planetsFiltered = data.filter((planet) => {
      if (comparisonFilter === 'maior que') {
        return planet[columnFilter] > VALUE;
      } if (comparisonFilter === 'menor que') {
        return planet[columnFilter] < VALUE;
      }

      return planet[columnFilter] === valueFilter;
    });

    setColumnOption(columnOption.filter((option) => option !== columnFilter));

    setData(planetsFiltered);
  };

  return (
    <SWContext.Provider
      value={
        { data,
          filterData,
          handleChange,
          columnFilter,
          handleColumnFilter,
          comparisonFilter,
          handleComparisonFilter,
          valueFilter,
          handleValueFilter,
          handleClick,
          columnOption }
      }
    >
      {children}
    </SWContext.Provider>
  );
};

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;
