// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const colorStates = 'red'

// Your JavaScript code goes here!

//Grab the heart buttons 
let hearts = document.querySelectorAll(".like-glyph")

//Add events to them
function likeCallBack(e){
  const heart = e.target;
  mimicServerCall()
  .then(function(serverMessage){
    //Send an alert if sending of the data is successful
    alert("You notified the server!");
    alert(serverMessage);
    //Makes it a full heart
    heart.innerText = FULL_HEART;
    //Makes the heart red
    heart.style.color = colorStates;
  })
  .catch(function(error){
    alert("Something went wrong!");
  });
}

for (const addHearts of hearts)(
  addHearts.addEventListener("click", likeCallBack)
)



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
