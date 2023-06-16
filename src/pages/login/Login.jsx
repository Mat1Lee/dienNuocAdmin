import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
import { FacebookAuthProvider, GoogleAuthProvider ,signInWithPopup } from "firebase/auth";
import { auth } from '../../fireBase/FireBase-congig';

 const Login=(props)=> {
  const{useState}=React;
  const navigate = useNavigate()
const GgProvider = new GoogleAuthProvider();
const FbProvider = new FacebookAuthProvider();
const [err, setErr] = useState(false);
  var sectionStyle = {
    backgroundPosition: 'center', backgrondSize: 'cover',
    backgroundBlendMode: 'multiply',
    backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdPq7O2yFXA7nsg_tCG44f8UXM2XshLau0w&usqp=CAU)"
  };

const handleLogin =async (provider)=>{
  console.log('login')
  try {
    const res = await signInWithPopup(auth,provider);
    navigate('/')
  } catch (error) {
    setErr(true)
  }
}




  

      
  return (
    <div>
      
      <div className="w-full dark:bg-gray-500" style={sectionStyle}>
        <div className="container">
            <div className="card">
                <div className="form">
                    <div className="left-side">
                        
                    </div>

                    <div className="right-side">
                        <div className="register">
                            <p>Not a member? <a href="/register">Register Now</a></p>
                        </div>

                        <div className="hello">
                            <h2>Hello Again!</h2>
                            <h4>Welcome back you have been missed! </h4>
                        </div>

                       

                        <hr />
                      
                        <div className="boxes">
                            <span onClick={()=>handleLogin(GgProvider)}><img src="https://imgur.com/XnY9cKl.png" /></span>
                            <span><img src="https://imgur.com/ODlSChL.png" /></span>
                            <span onClick={()=>handleLogin(FbProvider)}><img src="https://imgur.com/mPBRdQt.png" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}
export default Login;