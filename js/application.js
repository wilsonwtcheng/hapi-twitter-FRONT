$(document).ready(function() { 

  $(document).on('click','.signup-button', function(){
    signupRequest();
  });

  $(document).on('click','.login-button', function(){
    loginRequest();
  });
  
  $(document).on('click','.logout-button', function(){
  logOutRequest();
  });
  
  // $(document).on('click','.listButton', function(){
  //   listRequest();
  // });

  // $(document).on('click','.deleteButton', function(){
  //   deleteRequest();
  // });

//signup request
  function signupRequest() {
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/signup',
      data: {
        userInfo: {
          username:  $('.signup-username').val(),
          email:     $('.signup-email').val(),
          password:  $('.signup-password').val()
        },     
      },
      dataType: "JSON",
      success: function(response) {
        console.log("Great success, user signed up", response);
        $('.signup-username').val("nice");
        $('.signup-email').val("awesome");
        $('.signup-password').val("cool");
        }
    }) 
  }

//login request
  function loginRequest() {
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/login',    
      data: {
        userInfo: {
          username:  $('.login-username').val(),
          password:  $('.login-password').val()
        },
      },   
      dataType: "JSON",
      xhrFields: { //xhrFields is for necessary for cross domain and probably cross ports.
      withCredentials: true 
      },
      success: function(response) {
       console.log("Great success, user logged in.", response);
        $('.login-username').val("nice");
        $('.login-password').val("awesome");
      }
    }) 
  }

//logout request
    
  function logOutRequest() {
    $.ajax({
      type: "DELETE",
      url: 'http://localhost:3000/logout',
      // data: {
      //   userInfo: {
      //   username:  $('.login-username').val(),
      //   password:  $('.login-password').val()
      // },    
      dataType: "JSON",
      // error: function(xhr, textStatus, errorThrown){
      //   alert("Deletion Error!");
      // },
      success: function(response) {
       console.log("Great success, user logged OUT.", response);
      }
     // }
    })
  }

 })
