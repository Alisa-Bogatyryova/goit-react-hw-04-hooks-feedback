import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={s.btnWrap}>
      <button
        className={s.btn}
        type="button"
        name="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={s.btn}
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={s.btn}
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};


export default FeedbackOptions;