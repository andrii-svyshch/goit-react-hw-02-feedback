import PropTypes from 'prop-types';

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  return (
    <>
      <h2 className="statistic__title">Statistics</h2>
      <ul className="statistic__item">
        <li className="statistic__item">Good: {good}</li>
        <li className="statistic__item">Neutral: {neutral}</li>
        <li className="statistic__item">Bad: {bad}</li>
        <li className="statistic__item">Total: {total}</li>
        <li className="statistic__item">
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
