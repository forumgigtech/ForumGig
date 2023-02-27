import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import logo from './logo.svg';
import './App.css';


// renk paleti https://coolors.co/5bba6f-3fa34d-2a9134-137547-054a29
function App() {
  const [page, setPage] = useState('LoginState');

  function FreelancerPageRouter(){
    setPage('FreelancerPage');
  }

  function EnterprisePageRouter(){
    setPage('EnterprisePage');
  }

  function EndPageRouter(){
    setPage('EndPage');
  }

  function RegisterPageRouter(){
    setPage('RegisterPage');
  }

  return (
    <div>

    {page == 'LoginState' && (
    <div className="FreelancerRegister">
    <form>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" className="LoginInput" id="email" name="email" required/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input className="LoginInput" type="password" id="password" name="password" required/>
      </div>
      <button className="LoginButton" type="submit">Login</button>
      </form>

      <h5 onClick={RegisterPageRouter}>Don't you have an account?</h5>

    </div>
    )}

    {page == 'RegisterPage' && (
      <div className="WelcomePage">
      <button className="FreelancerRegister" onClick={FreelancerPageRouter}>I am a freelancer</button>
      <button className="EnterpriseRegister" onClick={EnterprisePageRouter}>I am represanting an enterprise</button>
      </div>
    )}

    {page == 'FreelancerPage' && (
      <div class="RegisterDiv">
  <div class="item"><input placeholder = "Name" required/></div>
  <div class="item"><input placeholder = "Surname" required/></div>
  <div class="item"><input placeholder = "E-mail" required/></div>
  <div class="item"><input placeholder = "Password" type = "password" required/></div>
  <div class="item"><input placeholder = "LinkedIn Profile" required/></div>
  <div class="item"><input placeholder = "Title" required/></div>
  <button onClick={EndPageRouter}>Submit</button>
</div>
    )}

    {page == 'EnterprisePage' && (
      <div class="RegisterDiv">
  <div class="item"><input placeholder = "Company Name" required/></div>
  <div class="item"><input placeholder = "Representer Name" required/></div>
  <div class="item"><input placeholder = "Company E-mail" required/></div>
  <div class="item"><input placeholder = "Password" type = "password" required/></div>
  <div class="item"><input placeholder = "Company LinkedIn Profile" required/></div>
  <div class="item"><input placeholder = "Representer Title" required/></div>
    <button onClick={EndPageRouter}>Submit</button>
    </div>
    )}

    {page == 'EndPage' && (
      <div>
      <FontAwesomeIcon icon={faCheckSquare} className="CheckIcon" size="8x" />
      <h2>Thanks for apply. We're going to send an e-mail if there is a match.</h2>
      <h3>If you saw any problem please <a href='mailto:forumgig.istanbul@gmail.com?subject=End Page Bug'>mail us</a></h3>
      </div>
    )}

    </div>
  );
}

export default App;
