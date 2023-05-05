const tweetContent = document.querySelector(".tweet-text-content");
const twButton = document.querySelector(".tweet-btn");

const addTweet = document.getElementById("addTweet");
const tweets = document.querySelector(".tweets");

// Listen for keyup event on the tweetContent input field
tweetContent.onkeyup = () => {
  // If the input field is empty, disable the twButton
  if (tweetContent.value === "") {
    twButton.disabled = true;
  } else {
    // If the input field has text, enable the twButton
    twButton.disabled = false;
  }
};


  let newTweetContent = document.createElement("div");

// This function will be executed when the form is submitted
addTweet.onsubmit = (e) => {
  // Prevent the form from submitting and refreshing the page
  e.preventDefault();

  // Create a new list item representing a tweet
  newTweetContent.innerHTML = `
    <li class="tweet">
      <div class="user-details">
        <div class="user-img"></div>
        <div class="tweet-detail">
          <div class="user">
            <span class="user-name">KimmyHed</span>
            <span class="user-handel">@KimmyHed69420</span>
            <span class="tweet-age">. 4h</span>
          </div>
          <input
            type="text"
            class="tweet-text-content"
            value="${tweetContent.value}"
            readonly
          />
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
      </div>
      <div class="interactions">
        <small class="interection"
          ><i class="fa-solid fa-comment"></i> <span>0</span></small
        >
        <small class="interection"
          ><i class="fa-solid fa-retweet"></i><span>0</span></small
        >
        <small class="interection"
          ><i class="fa-regular fa-heart"></i><span>0</span></small
        >
        <small class="interection"
          ><i class="fa-solid fa-upload"></i
        ></small>
      </div>
    </li>`;

  // Reset the tweet text input field
  tweetContent.value = "";

  // Disable the tweet button
  twButton.disabled = true;

  // Append the new tweet to the list of tweets
  tweets.appendChild(newTweetContent);
};


// Make tweet editable

// When the mouse enters the "tweets" element:
tweets.onmouseenter = () => {
  // Log "Tweets" to the console
  console.log("Tweets");

  // For each element with class "fa-pen-to-square":
  document.querySelectorAll(".fa-pen-to-square").forEach(
    // Set an onclick function:
    (edit) =>
      (edit.onclick = (e) => {
        // Get the element before the clicked element
        let text = e.target.previousElementSibling;

        // If the clicked element has class "fa-pen-to-square":
        if (e.target.classList.contains("fa-pen-to-square")) {
          // Replace "fa-pen-to-square" with "fa-circle-check"
          e.target.classList.replace("fa-pen-to-square", "fa-circle-check");
          // Make the previous element editable and change its color to light gray
          text.readOnly = false;
          text.style.color = "var(--lightGray)";
        } else {
          // Replace "fa-circle-check" with "fa-pen-to-square"
          e.target.classList.replace("fa-circle-check", "fa-pen-to-square");
          // Make the previous element read-only and reset its color to its initial value
          text.readOnly = true;
          text.style.color = "initial";
        }
      })
  );
};
