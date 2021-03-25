/*
   Parse
*/

var obj = JSON.parse(data);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age + ", "+obj.city;

let users = [];

users.push(obj);

/*
   Arrow Function
*/

 hello = () => {return (user.city);}

document.getElementById("prac").innerHTML = hello();

/*
    Moderan Array methods

    we used below  arr.findIndex
*/

let user = users.find(item => item.city == "Chicago");

/*
   Classes
*/

class Person
{
  constructor(personName, birthYear)
 {
    this.personName = name;
    this.birthYear = year;
  }
}

personObj = new Person ("Tony", 2000);

document.getElementById("student").innerHTML = personObj.name + " " + personObj.year;

/*
   Clousres
*/

function moviewFunc()
{
  var movie = 'Scarface';
  function displayName()
  {
  document.getElementById("movie_id").innerHTML = movie;
  }
  return displayName;
}

var my_movie_fun = moviewFunc();
my_movie_fun();
