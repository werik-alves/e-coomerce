import PropTypes from 'prop-types';

const FilterGroup = ({ title, inputType, options, onChange }) => {
  const handleInputChange = (event) => {
    const { value, checked } = event.target;
    onChange(title, value, checked);
  };

  return (
    <div className="mb-6">
      <h3 className="text-dark-gray-2 text-lg font-medium mb-2">{title}</h3>
      <hr className="border-light-gray-2 mb-4" />
      <div className="space-y-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type={inputType}
              value={option.text}
              className="form-checkbox w-5 h-5 text-primary border-gray-300 rounded"
              onChange={handleInputChange}
            />
            <span className="text-dark-gray-2">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterGroup;
