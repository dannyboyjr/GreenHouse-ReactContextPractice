import './LightSwitch.css';
import {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext'


function LightSwitch() {
  const {themeName, setThemeName} = useContext(ThemeContext)

  const nightTime = () =>{
    setThemeName("night")
  }
  const dayTime = () =>{
    setThemeName("day")
  }
  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on"onClick={dayTime}>DAY</div>
      <div className="off"onClick={nightTime}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;