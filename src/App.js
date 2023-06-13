import './App.css';
import { TextField, InputLabel, Select, MenuItem, FormControl, FormControlLabel, Checkbox} from '@mui/material';
import twitterIcon from './twitterIcon.png'
import facebookIcon from './facebookIcon.webp'
import instagramIcon from './instagramIcon.webp'
import emailIcon from './emailIcon.png'


function App() {
  return (
    <div className="page">
      <div className="main">
         <div className="banner">
           
         </div>
         <div className="container">
              <h1>Lastation</h1>
              <p id="subscribeText">Subscribe to lastation</p>
              <br/>
              <p id="supportText">Support Lastation and gain acces to VIP benefits</p>
              <div  className="formContainer">
                <form>
                 <TextField
                   label="Name"
                   className="inputMui"
                   type="text"
                   required
                   size="small"
                 />
                 <TextField
                   label="Email"
                   className="inputMui"
                   type="text"
                   required
                   size="small"
                 />
                 <FormControl className="inputMui">
                  <InputLabel size='small' id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    size='small'
                   >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                   </Select>
                  </FormControl>
                  <div className="inputMui genderInput">
                    <p>Gender: </p>
                    <FormControlLabel
                      value="Male"
                      control={<Checkbox size='small' />}
                      label="Male"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="Female"
                      control={<Checkbox size='small'/>}
                      label="Female"
                      labelPlacement="end"
                    />
                   </div>
                   <TextField
                      label="Message"
                      multiline
                      minRows={2}
                      maxRows={2}
                      size="small"
                      className="inputMui messageMui"
                  /> 
                  <div className="formButtonDiv">
                    <button>Send</button>
                  </div>
              </form>
              </div>

              <div className="bottomContainer">
                <button className="paypalBtn">Pay now with PayPal</button>
              </div>
              <div className="icons">
                      <img src={twitterIcon} alt="twitterImg"></img>
                      <img src={facebookIcon} alt="fbImg"></img>
                      <img src={instagramIcon} alt="instImg"></img>
                      <img src={emailIcon} alt="emailImg"></img>
              </div>
         </div>
          


      </div>
      <section className="copyright">
             <p>Copyright ©. All rights reserved</p>
      </section>
    </div>
  );
}

export default App;
