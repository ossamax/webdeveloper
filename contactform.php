<?php

$message_sent = false ;
if(isset($_POST["submit"])){

    if($_POST["name"] != "" && $_POST["email"] != ""  && $_POST["subject"] != "" && $_POST["message"] != ""){
        
        if(filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
            $name = $_POST["name"];
            $emailFrom = $_POST["email"];
            $subject = $_POST["subject"];
            $message = $_POST["message"];

            $mailTo = "devlopossama01@gmail.com";
            $header ="From :";
            $header .= $emailFrom;
            $txt = "You have received an email from ".$name."\n\n".$message;

            mail($mailTo, $subject, $txt, $header);

            $message_sent = true ;
        }
     

    }

};
if($message_sent){
    echo '<script type="text/javascript">';
    echo ' alert("JavaScript Alert Box by PHP")';  //not showing an alert box.
    echo '</script>';
};

?>
