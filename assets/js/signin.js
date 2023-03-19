const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const signInWithGoogleButton = document.getElementById('signInWithGoogle');

const auth = firebase.auth();

async function signInWithGoogle(){
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  // const user = auth.signInWithPopup(googleProvider)
  // .then(() => {
  //   console.log("already login");
  //   console.log(user);
  //   // createUser();
  // })
  // .catch(error =>{
  //   console.log(error);
  // })
  const user = await firebase.auth().signInWithPopup(googleProvider);
  console.log(user);

  firebase.firestore().collection("Users").add({
     email: user.user.email,
     name: user.user.displayName,
  });

  location.replace('/index.html');
};


signInWithGoogleButton.addEventListener('click', signInWithGoogle);

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function redirectToPage() {
  window.location.href = "\\My Dashboard _ Courses\\home.html"; // replace with the URL of the page you want to redirect to
}


//Signin-signout
// const signin_signout = document.querySelector("#singin_signout");
// if(user){
//   signin_signout.innerHTML=`<a href="/signin.html" class="btn head-btn1">Log Out</a>`
// }

// else{
//   signin_signout.innerHTML = `<a href="/signin.html" class="btn head-btn1">Sign In</a>`;
// }
