// Assignment code here
//Declare variable storing all uppercase letters
//Declare variable storing all lowercase letters
//Declare variable storing all numbers
//Declare variable storing all special characters
//Define an empty character set to use for later

function generatePassword(){
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialChar = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
  var charactersSet = " ";

  //setting variables for users choices, variables will later return false or true
  
  var willLowercase;
  var willUppercase;
  var willNumbers;
  var willSpecial;


  //Prompts for password generation give user criteria for the following:
  //Ask user to select a password length between 8 and 128 characters, 
  
  //Ask if user wants lowercase letters in their password, confirm
  //Ask if users want uppercase in their password, confirm
  //Ask if user wants numbers in their password, confirm 
  //Ask if user wants special characters in their password. confirm
  
  //Then alerting with the users choice after each of the four prompts are completed.
  
  //Storing the the result into our variables for user choices.
  var passLength = prompt("Pick a password length of at least 8 characters and no more than 128 characters");

      while(passLength < 8 || passLength > 128){
        alert("Password length must be between 8 and 128 characters, try again.");

        var passLength = prompt("Pick a password length of at least 8 characters and no more than 128 characters");
      }

        alert("Your password will have " + passLength + " characters");


    var willLowercase = confirm("Include lowercase letters in your password?");
        
          if(willLowercase === true){
            alert("Your password will include lowercase letters");
          
           }
           else if(willLowercase === false){
            alert("Your password will not include lowercase letters");
          
           }


    var willUppercase = confirm("Include uppercase letters in your password?");
    
    
          if(willUppercase === true){
           alert("Your password will include uppercase letters");

           }
          else if(willUppercase === false){
           alert("Your password will not include uppercase letters");


          }

    var willNumbers = confirm("Include numbers in your password?");
    
    
          if(willNumbers === true){
           alert("Your password will include numbers");


           }
          else if(willNumbers === false){
           alert("Your password will not include numbers");


          }

    var willSpecial = confirm("Include special characters in your password?");
          
          if(willSpecial === true){
            alert("Your password will include special characters");


            }
          else if(willSpecial === false){
            alert("Your password will not include special characters");


          }

      //fill our characterSet with the criterized characters they want in their password,
      // checking each criteria to add to our characterSet.

          if(willLowercase === true){
             charactersSet+=lowerCase;
          }
          if(willUppercase === true){
             charactersSet+=upperCase;
          }
          if(willNumbers === true){
             charactersSet+=numbers;
          }
          if(willSpecial === true){
             charactersSet+=specialChar;
          }

        console.log(charactersSet.toString());


        var generatedPassword = "";
      //Set a for loop to randomly select characters from our characterset to fill a generated password.
      for (var i = 0; i < passLength; i++) {
        generatedPassword = generatedPassword + charactersSet.charAt(Math.floor(Math.random() * charactersSet.length));
        console.log(generatedPassword);
      }
      
          return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
