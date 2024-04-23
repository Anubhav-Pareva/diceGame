import style from '../css modules/TotalScore.module.css';
const TotalScore = ({totalScore}) => {
  return (
    <div className={style.TS_wrapper}>
      <h1>
        {totalScore}
      </h1>
      <p>
        Total Score
      </p>
    </div>
  )
}

export default TotalScore
