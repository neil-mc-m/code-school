### Mysql
- The database we are using to back our website
- It can store any relevant data we want to 'persist' between user requests to our site
- We use php to connect to the database and perform any actions we need to on the data
- Mysql uses tables to store the data, arranged by named columns
- The data itself is stored in rows, with each piece of data in its column e.g

![Screenshot 2023-02-16 at 14.32.50.png](Screenshot%202023-02-16%20at%2014.32.50.png)


- Each row should be unique, and will usually have an identifier (a named column, `id`, is the convention)
- This id column is usually set to auto-increment, which means that we can insert new records in a table and let the database assign an identifier to it.
- We have full control of creating the tables and naming the columns
- There are 4 main operations we can do with our data

```
- SELECT
- INSERT
- UPDATE
- DELETE
```

### PHPmyadmin

- phpmyadmin gives us a view of the database where we can perform various actions on the database (there are other clients)
- As a starting point, we can create a database and create data tables within the database from the phpmyadmin interface
- We can also export the database (or just the tables) in the form of a SQL file. (This is called a database dump)
- All sql files are identified by the `.sql` file extension
- This file can then be loaded back into the phpmyadmin SQL tab and ran again, which will recreate the database to the point from when it was exported.
- We can also add user accounts to the database via phpmyadmin, and assign a username and password for them
- This username/password can then be used in our PHP code to 'login' to the database and perform the actions we want.
- We can also add columns, and alter the tables from phpmyadmin as we need to.