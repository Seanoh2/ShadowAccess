const tickets = document.getElementsByClassName("zd-comment");
const username = "";
const password = "";

function callback(mutationList) {
    mutationList.forEach((mutation) => {
        var lines = mutation.getElementsByTagName("p");
        for(var line in lines) {
            var usernameReg = new RegExp("Username: [a-zA-Z0-9]*$");
            var passwordReg = new RegExp("Password: [a-zA-Z0-9]*$");

            if(usernameReg.test(line)) {
                username = line.replace("Username: ", "");
                console.log("Username Found: " + username);
            }

            if(passwordReg.test(line)) {
                password = line.replace("Password: ", "");
                console.log("Password Found: " + password)
            }
        }
    });
  }

const observer = new MutationObserver(callback);
observer.observe(tickets, {
    subtree: true,
    childList: true,
});