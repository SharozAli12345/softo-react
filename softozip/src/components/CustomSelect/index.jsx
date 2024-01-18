/* eslint-disable react-refresh/only-export-components */
import { Select } from "antd";
import { memo } from "react";
import PropTypes from "prop-types";
function CustomSelect(props) {
  const { className, options, handleChange, ...restParams } = props;
  return (
    <Select
      {...restParams}
      className={className}
      options={options}
      onChange={handleChange}
    />
  );
}

CustomSelect.propTypes = {
  className: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

CustomSelect.defaultProps = {
  className: "w-1/4",
  options: [],
  handleChange: () => {},
};

export default memo(CustomSelect);
