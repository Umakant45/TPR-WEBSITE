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
}

  // ... continue with all your C++ questions
];
