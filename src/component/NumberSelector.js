import NumberButton from "./NumberButton";
import style from '../css modules/NumberSelector.module.css';

const NumberSelector = ({isSelected, setSelected}) => {
  return (
    <div className={style.numselect_wrapper}>
      <div className={style.numselect}>
        <NumberButton text={1} isSelected={isSelected} setSelected={setSelected}/>
        <NumberButton text={2} isSelected={isSelected} setSelected={setSelected}/>
        <NumberButton text={3} isSelected={isSelected} setSelected={setSelected}/>
        <NumberButton text={4} isSelected={isSelected} setSelected={setSelected}/>
        <NumberButton text={5} isSelected={isSelected} setSelected={setSelected}/>
        <NumberButton text={6} isSelected={isSelected} setSelected={setSelected}/>
      </div>
      <p>Selected Number</p>
    </div>
  )
}

export default NumberSelector
