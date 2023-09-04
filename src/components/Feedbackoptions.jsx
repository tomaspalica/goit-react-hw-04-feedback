import css from '../css/Feedbackoptions.module.css'
const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <ul className={css.buttonList}>
    {options.map(option => (
        <li key ={option}>
            <button className={css.feedbackButton} type="button" onClick={ () => onLeaveFeedback(option)} >{option}</button>
        </li>
    ))}
    </ul>
)
export {FeedbackOptions}