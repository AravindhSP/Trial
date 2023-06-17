window.addEventListener("load", function() {
    //console.log("cred");
    document.getElementById("abtn").addEventListener("click", createtask);
});

var pid=0;
function createtask(){
    var pname = document.getElementById("pname").value;
    pid = pid + 1;
    //console.log(pname);

    var proj = document.createElement("div");
    proj.setAttribute("class","tasks");
    proj.innerHTML = "Task ID: " + pid + " <br> " + "Task name: " + pname;
    
    document.getElementById("plist").appendChild(proj)
    //console.log(proj);

    managerActions();
}

function managerActions(){
    var ma = document.getElementById("mactions");
    document.getElementsByClassName("tasks")[0].appendChild(ma);
    document.getElementById("mactions").style.display="block";
    console.log(ma);
}

function finish(){
    var assign = document.getElementById("assign").value;
    var review = document.getElementById("review").value;
    var status = document.getElementById("status").value;

    window.alert("Changes have been made successfully!\nAssigned to: " + assign + "\nReview status: "+ review + "\nTask status: " + status)
}