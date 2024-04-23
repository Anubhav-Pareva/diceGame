import style from '../css modules/BUTTON.module.css';
const BUTTON = (props) => {
  return (
    <button className={props.btntype?style.secondry_btn:style.primary_btn} onClick={props.dfunc}>{props.text}</button>
  )
}

export default BUTTON
