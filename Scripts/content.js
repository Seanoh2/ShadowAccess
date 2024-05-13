console.log("Testing")
const tickets = document.getElementsByClassName("zd-comment");

const observer = new MutationObserver();
observer.observe(tickets, {
    subtree: true,
    childList: true,
});