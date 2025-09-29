// Future features like login system & event upload can go here
console.log("IEEE Website Loaded Successfully!");
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Demo validation
    if(email === "student@smvitm.edu" && password === "1234"){
        // Redirect to index.html (home page)
        window.location.href = "index.html";
    } else {
        document.getElementById("error-msg").innerText = "Invalid email or password!";
    }
});
