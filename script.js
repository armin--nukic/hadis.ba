// Done by Armin

const HadisTekst = document.querySelector(".hadis-paragraf");
const dugmeDodaj = document.querySelector("button");
const authorName = document.querySelector(".author .name");
const dugmeZvuk = document.querySelector(".sound");
const dugmeKopiraj = document.querySelector(".copy");
const dugmePodijeli = document.querySelector(".share");

function randomNoviHadis() {
  dugmeDodaj.classList.add("loading");
  dugmeDodaj.innerHTML = "Loading...";
  // api url
  fetch(
    "https://us-east-1.aws.data.mongodb-api.com/app/application-0-djjur/endpoint/hadisi"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomHadis = data[randomIndex].name;
      const randomAuthor = data[randomIndex].author;
      console.log(randomHadis);
      console.log(randomAuthor);

      HadisTekst.innerText = randomHadis;
      authorName.innerText = randomAuthor;
      dugmeDodaj.innerText = "Novi Hadis";
      dugmeDodaj.classList.remove("loading");
    });
}

dugmeDodaj.addEventListener("click", randomNoviHadis);

// Share dugme

dugmePodijeli.addEventListener("click", (event) => {
  // To check if browser support native share api
  if (navigator.share) {
    navigator
      .share({
        title: "Hadis dana",
        text: HadisTekst.innerText + "--" + authorName.innerText,
      })
      .then(() => console.log("successful share"))
      .catch((error) => console.log("Error sharing", error));
  }
  // fallback
  else {
    alert(
      "The current Browser does not support the share function. please, share link manually"
    );
  }
});

// Zvuk postavljen na bosanski jezik bs-ba

dugmeZvuk.addEventListener("click", () => {
  const textToSpeak = `${HadisTekst.innerText}. : ${authorName.innerText}`;
  const zvuk = new SpeechSynthesisUtterance(textToSpeak);
  zvuk.lang = "bs-BA"; // Set the language to Bosnian (Bosnia and Herzegovina)
  zvuk.pitch = 1.5; // Set the pitch to 1.5 for more natural intonation
  zvuk.rate = 0.8; // Set the rate to 0.8 for a slightly slower, more natural pace
  zvuk.volume = 1.0; // Set the volume to 1.0
  speechSynthesis.speak(zvuk);
});

// kopiranje

dugmeKopiraj.addEventListener("click", () => {
  navigator.clipboard.writeText(
    HadisTekst.innerText + " __ " + authorName.innerText
  );

  alert("Hadis je kopiran u clipboard");
});

// Get the buttons
const instagramButton = document.getElementById("instagram-share");
const facebookButton = document.getElementById("facebook-share");
const twitterButton = document.getElementById("twitter-share");
const messengerButton = document.getElementById("messenger-share");
const emailButton = document.getElementById("email-share");

// Function to share on Instagram
function shareOnInstagram() {
  navigator.share({
    text: HadisTekst.innerText + " -- " + authorName.innerText,
    url: "https://novihadis.com",
  });
}

// Function to share on Facebook
function shareOnFacebook() {
  navigator.share({
    text: HadisTekst.innerText + " -- " + authorName.innerText,
    url: "https://novihadis.com",
  });
}

// Function to share on Twitter
function shareOnTwitter() {
  navigator.share({
    text: HadisTekst.innerText + " -- " + authorName.innerText,
    url: "https://novihadis.com",
  });
}

// Function to share on Messenger
function shareOnMessenger() {
  navigator.share({
    text: HadisTekst.innerText + " -- " + authorName.innerText,
    url: "https://novihadis.com",
  });
}

// Function to share via Email
function shareViaEmail() {
  navigator.share({
    subject: "Hadis dana",
    text: HadisTekst.innerText + " -- " + authorName.innerText,
  });
}

// Add event listeners to the buttons
instagramButton.addEventListener("click", shareOnInstagram);
facebookButton.addEventListener("click", shareOnFacebook);
twitterButton.addEventListener("click", shareOnTwitter);
messengerButton.addEventListener("click", shareOnMessenger);
emailButton.addEventListener("click", shareViaEmail);
