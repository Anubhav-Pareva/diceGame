import dicegame from '../assets/dice.png';
import BUTTON from '../component/BUTTON';
import style from '../css modules/HomePage.module.css';
const HomePage = (props) => {
  return (
    <div className={style.main_wrapper}>
      <div className={style.main_img_container}>
        <img src={dicegame} alt="dicegame"/>
      </div>
      <div className={style.main_content_container}>
            <h1>DICE GAME</h1>
            <BUTTON dfunc={props.dfunc} text={"Play Now"}/>
      </div>
    </div>
  )
}

export default HomePage
