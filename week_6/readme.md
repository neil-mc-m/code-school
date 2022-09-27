## php navbar
- Create a header.php file.
- Create an array of links
- Use Associative Arrays e.g. $ages = array("Peter" => "35", "Ben" => "37", "Joe" => "43");
- Generate a nav HTML using the array and the link address and names
- Create an index.php
- Create a typical HTML structure
- Import the header.php file as the header of the page “Include”


- now create a folder called includes and move all your included files into it. Dont forget t update your links to reflect teh new file location e.g. includes/header.php

## form
- add a form with an action of ‘./signup.php’.
- Ask the user to enter their first name, surname and mobile number
- Add a button that will submit the form via a post method request to ‘./signup.php’
### part 2
- Create a signup.php page
- print a header welcoming the user using their name  e.g. “Welcome John Smith”
- Add a paragraph stating the users contact number.

## PHP

- variables: always start with `$`
- loops : `foreach`
- if/else : same as javascript
### forms: 
`<form action="" method=""></form>`
- method will be either `get` or `post`

### includes
- `include 'includes/my-include-file.php`
- used to prevent duplication as they can be used across multiple pages that require the same content
