const tickets = document.getElementsByClassName("zd-comment");
const accountID = "";
const username = "";

function callback(mutationList) {
    mutationList.forEach((mutation) => {
        var lines = mutation.getElementsByTagName("p");
        for(var line in lines) {
            var accountIDReg = new RegExp("AccountID: [a-zA-Z0-9]*$");
            var usernameReg = new RegExp("Username: [a-zA-Z0-9]*$");

            if(accountIDReg.test(line)) {
                accountID = line.replace("Account ID: ", "");
                console.log("Account ID Found: " + accountID);
            }

            if(usernameReg.test(line)) {
                username = line.replace("accountID: ", "");
                console.log("accountID Found: " + username)
            }
        }
    });
  }

const observer = new MutationObserver(callback);
observer.observe(tickets, {
    subtree: true,
    childList: true,
});