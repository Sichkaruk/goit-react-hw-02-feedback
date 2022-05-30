import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={s.list}>
            {options.map(option => {
                return (
                    <li key={option} className={s.item}>
                        <button className={s.button} onClick={() => { onLeaveFeedback(option) }}>
                            {option}
                        </button>
                    </li>
                )
            }
            )}
        </ul>

    )
}

export default FeedbackOptions;