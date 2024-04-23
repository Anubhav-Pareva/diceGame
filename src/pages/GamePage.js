import NumberSelector from "../component/NumberSelector";
import TotalScore from "../component/TotalScore";
import BUTTON from "../component/BUTTON";
import style from "../css modules/GamePage.module.css";
import dice_1 from "../assets/Dice/dice_1.png";
import dice_2 from "../assets/Dice/dice_2.png";
import dice_3 from "../assets/Dice/dice_3.png";
import dice_4 from "../assets/Dice/dice_4.png";
import dice_5 from "../assets/Dice/dice_5.png";
import dice_6 from "../assets/Dice/dice_6.png";
import { useState } from "react";

const GamePage = (props) => {
    const [showrule, setshowrule] = useState(false);
    const [currentDice, setCurrentDice] = useState(1);
    const [isSelected, setSelected] = useState(1);
    const [totalScore, setTotalScore] = useState(0);
    function imgSelect(){
      if(currentDice===1){
        return dice_1;
      }
      if(currentDice===2){
        return dice_2;
      }
      if(currentDice===3){
        return dice_3;
      }
      if(currentDice===4){
        return dice_4;
      }
      if(currentDice===5){
        return dice_5;
      }
      if(currentDice===6){
        return dice_6;
      }
    }
    function isShowRule(){
        setshowrule(!showrule);
    }
    function generateRandomNumber(min, max){
        return Math.floor(Math.random() * (max-min) + min);
    }
    function resetScore(){
      setTotalScore(prev => 0);
    }
    function roleDice(){
      let randomnumber = generateRandomNumber(1,7);
      setCurrentDice(prev =>randomnumber);      
      if(isSelected===randomnumber){
        setTotalScore((prev)=>prev+1);
      }
      else{
        setTotalScore((prev)=>prev-1);
      }
    }
  return (<>
  <div className={style.gaming_wrapper}>
    <div className={style.gaming_header}>
      <TotalScore totalScore={totalScore}/>
      <NumberSelector isSelected={isSelected} setSelected={setSelected}/>
    </div>
    <div className={style.gaming_main}>
        <div className={style.gaming_body} onClick={roleDice}>
        <img src={imgSelect()} alt="dice" />
            <p>Click on Dice to roll</p>
        </div>
        <div className={style.gaming_btn}>
            <BUTTON dfunc={resetScore} text={"Reset Score"} btntype={true}/>
            <BUTTON dfunc={isShowRule} text={showrule?"Hide Rules":"Show Rules"}/>
            <BUTTON dfunc={props.dfunc} text={"Back To Home"}/>
        </div>
    </div>
    </div>
    {showrule?
    <div className={style.rule_box}>
        <h3>How to play dice game</h3>
        <ul>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>after click on dice if selected number is equal to dice number you will get same point as dice</li>
        <li>if you get wrong guess then 2 point will be dedcuted</li>
        </ul>
    </div>:
    null}
    </>
  )
}

export default GamePage
