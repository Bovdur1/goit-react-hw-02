import { wrapper, good, neutral, bad, reset } from './Options.module.css';
import PropTypes from 'prop-types';

const Options = ({ setValue, resetValue, totalFeedback = 0 }) => {
  return (
    <>
      <div className={wrapper}>
        {/* Кнопки опцій відгуків */}
        <button className={good} onClick={() => setValue('good')}>
          Good
        </button>
        <button className={neutral} onClick={() => setValue('neutral')}>
          Neutral
        </button>
        <button className={bad} onClick={() => setValue('bad')}>
          Bad
        </button>

        {/* Рендер кнопки скидання відгуків за умови їх наявності */}
        {totalFeedback !== 0 && (
          <button className={reset} onClick={resetValue}>
            Reset
          </button>
        )}
      </div>
    </>
  );
};

Options.propTypes = {
  setValue: PropTypes.func.isRequired,
  resetValue: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
