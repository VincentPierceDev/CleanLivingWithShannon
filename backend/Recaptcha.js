
exports.handler = async (event) => {
    const body = new URLSearchParams(event.body);
    const secretKey = process.env.RECAPTCHA_SECRET_KEY_V3;
    const token = body.get("g-recaptcha-response");
    
    if(!token){
        return {
            statusCode: 400,
            body: JSON.stringify({human: false, error: "Missing token"}),
        };
    }

    const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";

    const response = await fetch(verifyUrl, {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams({
            secret: secretKey,
            response: token,
        }),
    });

    const data = await response.json();

    if(data.success) {
        return {
            statusCode: 200,
            body: JSON.stringify({human: true}),
        };
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify({human: false, errorCodes: data["error-codes"]}),
        };
    }
}
