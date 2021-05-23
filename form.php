<?php

$server = "localhost";
$Username = "root";
$password = "";
$dbname = "user-info";

$conn = mysqli_connect($server , $Username , $password , $dbname);

if(isset($_POST['submit'])){
    if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['phone']) && !empty($_POST['feedback'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $feedback = $_POST['feedback'];

        $query = "insert into user(name,email,phone,feedback) values('$name' , '$email' , '$phone' ,'$feedback')";

        $run = mysqli_query($conn,$query) or die(mysqli_error());

        if($run){
            
            echo "
                <h1>Submitted Successfully</h1>
                  <script>
                    window.history.go(-1); 
                    location.reload();
                  </script>";
        }
        else{
            echo "<script>
                        window.history.go(-1);
                        alert('Form not submitted'); 
                  </script>";
            }
    }
    else{
        echo "<script>
                        window.history.go(-1);
                        alert('All fields are required'); 
                  </script>";
    }

}

?>