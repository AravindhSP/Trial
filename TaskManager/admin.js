window.addEventListener("load", function() {
    //console.log("cred");
    document.getElementById("abtn").addEventListener("click", createProject);
});

var pid=0;
function createProject(){
    var pname = document.getElementById("pname").value;
    pid = pid + 1;
    console.log(pname);

    var proj = document.createElement("div");
    proj.setAttribute("class","projects");
    proj.innerHTML = "Project ID: " + pid + " <br> " + "Project name: " + pname;
    
    document.getElementById("plist").appendChild(proj)
    console.log(proj);
}