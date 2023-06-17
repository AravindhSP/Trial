var cred = {
    admin: {
        uname: "admin",
        pwd: "admin",
    },
    manager: {
        uname: "manager",
        pwd: "manager",
    },
    developer: {
        uname: "developer",
        pwd: "developer",
    }
}

window.addEventListener("load", function() {
    console.log(cred);
    document.getElementById("btn").addEventListener("click", login);
});

function login(){
    var iuname = document.getElementById("uname").value;
    var ipwd = document.getElementById("pwd").value;

    //console.log(iuname, ipwd);

    if(iuname==cred.admin.uname && ipwd==cred.admin.pwd){
        window.location.href = "https://aravindhsp.github.io/CodeTest/Latest/Admin.html";
    } else if(iuname==cred.manager.uname && ipwd==cred.manager.pwd){
        console.log(window.location.href);
        console.log("Manager");
        window.location.href = "https://aravindhsp.github.io/CodeTest/Latest/Manager.html";
    } else if(iuname==cred.developer.uname && ipwd==cred.developer.pwd){
        console.log("Developer");
        window.location.href = "https://aravindhsp.github.io/CodeTest/Latest/Developer.html";
    } else {
        console.log("Incorrect credentials!");
        alert("Page not found!")
    }
}
