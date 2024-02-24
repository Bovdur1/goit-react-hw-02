import PropTypes from 'prop-types';

const Description = ({ title, article }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{article}</p>
    </>
  );
};

Description.propTypes = {
  title: PropTypes.string,
  article: PropTypes.string,
};

export default Description;
