import css from './Option.module.css';
import PropTypes from 'prop-types';

const Options = ({ setValue, resetValue, totalFeedback }) => {
  return (
    <>
      <div className={css.wrapper}>
        <button className={css.good} onClick={() => setValue('good')}>
          Good
        </button>
        <button className={css.neutral} onClick={() => setValue('neutral')}>
          Neutral
        </button>
        <button className={css.bad} onClick={() => setValue('bad')}>
          Bad
        </button>
      </div>
      {totalFeedback !== 0 && (
        <button className={css.reset} onClick={resetValue}>
          Reset
        </button>
      )}
    </>
  );
};

Options.propTypes = {
  setValue: PropTypes.func.isRequired,
  resetValue: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
