# Password Generator Starter Code

User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security



Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


## 📝 Notes

Thesis/Motivation:

    Our motivation was to create a function called generatePassword that would generate a random
    password for a user. The user will have the choices to specify the length of the password from 8 - 128 characters,
    whether to include lowercase or uppercase letters, numbers, or special characters. This would have involved us using multiple lines of code: 
    
    
How we accomplished this:


    This would have involved us using multiple lines of code: 
Using
Pseudocode: 

//Declare variable storing all uppercase letters
//Declare variable storing all lowercase letters
//Declare variable storing all numbers
//Declare variable storing all special characters
//Define an empty character set to use for later

//setting variables for users choices, variables will later return false or true

  //Prompts for password generation give user criteria for the following:
  //Ask user to select a password length between 8 and 128 characters, 
  
  //Ask if user wants lowercase letters in their password, confirm
  //Ask if users want uppercase in their password, confirm
  //Ask if user wants numbers in their password, confirm 
  //Ask if user wants special characters in their password. confirm
  
  //Then alerting with the users choice after each of the four prompts are completed.
  
  //Storing the the result into our variables for user choices.


  //fill our characterSet with the criterized characters they want in their password,
  //checking each criteria to add to our characterSet.

  //Set a for loop to randomly select characters from our characterset to fill a generated password.


  //return generated password


