import React, { useState } from "react";
import { AutoComplete } from "antd";
import { connect } from 'react-redux';
import { useEffect } from "react";

const App = ({fruits,onSearch}) => {

  const [value, setValue] = useState('')

  const handleSearch = (value) => {
    setValue(value)
  }

  useEffect( () => {
    onSearch(value)
  },[value,fruits])

  return (
    <div className="wrapper">
      <h2>AutoComplete</h2>
      <AutoComplete
        style={{ width: 500 }}
        options={fruits}
        placeholder="input here"
        onSearch={handleSearch}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  fruits: state.fruitsState.fruits,
});


const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', payload : searchTerm }),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
