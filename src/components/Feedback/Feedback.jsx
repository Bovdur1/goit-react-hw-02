import PropTypes from 'prop-types';

const Feedback = ({
  value: { good = 0, neutral = 0, bad = 0 },
  totalFeedback = 0,
}) => {
  // Обчислення відсотку позитивних відгуків
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback ? positiveFeedback : 0}%</p>
    </>
  );
};

Feedback.propTypes = {
  value: PropTypes.object.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Feedback;
