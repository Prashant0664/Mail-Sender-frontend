import './App.css';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
const rootUrl = 'http://localhost:5000';
function Sender() {

  //  notify = () => toast('Your Mail will be delievered if you have entered all credentials right!');
  
  const [data, setName] = React.useState({
    name: "",
    gmail: "",
    content: "",
    subject: "",
    phone: "",
  })
  
  const handleSubmit = async (e) => {
    // console.log(999);
    e.preventDefault();
    if (!data.name || !data.gmail || !data.subject ||!data.content){
      const notify = () => toast('PLEASE FILL ALL REQUIRED CREDENTIALS');
      notify();
      return};
      
      try {
        const url = `${rootUrl}/api/v1/report`;
        // const url = `/api/v1/auth/login`;
        const res=await fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const notify = () => toast('MAIL SENT SUCCESSFULLY');
      notify();
      } catch (error) {
      const notify = () => toast(error);
      notify();
      console.log(error);
    }
  };
  const isActive=false;
  return (
    <div className="App" >
      <div className="from-box">
        <form className={isActive?"hide":"from-box"} method ="POST">
          <label className='form-label'>
            Your Name :
            <br />
            <input
              type="text"
              value={data.name}
              placeholder='Enter Your data...'
              onChange={(e) => { setName(ev => ({ ...ev, name: e.target.value }))}}
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
            Your PHONE NUMBER :
            <br />
            <input
              type="text"
              value={data.password}
              placeholder='Enter Your Ph.Number...'
              onChange={(e) => { setName(ev => ({ ...ev, phone: e.target.value })) }}
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

    </div>
  );
}

export default Sender;