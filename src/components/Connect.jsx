import React, { useState } from 'react';

function Connect() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
    setEmail('');
  };
  return (
    <div id='connect' className="container-fluid bg-two ps-5 pt-5 pb-5">
      <p className="topicStyles text-light ps-5">Connect</p>
      <h1 className="text-light mb-4 pb-1 ps-5">Interested in working with me or perhaps just talk?</h1>
      <form className="form ps-5">
        <div className="mb-3">
          <label htmlFor="emailField" className="form-label text-light">Email address:</label>
          <input
            id='emailField'
            value={email}
            name="email"
            className="form-control"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nameField" className="form-label text-light">Enter your name:</label>
          <input
            id='nameField'
            value={userName}
            name="userName"
            onChange={handleInputChange}
            className="form-control"
            type="text"
            placeholder="username"
          />
        </div>


        <div className="mb-3">
          <label htmlFor="textArea" className="form-label text-light">How can I help you?</label>
          <textarea 
          className="form-control" 
          id="textArea" 
          rows="3"   
          value={password}
          name="password"
          onChange={handleInputChange}  
          type="password"
          placeholder="Password"></textarea>
        </div>
        <button type="button" className='btn btn-primary me-2 mt-4' onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Connect;