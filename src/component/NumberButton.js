import style from '../css modules/NumberButton.module.css';
const NumberButton = (props) => {
  return (
    <button className={props.isSelected===props.text?style.selected:style.not_selected} onClick={()=>props.setSelected((prev)=>props.text)}>{props.text}</button>
  )
}

export default NumberButton
