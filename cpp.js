// C++ Questions
if (!window.questionBank) {
  window.questionBank = {};
}

window.questionBank["cpp"] = [
  {
    title: "What is the difference between C and C++?",
    content: "List the key differences between C and C++. Focus on object-oriented features and other enhancements.",
    difficulty: "easy"
  },
  {
    title: "Explain constructors and destructors",
    content: "What are constructors and destructors in C++? Explain different types of constructors with examples.",
    difficulty: "medium"
  },
  {
                    title: "What is virtual function?",
                    content: "Explain virtual functions in C++. How do they enable runtime polymorphism?",
                    difficulty: "medium"
                },
                {
                    title: "Explain STL containers",
                    content: "Describe the main STL containers: vector, list, deque, set, map. When should each be used?",
                    difficulty: "medium"
                },
                {
                    title: "What are smart pointers?",
                    content: "Explain smart pointers in modern C++: unique_ptr, shared_ptr, and weak_ptr. Why are they important?",
                    difficulty: "hard"
                },
                {
      title: "What is C++?",
      content: "C++ is a general-purpose programming language developed as an extension of C, supporting both procedural and object-oriented programming.",
      difficulty: "easy"
    },
    {
      title: "Difference between C and C++",
      content: "C is procedural, while C++ is both procedural and object-oriented. C++ supports classes, inheritance, and polymorphism.",
      difficulty: "easy"
    },
    {
      title: "Write a program to print 'Hello World' in C++",
      content: "Program: Print 'Hello World' on the screen.",
      difficulty: "easy"
    },
    {
      title: "Explain OOP concepts in C++",
      content: "C++ supports Object-Oriented Programming concepts like Encapsulation, Inheritance, Polymorphism, and Abstraction.",
      difficulty: "medium"
    },
    {
      title: "Write a program to check if a number is prime",
      content: "Program: Check whether a given number is prime.",
      difficulty: "easy"
    },
    {
      title: "What is function overloading?",
      content: "Function overloading allows multiple functions with the same name but different parameters in C++.",
      difficulty: "medium"
    },
    {
      title: "Write a program for Fibonacci series",
      content: "Program: Generate the first 10 numbers of the Fibonacci series.",
      difficulty: "easy"
    },
    {
      title: "Explain constructor and destructor in C++",
      content: "A constructor is a special method called when an object is created, while a destructor is called when the object is destroyed.",
      difficulty: "easy"
    },
    {
      title: "Write a program to swap two numbers using pointers",
      content: "Program: Swap two numbers using pointers.",
      difficulty: "easy"
    },
    {
      title: "Explain inheritance in C++",
      content: "Inheritance allows a class to acquire properties and methods of another class. Example: class Derived : public Base {}",
      difficulty: "medium"
    },
     {
      title: "What is polymorphism in C++?",
      content: "Polymorphism is the ability of a function, operator, or object to take different forms. Types: Compile-time (function/operator overloading) and Runtime (virtual functions).",
      difficulty: "medium"
    },
    {
      title: "Write a program to reverse a string",
      content: "Program: Reverse a given string using loops.",
      difficulty: "easy"
    },
    {
      title: "What are templates in C++?",
      content: "Templates allow writing generic functions or classes that can work with any data type. Example: template<class T>.",
      difficulty: "medium"
    },
    {
      title: "Write a program to find factorial of a number",
      content: "Program: Calculate factorial using recursion.",
      difficulty: "easy"
    },
    {
      title: "Explain difference between compile-time and runtime polymorphism",
      content: "Compile-time polymorphism is achieved using function/operator overloading. Runtime polymorphism is achieved using virtual functions.",
      difficulty: "medium"
    },
    {
      title: "Write a program to check whether a string is a palindrome",
      content: "Program: Check if a given string is a palindrome.",
      difficulty: "easy"
    },
    {
      title: "What is the difference between structure and class in C++?",
      content: "In C++, structures have members public by default, while classes have members private by default. Classes also support features like inheritance and encapsulation.",
      difficulty: "easy"
    },
    {
      title: "Write a program to implement a simple calculator",
      content: "Program: Implement a calculator performing +, -, *, / operations.",
      difficulty: "medium"
    },
    {
      title: "What are friend functions in C++?",
      content: "Friend functions are functions declared with the 'friend' keyword that can access private/protected members of a class.",
      difficulty: "medium"
    },
    {
      title: "Write a program to find the largest element in an array",
      content: "Program: Find the largest element from a given array of integers.",
      difficulty: "easy"
    },
    // --- 5 Theory Questions ---
{
  title: "What is Object-Oriented Programming (OOP) in C++?",
  content: "Explain the concept of OOP in C++. What are the four main principles?",
  difficulty: "easy"
},
{
  title: "Difference between class and struct",
  content: "Explain the difference between class and struct in C++.",
  difficulty: "medium"
},
{
  title: "Explain function overloading in C++",
  content: "What is function overloading? How does it work in C++?",
  difficulty: "easy"
},
{
  title: "Explain constructors and destructors",
  content: "What are constructors and destructors in C++? Provide examples.",
  difficulty: "medium"
},
{
  title: "What is the difference between compile-time polymorphism and run-time polymorphism?",
  content: "Explain with examples the difference between compile-time (static) polymorphism and run-time (dynamic) polymorphism.",
  difficulty: "hard"
},

// --- 20 Program-based Questions ---
{
  title: "Program to swap two numbers using class",
  content: "Write a C++ program to swap two numbers using a class and member functions.",
  difficulty: "easy"
},
{
  title: "Program to check prime number",
  content: "Write a C++ program to check whether a number is prime.",
  difficulty: "easy"
},
{
  title: "Program to reverse a number",
  content: "Write a C++ program to reverse a given number.",
  difficulty: "easy"
},
{
  title: "Program to check palindrome",
  content: "Write a C++ program to check whether a number or string is palindrome.",
  difficulty: "medium"
},
{
  title: "Program to find factorial using class",
  content: "Write a C++ program to calculate the factorial of a number using a class.",
  difficulty: "medium"
},
{
  title: "Program for Fibonacci series using recursion",
  content: "Write a C++ program to print Fibonacci series using recursion.",
  difficulty: "medium"
},
{
  title: "Program to demonstrate operator overloading",
  content: "Write a C++ program to overload the '+' operator to add two complex numbers.",
  difficulty: "hard"
},
{
  title: "Program to demonstrate function overloading",
  content: "Write a C++ program to overload a function 'area' for circle, rectangle, and square.",
  difficulty: "medium"
},
{
  title: "Program to implement inheritance",
  content: "Write a C++ program to demonstrate single inheritance with a base and derived class.",
  difficulty: "medium"
},
{
  title: "Program to implement multiple inheritance",
  content: "Write a C++ program to demonstrate multiple inheritance with two base classes and one derived class.",
  difficulty: "medium"
},
{
  title: "Program to implement multilevel inheritance",
  content: "Write a C++ program to demonstrate multilevel inheritance.",
  difficulty: "medium"
},
{
  title: "Program to implement hybrid inheritance",
  content: "Write a C++ program to demonstrate hybrid inheritance.",
  difficulty: "hard"
},
{
  title: "Program to demonstrate virtual functions",
  content: "Write a C++ program to demonstrate runtime polymorphism using virtual functions.",
  difficulty: "hard"
},
{
  title: "Program to demonstrate abstract class",
  content: "Write a C++ program to create an abstract class and implement it in derived classes.",
  difficulty: "hard"
},
{
  title: "Program for array of objects",
  content: "Write a C++ program to create an array of objects and display details.",
  difficulty: "easy"
},
{
  title: "Program to demonstrate friend function",
  content: "Write a C++ program to use a friend function to access private data of a class.",
  difficulty: "medium"
},
{
  title: "Program for file handling (read and write)",
  content: "Write a C++ program to write data to a file and then read it back.",
  difficulty: "medium"
},
{
  title: "Program to find largest element in array",
  content: "Write a C++ program to find the largest element in an array using classes.",
  difficulty: "easy"
},
{
  title: "Program to implement stack using class",
  content: "Write a C++ program to implement stack operations (push, pop, display) using a class.",
  difficulty: "hard"
},
{
  title: "Program to implement queue using class",
  content: "Write a C++ program to implement queue operations (enqueue, dequeue, display) using a class.",
  difficulty: "hard"
},


  // --- BASIC & FUNDAMENTALS ---
  {
    title: "What is C++?",
    content: "Explain what C++ is, its features, and differences from C.",
    difficulty: "easy",
    type: "theory"
  },
  {
    title: "Hello World in C++",
    content: "Write a simple C++ program to print 'Hello, World!' to the console.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "Data Types in C++",
    content: "List and explain fundamental data types in C++ (int, float, double, char, bool).",
    difficulty: "easy",
    type: "theory"
  },
  {
    title: "Variables in C++",
    content: "Explain variable declaration and initialization with examples.",
    difficulty: "easy",
    type: "theory"
  },
  {
    title: "Constants in C++",
    content: "Write C++ code to define constant values using const and #define.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "Operators in C++",
    content: "Explain arithmetic, relational, logical, and assignment operators with examples.",
    difficulty: "easy",
    type: "theory"
  },
  {
    title: "Type Casting",
    content: "Write C++ code demonstrating implicit and explicit type casting.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Input/Output in C++",
    content: "Write a program to take two numbers from user and print their sum using cin and cout.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "Conditional Statements",
    content: "Write C++ code to check if a number is positive, negative, or zero using if-else.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "Switch Statement",
    content: "Write a program to print the day of the week based on an integer using switch-case.",
    difficulty: "medium",
    type: "program"
  },

  // --- LOOPS & FUNCTIONS ---
  {
    title: "For Loop Example",
    content: "Write C++ code to print numbers from 1 to 10 using a for loop.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "While Loop Example",
    content: "Write C++ code to print numbers from 1 to 5 using a while loop.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "Do-While Loop Example",
    content: "Write C++ code to print numbers 1 to 5 using a do-while loop.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "Functions in C++",
    content: "Write a function to calculate the sum of two numbers and call it in main().",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "Function Overloading",
    content: "Explain function overloading in C++ with a code example.",
    difficulty: "medium",
    type: "theory"
  },
  {
    title: "Default Arguments",
    content: "Write C++ code demonstrating the use of default arguments in a function.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Recursion",
    content: "Write a recursive function to calculate factorial of a number.",
    difficulty: "medium",
    type: "program"
  },

  // --- ARRAYS & STRINGS ---
  {
    title: "Arrays in C++",
    content: "Write C++ code to declare an array of 5 integers and display its elements.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "Multidimensional Arrays",
    content: "Write C++ code to create a 2x2 matrix and print its elements.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "String Basics",
    content: "Write C++ code to take a string input and print its length.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "String Concatenation",
    content: "Write C++ code to concatenate two strings.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "String Functions",
    content: "Explain common string functions like length(), substr(), and find() with examples.",
    difficulty: "medium",
    type: "theory"
  },

  // --- POINTERS & MEMORY ---
  {
    title: "Pointers in C++",
    content: "Explain pointers and write code to display address of a variable.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Pointer Arithmetic",
    content: "Write C++ code demonstrating increment and decrement of pointer variables.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Dynamic Memory",
    content: "Write C++ code to allocate and deallocate memory for an integer using new and delete.",
    difficulty: "hard",
    type: "program"
  },
  {
    title: "Pointer to Array",
    content: "Write C++ code using a pointer to traverse an array.",
    difficulty: "medium",
    type: "program"
  },

  // --- OBJECT ORIENTED PROGRAMMING ---
  {
    title: "Classes and Objects",
    content: "Write a C++ class 'Car' with attributes brand and model, create an object and display values.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Constructor in C++",
    content: "Write a class with a parameterized constructor and create an object to initialize data members.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Destructor in C++",
    content: "Write a class with a destructor and display a message when object is destroyed.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Inheritance",
    content: "Write C++ code demonstrating single inheritance.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Multiple Inheritance",
    content: "Explain multiple inheritance in C++ and write a small example.",
    difficulty: "hard",
    type: "program"
  },
  {
    title: "Polymorphism",
    content: "Explain compile-time (function overloading) and run-time (virtual function) polymorphism with examples.",
    difficulty: "hard",
    type: "theory"
  },
  {
    title: "Encapsulation",
    content: "Explain encapsulation in C++ and demonstrate with private members and public getters/setters.",
    difficulty: "medium",
    type: "theory"
  },
  {
    title: "Abstraction & Abstract Classes",
    content: "Explain abstraction in C++ using pure virtual functions with an example.",
    difficulty: "hard",
    type: "theory"
  },

  // --- OPERATOR OVERLOADING & FRIEND FUNCTION ---
  {
    title: "Operator Overloading",
    content: "Write C++ code to overload + operator for a class representing complex numbers.",
    difficulty: "hard",
    type: "program"
  },
  {
    title: "Friend Function",
    content: "Explain friend functions in C++ with a code example.",
    difficulty: "medium",
    type: "program"
  },

  // --- TEMPLATES & STL ---
  {
    title: "Function Templates",
    content: "Write a function template to find the maximum of two values.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Class Templates",
    content: "Write a class template for a generic stack with push and pop methods.",
    difficulty: "hard",
    type: "program"
  },
  {
    title: "Vectors in STL",
    content: "Write C++ code to create a vector of integers, add elements, and display them.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Iterators in STL",
    content: "Write C++ code to traverse a vector using iterators.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Maps in STL",
    content: "Write C++ code to store student names and marks in a map and display them.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Sets in STL",
    content: "Explain set in C++ STL and write code to insert elements and display unique values.",
    difficulty: "medium",
    type: "program"
  },

  // --- FILE HANDLING ---
  {
    title: "File I/O Basics",
    content: "Write C++ code to create a file 'data.txt' and write some text into it.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Read from File",
    content: "Write C++ code to read contents of 'data.txt' and display on console.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Append to File",
    content: "Write C++ code to append text to an existing file.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Binary File I/O",
    content: "Explain how to read and write binary files in C++ with examples.",
    difficulty: "hard",
    type: "theory"
  },
  {
    title: "EOF in File I/O",
    content: "Explain the use of eof() function in file handling with example.",
    difficulty: "medium",
    type: "theory"
  }

  // ... continue with all your C++ questions
];
