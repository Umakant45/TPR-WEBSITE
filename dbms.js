if (!window.questionBank) {
  window.questionBank = {};
}

window.questionBank["dbms"] = [
     {
                    title: "What is database normalization?",
                    content: "Explain database normalization. Describe 1NF, 2NF, 3NF, and BCNF with examples.",
                    difficulty: "medium"
                },
                {
                    title: "Explain ACID properties",
                    content: "What are ACID properties in database transactions? Explain Atomicity, Consistency, Isolation, and Durability.",
                    difficulty: "medium"
                },
                {
                    title: "Write a SQL query to find second highest salary",
                    content: "Write a SQL query to find the employee with the second highest salary from an Employee table.",
                    difficulty: "medium"
                },
                {
                    title: "What are database indexes?",
                    content: "Explain database indexes. What are the different types of indexes and when should they be used?",
                    difficulty: "easy"
                },
                {
                    title: "Explain different types of joins",
                    content: "Describe different types of SQL joins: INNER, LEFT, RIGHT, FULL OUTER, and CROSS join with examples.",
                    difficulty: "medium"
                },
                    {
      title: "What is DBMS?",
      content: "DBMS (Database Management System) is software used to store, manage, and retrieve data efficiently, providing security and consistency.",
      difficulty: "easy"
    },
    {
      title: "Explain difference between DBMS and RDBMS",
      content: "DBMS stores data as files, while RDBMS stores data in tables with relationships. RDBMS supports normalization, keys, and SQL.",
      difficulty: "easy"
    },
    {
      title: "Write an SQL query to fetch all records from the 'students' table",
      content: "Query: Retrieve all columns and rows from the 'students' table.",
      difficulty: "easy"
    },
    {
      title: "What is normalization in DBMS?",
      content: "Normalization is the process of organizing data into tables to reduce redundancy and improve data integrity.",
      difficulty: "medium"
    },
    {
      title: "Write an SQL query to find the highest salary from the 'employees' table",
      content: "Query: Retrieve the maximum salary value from the 'employees' table.",
      difficulty: "easy"
    },
    {
      title: "What are the different types of keys in DBMS?",
      content: "Primary Key, Foreign Key, Candidate Key, Composite Key, and Unique Key.",
      difficulty: "medium"
    },
    {
      title: "Write an SQL query to count number of students in 'class10' table",
      content: "Query: Count total rows in 'class10' table.",
      difficulty: "easy"
    },
    {
      title: "Explain ACID properties in DBMS",
      content: "ACID stands for Atomicity, Consistency, Isolation, and Durability. These ensure reliable transactions.",
      difficulty: "medium"
    },
    {
      title: "Write an SQL query to display employees whose salary is greater than 50,000",
      content: "Query: Retrieve employee details with salary > 50000.",
      difficulty: "easy"
    },
    {
      title: "What is a view in SQL?",
      content: "A view is a virtual table created using a SQL query. It does not store data itself but fetches it from base tables.",
      difficulty: "medium"
    },
     {
      title: "What is a primary key?",
      content: "A primary key is a unique identifier for each record in a table. It cannot have NULL values and must be unique.",
      difficulty: "easy"
    },
    {
      title: "What is a foreign key?",
      content: "A foreign key is a field in one table that refers to the primary key in another table, establishing a relationship between them.",
      difficulty: "easy"
    },
    {
      title: "Write an SQL query to find the average marks from 'students' table",
      content: "Query: Calculate average marks of all students.",
      difficulty: "easy"
    },
    {
      title: "Explain difference between DELETE and TRUNCATE",
      content: "DELETE removes rows one by one and can have a WHERE clause. TRUNCATE removes all rows quickly without logging individual row deletions.",
      difficulty: "medium"
    },
    {
      title: "Write an SQL query to display the second highest salary from 'employees'",
      content: "Query: Find the second maximum salary in employees table.",
      difficulty: "medium"
    },
    {
      title: "What is a transaction in DBMS?",
      content: "A transaction is a sequence of operations performed as a single logical unit of work that must satisfy ACID properties.",
      difficulty: "medium"
    },
    {
      title: "Write an SQL query to show employees working in 'IT' department",
      content: "Query: Retrieve employee records where department = 'IT'.",
      difficulty: "easy"
    },
    {
      title: "What is denormalization?",
      content: "Denormalization is the process of introducing redundancy into a table to improve read performance by reducing joins.",
      difficulty: "medium"
    },
    {
      title: "Write an SQL query to update salary by 10% for all employees",
      content: "Query: Increase salary of every employee by 10%.",
      difficulty: "easy"
    },
    {
      title: "Explain difference between clustered and non-clustered indexes",
      content: "Clustered index defines the physical order of data in a table, while non-clustered index creates a separate structure pointing to data.",
      difficulty: "medium"
    },
    // --- 5 Theory Questions ---
{
  title: "What is DBMS?",
  content: "Explain what a Database Management System (DBMS) is. Mention its advantages over traditional file systems.",
  difficulty: "easy"
},
{
  title: "What is the difference between SQL and NoSQL databases?",
  content: "Explain SQL vs NoSQL databases with examples. When should each be used?",
  difficulty: "medium"
},
{
  title: "Explain normalization and its types",
  content: "What is normalization in DBMS? Explain 1NF, 2NF, 3NF, and BCNF with examples.",
  difficulty: "hard"
},
{
  title: "What are ACID properties?",
  content: "Describe ACID properties in DBMS. Why are they important for transactions?",
  difficulty: "medium"
},
{
  title: "Difference between primary key, foreign key, and unique key",
  content: "Explain with examples the difference between primary key, foreign key, and unique key.",
  difficulty: "easy"
},

// --- 20 Practical/Query Questions ---
{
  title: "Create a student table",
  content: "Write an SQL query to create a table Student with fields: id (int, primary key), name (varchar), age (int), and course (varchar).",
  difficulty: "easy"
},
{
  title: "Insert data into student table",
  content: "Write an SQL query to insert 3 student records into the Student table.",
  difficulty: "easy"
},
{
  title: "Select all students",
  content: "Write an SQL query to fetch all records from the Student table.",
  difficulty: "easy"
},
{
  title: "Find students older than 20",
  content: "Write an SQL query to get the names of students whose age is greater than 20.",
  difficulty: "easy"
},
{
  title: "Update student record",
  content: "Write an SQL query to update the course of a student with id = 2 to 'DBMS'.",
  difficulty: "easy"
},
{
  title: "Delete a student record",
  content: "Write an SQL query to delete the student whose id = 3.",
  difficulty: "easy"
},
{
  title: "Count total students",
  content: "Write an SQL query to count the total number of students in the Student table.",
  difficulty: "easy"
},
{
  title: "Find distinct courses",
  content: "Write an SQL query to display all distinct courses in the Student table.",
  difficulty: "easy"
},
{
  title: "Sort students by age",
  content: "Write an SQL query to display students sorted by age in descending order.",
  difficulty: "medium"
},
{
  title: "Join two tables",
  content: "Suppose there are two tables: Student(id, name) and Marks(student_id, score). Write an SQL query to display student names with their scores using INNER JOIN.",
  difficulty: "medium"
},
{
  title: "Group students by course",
  content: "Write an SQL query to count the number of students in each course.",
  difficulty: "medium"
},
{
  title: "Find max and min marks",
  content: "Write an SQL query to find the highest and lowest scores from the Marks table.",
  difficulty: "easy"
},
{
  title: "Subquery example",
  content: "Write an SQL query to find the names of students who scored above the average score.",
  difficulty: "hard"
},
{
  title: "Like operator usage",
  content: "Write an SQL query to find students whose name starts with 'A'.",
  difficulty: "easy"
},
{
  title: "Between operator usage",
  content: "Write an SQL query to find students whose age is between 18 and 25.",
  difficulty: "easy"
},
{
  title: "Union example",
  content: "Write an SQL query using UNION to combine student names from two different tables: Student and Alumni.",
  difficulty: "medium"
},
{
  title: "Find students with no marks",
  content: "Write an SQL query using LEFT JOIN to find students who don’t have any entry in the Marks table.",
  difficulty: "medium"
},
{
  title: "Delete all students from a course",
  content: "Write an SQL query to delete all students enrolled in the 'CSE' course.",
  difficulty: "medium"
},
{
  title: "Alter table",
  content: "Write an SQL query to add a new column 'email' (varchar) to the Student table.",
  difficulty: "easy"
},
{
  title: "Drop table",
  content: "Write an SQL query to drop the Student table permanently.",
  difficulty: "medium"
}


];