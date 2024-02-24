import PropTypes from 'prop-types';

const Feedback = ({ value, totalFeedback }) => {
  const positiveFeedback = Math.round(
    ((value.good + value.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <p>Good: {value.good}</p>
      <p>Neutral: {value.neutral}</p>
      <p>Bad: {value.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </>
  );
};

Feedback.propTypes = {
  value: PropTypes.object.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Feedback;
