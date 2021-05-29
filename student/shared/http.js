import {baseurl} from './baseurl'

export const sendotp=(contactnumber)=>{

      console.log("!send otp");

      var raw={
            "to":"+918076713870"
      };

      var requestOptions = {
            method: 'POST',
            body: JSON.stringify(raw),
            headers: {
                  "Content-Type": "application/json"
            },
            redirect: 'follow'
      };

      console.log(requestOptions.body);
          
      return fetch(baseurl+"sendSMS", requestOptions)
      .then(response => response.text())
      .then(result => {return result})
      .catch(error => console.log('error', error));
}

export const verifyotp=(otp,contactnumber)=>{
      
      console.log("!verify otp");

      var raw={
            "userCode":otp,
            "to":"+918076713870"
      };

      var requestOptions = {
            method: 'POST',
            body: JSON.stringify(raw),
            redirect: 'follow'
      };
      console.log(requestOptions.body);
          
      return fetch(baseurl+"otpVerify", requestOptions)
      .then(response => response.json())
      .then(result => {return result})
      .catch(error => console.log('error', error));
}

export const register = (fname, lname,contactnumber, pass, email, state, city, grade, board)=>{
      
      var raw={
            "userName":email,
            "password":pass,
            "level":"1",
            "phone":contactnumber,
            "class":grade,
            "board":board
      };

      var requestOptions = {
            method: 'POST',
            body: JSON.stringify(raw),
            headers: {
                  "Content-Type": "application/json"
            },
            redirect: 'follow'
      };
      console.log(requestOptions.body);

      return fetch(baseurl+"register", requestOptions)
      .then(response => response.json())
      .then(result => {return result})
      .catch(error => console.log('error', error));
      
} 

export const login = (contactnumber,pass)=>{

      var raw = {
            "userName":contactnumber,
	      "password":pass
      }

      var requestOptions = {
            method: 'POST',
            body: JSON.stringify(raw),
            redirect: 'follow'
      };
      console.log(requestOptions.body);

      return fetch(baseurl+"login", requestOptions)
      .then(response => {
                  if (response.ok) {
                        return response;
                  } 
                  else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                  }
            },
            error => {
                  var errmess = new Error(error.message);
                  throw errmess;
            }
      )
      .then(response => response.json())
      .then(result => {return result})
      .catch(error => { 
            var obj={
                  err:''
            };
            obj.err=error;
            return obj;
      });
}


