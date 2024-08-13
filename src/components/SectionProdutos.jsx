// import React from 'react';
import PropTypes from 'prop-types';

const SectionProduto = ({ title, titleAlign, children }) => {
  return (
    <section className="mb-8">
      <h2 className={`text-xl font-bold mb-4 text-${titleAlign}`}>{title}</h2>
      {children}
    </section>
  );
};

SectionProduto.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(['left', 'center', 'right']).isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionProduto;
