function getStudents(){
    fetch('https://trainingapi-3wic.onrender.com/students')
      .then(response => response.json())
      .then(json => {
        var users=document.getElementById("select_users");
        json.forEach(element => {
          var _opt=document.createElement("option");
          _opt.innerHTML=element.name;
          users.appendChild(_opt)
  
          
        });
       
 } )
}

getStudents();