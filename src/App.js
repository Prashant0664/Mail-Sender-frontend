import './App.css';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
const rootUrl = 'http://localhost:5000';
function App() {

  //  notify = () => toast('Your Mail will be delievered if you have entered all credentials right!');
  
  const [data, setName] = React.useState({
    name: "",
    gmail: "",
    tgmail: "",
    content: "",
    subject: "",
    password: "",
    age: true,
  })
  const notify = () => toast('PLEASE FILL ALL REQUIRED CREDENTIALS');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name || !data.password || !data.gmail || !data.tgmail || !data.content||!data.subject||(9===9)){
      const notify = () => toast('PLEASE FILL ALL REQUIRED CREDENTIALS');
      notify();
      alert("Please fill all required credentials")
      return};
      
      try {
        const notify = () => toast('PLEASE FILL ALL REQUIRED CREDENTIALS');
      notify();
        const url = `http://localhost:5000/api/v1/signup`;
        // const url = `/api/v1/auth/login`;
        const res=await fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        // console.log("<<<<<----");
        notify();
        // console.log(res)
        alert("MAIL SENT SUCCESSFULLY")
        // notify();
        // console.log("----");
        // const {datas2}=await axios.post(url, data);
        // console.log(datas2)
      } catch (error) {
      const notify = () => toast(error);
      alert("SOMETHING WENT WRONG! PLEASE RECHECK YOUR CREDENTIALS")
      console.log(error);
    }
  };
  const [isActive, changeL] = React.useState(false)
  const [isActiveS, changeS] = React.useState(false)
  return (
    <div className="App" >
      
      <div className="from-box">
        <div className={isActive ? "show-ins" : "hide"}>
          <div className='go-back' onClick={() => changeL(!isActive)}>Go Back</div>
          <h1>TO GET PASSWORD</h1><br />
          GO TO YOUR <b>GOOGLE ACCOUNT SETTINGS/MANAGE YOUR ACCOUNT<br /></b> -&#62; CLICK <b>SETTINGS BUTTON</b><br /> -&#62; ENABLE <b>TWO-STEP VERIFICATION</b><br /><i>After Enabling Two-step Varification</i><br></br>
          CLICK <b> GET APP PASSWORD BELOW TWO-STEP VERIFICTION</b> to get your unique password.<br />Happy Mailing!!
        </div>

        <form className={isActive?"hide":"from-box"} method ="POST">
          <label className='form-label'>
            Your Name :
            <br />
            <input
              type="text"
              value={data.name}
              placeholder='Enter Your data...'
              onChange={(e) => { setName(ev => ({ ...ev, name: e.target.value })) }}
              className='form-input' />
          </label>
            
          <br />
          <label className='form-label'>
            Your Gmail :
            <br />
            <input
              type="text"
              value={data.gmail}
              placeholder='Enter Your Gmail...'
              onChange={(e) => { setName(ev => ({ ...ev, gmail: e.target.value })) }}
              className='form-input' />
          </label>
          <br />
          <label className='form-label'>
            Your Password :<span onClick={() => changeL(!isActive)} className='form-link'>Please check here to get password</span>
            <br />
            <input
              type="text"
              value={data.password}
              placeholder='Enter Your Password...'
              onChange={(e) => { setName(ev => ({ ...ev, password: e.target.value })) }}
              className='form-input' />
          </label>
          <br />
          <label className='form-label'>
            Receiver Gmail :
            <br />
            <input
              type="text"
              value={data.tgmail}
              placeholder='Enter Receiver Gmail...'
              onChange={(e) => { setName(ev => ({ ...ev, tgmail: e.target.value })) }}
              className='form-input' />
          </label>
          <br />
          <label className='form-label'>
            Gmail Subject :
            <br />
            <input
              type="text"
              value={data.subject}
              placeholder='Enter Message Subject...'
              onChange={(e) => { setName(ev => ({ ...ev, subject: e.target.value })) }}
              className='form-input' />
          </label>
          <br />
          <label className='form-label'>
            Message content :
            <br />
            <textarea
              rows='10'
              value={data.content}
              className='text-box'
              placeholder='TYPE YOUR MESSAGE HERE....'
              onChange={(e) => { setName(ev => ({ ...ev, content: e.target.value })) }} /></label>
          <br />

          <label className='form-label'>
            Your AGE greater than 18yrs? 
            <input
              type="checkbox"
              checked={data.age}
              onChange={(e) => { setName(ev => ({ ...ev, age: !data.age })) }}
              />
          </label>
          <br />
          <input type="Submit" value="SUBMIT" readOnly className='submit-btn' onClick={handleSubmit} />
          </form>
          
      
          <Toaster
          toastOptions={{
            className: '',
            style: {
              border: '1px solid brown',
              padding: '16px',
              color: 'green',
              borderShadow: '1rem 1rem red',
              textAlign: "center"
            },
          }}
          />
      </div>


      {/* FOR ADMIN SIDE */}


    </div>
  );
}

export default App;