
function recaptchaSuccess(token) {
    fetch('/.netlify/functions/', {
        method: 'POST',
        headers: {
            'Content-type' : 'application/x-www-form-urlencoded',
        },
        body: `g-recaptcha-response=${token}`,
    })
    .then(res => res.json())
    .then(data => {
        if(data.human) {
            window.dispatchEvent(new Event("recaptcha-verified-success"))
        }
    })
}