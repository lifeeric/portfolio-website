const emailjs = require("emailjs-com")


    // sending email
   
 emailjs
      .send(
        "gmail",
        "template_LfsIaoDa",
        {
          from_name: "hie",
          from_email: "HI",
          message_body: "HI",
        },
        "user_GjmR8C0Fpz2Prc1YNGjbG"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text)
        },
        function (error) {
          console.log("FAILED...", error)
        }
      );
