/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/


var userarr = JSON.parse(localStorage.getItem("user")) || [];

 function submit(){
   let Name = document.getElementById("user_name").value;
   let Image = document.getElementById("user_pic").value
   let Email = document.getElementById("user_email").value;
   let Country = document.getElementById("user_country").value;


   var userCredential={
     name:Name,
     image:Image,
     email: Email,
     country:Country,
   }
   userarr.push(userCredential);
   console.log(userarr);
   localStorage.setItem("user",JSON.stringify(userarr));
   window.location.href = "worldNews.html";
 }

 

