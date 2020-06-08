function sendMail(contactForm) {
    emailjs.send("gmail", "socialplanner", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "enquiry": contactForm.enquiry.value
        }, "user_HpPKniLYt3c7dOkeEPlFs")
        .then(function(response) {
                console.log("success", response);
            },
            function(error) {
                console.log("failed", error);
            });
    return false;
}