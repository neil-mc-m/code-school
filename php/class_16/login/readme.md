## Login and cookies
- Create an check-auth.php page
- Check the users cookie
- If the cookie ‘authenticated’ is not set then redirect to login.php
'header("Location: ./login.php")'


- Create a login.php page
- Add form with a action of ‘./log-me-in.php’ and a method of post
- Add a input with name “loggedInName” with a label ‘Login in as:’
- Add a submit button
- Create a log-me-in.php page
- Check is the $_POST[‘loggedInName’] is set and is not empty
!empty($_POST[‘loggedInName’] )
isset($_POST[‘loggedInName’] )
- If it is set the cookie ‘authenticated’ to true;
- Set a  session variable name to loggedInName
- And redirect to ‘index.php’
- Otherwise redirect to the login page
- Create an index.php file
- Check if the user is logged in by including the ‘./check-auth.php’ file
- Add header using the session saying “Welcome  $loggedInName”
