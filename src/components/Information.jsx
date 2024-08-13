import PropTypes from 'prop-types';

const Information = ({ title, informations }) => {
  return (
    <div className="mb-4">
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <ul>
        {informations.map((info, index) => (
          <li key={index} className="mb-1">
            <a href={info.link} className="text-white hover:underline">
              {info.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Information.propTypes = {
  title: PropTypes.string.isRequired,
  informations: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Information;
