function verifyEmail(){
let container = document.getElementById("emailFormContainer");
container.innerHTML = `
<div class="container mt-5 p-4 bg-dark text-white rounded">
<h4>Email Verification</h4>

<p>Please enter your email address to verify your account.</p>

<div class="mb-3">
<input type="email" class="form-control" id="emailInput" placeholder="Enter your email">
</div>

<button class="btn btn-primary" onclick="submitEmail()">Submit</button>
</div>
`;
}

function submitEmail(){
let email = document.getElementById("emailInput").value;

if(email === ""){
alert("Please enter your email.");
return;
}

alert("Verification email sent to " + email);

}