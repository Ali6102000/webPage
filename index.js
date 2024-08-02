function getStudents(){
    fetch('https://trainingapi-3wic.onrender.com/students')
      .then(response => response.json())
      .then(json => console.log(json))
}

getStudents();