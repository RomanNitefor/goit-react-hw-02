import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div className={css.container}>
      <button className={css.btnGood} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={css.btnNeutral}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.btnBad} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btnReset} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
