window.addEventListener("load", function() {
    console.log("cred");
    document.getElementById("statuschange").addEventListener("change", status);
});


function status(){
    var pstatus = document.getElementById("statuschange").value;
    
    console.log(pstatus);
    document.getElementById("status").innerHTML = pstatus;
    
    
    /*pid = pid + 1;
    console.log(pname);

    var proj = document.createElement("div");
    proj.setAttribute("class","projects");
    proj.innerHTML = "Project ID: " + pid + " <br> " + "Project name: " + pname;
    
    document.getElementById("plist").appendChild(proj)
    console.log(proj); */
}