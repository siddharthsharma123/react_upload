import logo from './logo.svg';
import './App.css';
import {Typography} from '@material-ui/core'  
import SocialsMenu from './social_links.js';

function App() {
  return (
    <div className="App">
      <img src={require('./Images/profile_pic_resized.jpg').default} height = '400' width = '400'/>  
      <div id="container"> 
      <Typography variant="h4">Siddharth Sharma </Typography> 
      <Typography variant="h5" color='textSecondary' bottomGutter> Computer Engineering Student</Typography> 
      <SocialsMenu/>
      </div>

    </div>
  );
}

export default App;
