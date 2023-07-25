 

                function madhan(){

                    let name=document.forms["myform"]["name"].value;
                    let pass=document.forms["myform"]["password"].value;
                    let confirm=document.forms["myform"]["Rpassword"].value;

                   if(name==""){
                   document.getElementById("demo").innerHTML="Enter your name";
                   }
                   
                   else if(name.length<6){
                    document.getElementById("demo").innerHTML="atleast 6 character"
                   }

                   else if(pass==""){
                   document.getElementById("demo1").innerHTML="Enter password must";
                   }
                    else if(confirm==""){
                   document.getElementById("demo2").innerHTML="Enter confirm password";
                   }

                   else if(pass!=confirm){
                    document.getElementById("demo2").innerHTML="Please enter correct password";

                   }
                   else{
                    alert(name+" "+"your account created");
                   }


                    return false;
                }






              