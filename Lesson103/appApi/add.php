<?php 
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if(isset($_POST['title']) && isset($_POST['content'])  ){
        $username = "root";
        $password = "";
        $database = new  PDO("mysql:host=localhost; dbname=codershiyar;charset=utf8;",$username,$password);

        $addData = $database->prepare("INSERT INTO post(content,title) VALUES(:content,:title)");
        $addData->bindParam("content",$_POST['content']);
        $addData->bindParam("title",$_POST['title']);
        $addData->execute();
        print_r(json_encode(array("message"=>"تم اضافة بيانات بنجاح")));
    }
?>