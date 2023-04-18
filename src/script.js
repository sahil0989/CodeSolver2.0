// Talk function

function talk() {
    var know = {
        "Who are you": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quos. Magni, nesciunt maxime obcaecati dicta vitae tenetur quaerat dolorem pariatur totam maiores illo quia ducimus? Impedit officiis asperiores eligendi hic quos accusamus culpa laborum ducimus saepe magni, eum mollitia exercitationem est sunt omnis quasi, pariatur enim quis, in ullam vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quos. Magni, nesciunt maxime obcaecati dicta vitae tenetur quaerat dolorem pariatur totam maiores illo quia ducimus? Impedit officiis asperiores eligendi hic quos accusamus culpa laborum ducimus saepe magni, eum mollitia exercitationem est sunt omnis quasi, pariatur enim quis, in ullam vero.",
        "first 10 prime numbers in python": "r = 30 \nfor a range(2,r+1):\n\tk = 0\n\tfor i in range(2,a//2+1):\n\t\tif(a%i == 0) :\n\t\t\tk = k+1\n\t\tif(k <= 0): \n\t\t\tprint(a,end=' ')",
        "How are you": "Good :)",
        "What can i do for you": "Please Give us A Follow & Like.",
        "Your followers": "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
        "ok": "Thank You So Much ",
        "Bye": "Okay! Will meet soon.."
    };
    var user = document.getElementById('my-text').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
        // document.getElementById("body").style.paddingTop = "10rem";
        // document.getElementById("glass").style.height = "620px";
        // document.getElementById("glass1").style.height = "620px";
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
}

let dropdown = document.querySelector(".dropdown");
function myFunction() {
    dropdown.classList.toggle("dropdown_open");
}