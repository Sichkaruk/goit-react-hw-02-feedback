import s from "./Statistics.module.css";
const Statistics = ({ good,
  neutral,
  bad,
  totalFeedbackCount,
  positiveFeedback, }) => {
    
    const totalCount = totalFeedbackCount();

    return (
        <div>
            {totalCount ? (
                <ul className={s.list}>
                    <li className={s.item}>
                         <p className={s.text}>Good: {good}</p>
                    </li>
                    <li className={s.item}>
                         <p className={s.text}>Neutral: {neutral}</p>
                    </li>
                    <li className={s.item}>
                        <p className={s.text}>Bad: {bad}</p>
                    </li>
                    <li className={s.item}>
                        <p className={s.text}>Total: {totalCount }</p>
                    </li>
                    <li className={s.item}>
                        <p className={s.text}>Positive feedback: {positiveFeedback()}%
                </p>
                    </li>
                </ul>
            ) : (
                <p className={s.subTitle}>There is no feedback</p>
            )
            }
        </div>
    )
}

export default Statistics;
