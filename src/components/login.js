import React from 'react';
import LoginImg from './image/undraw_team_work_k80m.svg'
import {FcGoogle} from 'react-icons/fc'
import {GrFacebookOption, GrTwitter} from 'react-icons/gr'
import './login.css';
class Login extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className='Login-Container'>
                    <img src={LoginImg} className='Login-Img'/>
                    <div className='Login-Box'>
                        <input placeholder='Email' className='Login-Input Login-Input1' type='text'/><br/>
                        <input placeholder='Password' className='Login-Input Login-Input2' type='password'/><br/>    
                        <button className='Login-Btn-Log'>Login</button>
                        <div className='Login-With'>
                            <p>Or login with :</p>
                            <button><FcGoogle size={35}/></button>&nbsp;
                            <button><GrFacebookOption size={35} color='#375398'/></button>&nbsp;
                            <button><GrTwitter size={35} color='#45B0ED'/></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Login;