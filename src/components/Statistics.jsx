import css from '../css/Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, goodPrtge }) => {
    return (
        <ul className={css.statList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total:{total}</li>
      <li>Positive feedback: {goodPrtge}%</li>
        </ul>
    )
}

export {Statistics}