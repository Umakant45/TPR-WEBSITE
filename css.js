if (!window.questionBank) {
  window.questionBank = {};
}

window.questionBank["css"] = [

                {
                    title: "What is the CSS box model?",
                    content: "Explain the CSS box model. Describe content, padding, border, and margin with examples.",
                    difficulty: "easy"
                },
                {
                    title: "Difference between flexbox and grid",
                    content: "What are the differences between CSS Flexbox and CSS Grid? When should you use each?",
                    difficulty: "medium"
                },
                {
                    title: "What are CSS selectors?",
                    content: "Explain different types of CSS selectors: element, class, id, attribute, pseudo-class, and pseudo-element selectors.",
                    difficulty: "easy"
                },
                {
                    title: "Explain CSS positioning",
                    content: "Describe different CSS position properties: static, relative, absolute, fixed, and sticky.",
                    difficulty: "medium"
                },
                {
                    title: "What are CSS animations?",
                    content: "How do you create animations in CSS? Explain @keyframes, transition, and animation properties.",
                    difficulty: "hard"
                },
                 {
      title: "What is CSS?",
      content: "CSS (Cascading Style Sheets) is used to style and layout HTML elements, including colors, fonts, and positioning.",
      difficulty: "easy"
    },
    {
      title: "What are the different types of CSS?",
      content: "Inline CSS, Internal CSS, and External CSS are the three types used for styling web pages.",
      difficulty: "easy"
    },
    {
      title: "Write CSS to change the background color of a webpage",
      content: "Apply a blue background color to the body of the page.",
      difficulty: "easy"
    },
    {
      title: "What is the difference between relative, absolute, and fixed positioning?",
      content: "Relative positions element based on its normal position, absolute positions relative to its parent, fixed positions relative to the viewport.",
      difficulty: "medium"
    },
    {
      title: "Write CSS to make text red and bold",
      content: "Style a paragraph so that its text color is red and font weight is bold.",
      difficulty: "easy"
    },
    {
      title: "What are pseudo-classes in CSS?",
      content: "Pseudo-classes define the state of an element like :hover, :active, :nth-child().",
      difficulty: "medium"
    },
    {
      title: "Write CSS to style all links when hovered",
      content: "Change the text color of links to green when the mouse pointer is over them.",
      difficulty: "easy"
    },
    {
      title: "What is the difference between relative units (%, em, rem) and absolute units (px, cm)?",
      content: "Relative units adjust based on parent or root size, while absolute units remain fixed regardless of screen size.",
      difficulty: "medium"
    },
    {
      title: "Write CSS to center a div horizontally",
      content: "Style a div so that it is horizontally centered on the webpage.",
      difficulty: "medium"
    },
    {
      title: "What is the difference between inline, block, and inline-block display values?",
      content: "inline: fits in line with other text, block: takes full width, inline-block: inline element with block properties.",
      difficulty: "medium"
    },
    {
      title: "Write CSS to set a background image",
      content: "Set an image named 'background.jpg' as the background of the body element.",
      difficulty: "easy"
    },
    {
      title: "What are media queries in CSS?",
      content: "Media queries are used for responsive design, applying styles based on device width, height, or type.",
      difficulty: "medium"
    },
    {
      title: "Write CSS to make a paragraph text 20px font size",
      content: "Style all paragraphs with font size of 20 pixels.",
      difficulty: "easy"
    },
    {
      title: "What is the difference between relative, absolute, fixed, and sticky positioning?",
      content: "Relative: offset from normal, Absolute: relative to parent, Fixed: relative to viewport, Sticky: toggles between relative and fixed based on scroll.",
      difficulty: "hard"
    },
    {
      title: "Write CSS to make a div have rounded corners",
      content: "Apply border radius of 10px to a div element.",
      difficulty: "easy"
    },
    {
      title: "What are CSS transitions?",
      content: "Transitions allow smooth changes between property values like color, size, or position over time.",
      difficulty: "medium"
    },
    {
      title: "Write CSS to create a hover effect that changes background color",
      content: "Make a button’s background color change from blue to red when hovered.",
      difficulty: "easy"
    },
    {
      title: "What is the difference between inline CSS and external CSS?",
      content: "Inline CSS is written directly in HTML tags, while external CSS is written in a separate .css file and linked.",
      difficulty: "easy"
    },
    {
      title: "Write CSS to create a grid layout with 3 columns",
      content: "Create a grid container that arranges child elements in three equal columns.",
      difficulty: "medium"
    },
    {
      title: "What is the difference between relative length units (em, rem) and viewport units (vw, vh)?",
      content: "em/rem are based on font sizes, while vw/vh are based on the viewport width/height.",
      difficulty: "medium"
    },
    // --- 5 Theory Questions ---
{
  title: "What are the different types of CSS?",
  content: "Explain the difference between inline, internal, and external CSS with examples.",
  difficulty: "easy"
},
{
  title: "What is the difference between relative, absolute, fixed, and sticky positioning?",
  content: "Describe how each CSS positioning type behaves with respect to the viewport and parent elements.",
  difficulty: "medium"
},
{
  title: "Difference between inline-block and block elements",
  content: "Explain how inline, inline-block, and block elements differ in CSS.",
  difficulty: "easy"
},
{
  title: "What is the difference between em, rem, %, and px units?",
  content: "Explain the differences between CSS length units like em, rem, %, and px with examples.",
  difficulty: "medium"
},
{
  title: "What are pseudo-classes and pseudo-elements in CSS?",
  content: "Explain the difference between pseudo-classes (like :hover) and pseudo-elements (like ::before) in CSS.",
  difficulty: "hard"
},

// --- 20 Program/Practical Questions ---
{
  title: "Change background color on hover",
  content: "Write CSS to change the background color of a button when hovered.",
  difficulty: "easy"
},
{
  title: "Create a responsive navigation bar",
  content: "Write CSS code to create a horizontal navigation bar that becomes vertical on smaller screens.",
  difficulty: "medium"
},
{
  title: "CSS Grid layout",
  content: "Write CSS to create a 3x3 grid layout with equal-sized boxes using CSS Grid.",
  difficulty: "medium"
},
{
  title: "Flexbox centering",
  content: "Write CSS to center a div both horizontally and vertically using Flexbox.",
  difficulty: "easy"
},
{
  title: "Create a tooltip",
  content: "Write CSS to create a tooltip that appears when hovering over a text.",
  difficulty: "medium"
},
{
  title: "Animated button",
  content: "Write CSS to create a button with a smooth color transition effect on hover.",
  difficulty: "easy"
},
{
  title: "Dropdown menu",
  content: "Write CSS to create a dropdown menu that appears when hovering over a parent menu item.",
  difficulty: "medium"
},
{
  title: "Image hover zoom effect",
  content: "Write CSS to zoom in an image slightly when hovered.",
  difficulty: "easy"
},
{
  title: "Responsive card design",
  content: "Write CSS to create a card with shadow and rounded corners that resizes based on screen width.",
  difficulty: "medium"
},
{
  title: "Sticky header",
  content: "Write CSS to make the header of a webpage stick to the top when scrolling.",
  difficulty: "easy"
},
{
  title: "CSS loader animation",
  content: "Write CSS to create a spinning loader animation using keyframes.",
  difficulty: "hard"
},
{
  title: "Create a modal popup",
  content: "Write CSS to design a modal popup box that overlays the page.",
  difficulty: "hard"
},
{
  title: "Text gradient effect",
  content: "Write CSS to apply a linear gradient color effect to text.",
  difficulty: "medium"
},
{
  title: "Responsive image gallery",
  content: "Write CSS to create a responsive image gallery with 3 columns on desktop and 1 column on mobile.",
  difficulty: "medium"
},
{
  title: "Navigation bar with underline animation",
  content: "Write CSS to add an underline animation effect when hovering over navigation links.",
  difficulty: "medium"
},
{
  title: "Parallax scrolling effect",
  content: "Write CSS to create a parallax scrolling effect for a background image.",
  difficulty: "hard"
},
{
  title: "Dark mode toggle",
  content: "Write CSS to switch between light and dark mode themes.",
  difficulty: "medium"
},
{
  title: "CSS shapes",
  content: "Write CSS to create a circle, triangle, and hexagon using only CSS properties.",
  difficulty: "hard"
},
{
  title: "Responsive form design",
  content: "Write CSS to style a form with input fields, labels, and a submit button, making it mobile-friendly.",
  difficulty: "easy"
},
{
  title: "Fixed footer",
  content: "Write CSS to make a footer fixed at the bottom of the page.",
  difficulty: "easy"
},
  // --- BASIC & FUNDAMENTALS ---
  {
    title: "What is CSS?",
    content: "Explain what CSS (Cascading Style Sheets) is and its role in web development.",
    difficulty: "easy",
    type: "theory"
  },
  {
    title: "Different types of CSS",
    content: "Explain inline, internal, and external CSS with examples.",
    difficulty: "easy",
    type: "theory"
  },
  {
    title: "CSS Syntax",
    content: "Write the syntax of a CSS rule to change paragraph text color to blue.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "Selectors in CSS",
    content: "Explain different types of CSS selectors: element, class, id, and universal.",
    difficulty: "easy",
    type: "theory"
  },
  {
    title: "Class vs ID",
    content: "Explain the difference between class and ID selectors with examples.",
    difficulty: "easy",
    type: "theory"
  },
  {
    title: "Grouping Selectors",
    content: "Write CSS to set the color red for both h1 and h2 elements using grouping selectors.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Inline vs Block elements",
    content: "Explain the difference between inline and block elements in CSS with examples.",
    difficulty: "medium",
    type: "theory"
  },
  {
    title: "CSS Colors",
    content: "Write CSS code to set text color using color names, hex, RGB, and HSL.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "CSS Background",
    content: "Write CSS code to set a background color, image, and gradient for a div.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "CSS Fonts",
    content: "Write CSS code to change font-family, size, weight, and style of a paragraph.",
    difficulty: "easy",
    type: "program"
  },

  // --- BOX MODEL & LAYOUT ---
  {
    title: "CSS Box Model",
    content: "Explain margin, border, padding, and content in the CSS box model.",
    difficulty: "medium",
    type: "theory"
  },
  {
    title: "Width and Height",
    content: "Write CSS code to set width to 200px and height to 100px for a div.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "Margin and Padding",
    content: "Write CSS code to set margin of 20px and padding of 10px for a div.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "Border Properties",
    content: "Write CSS code to add a 2px solid black border with rounded corners to a div.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Display Property",
    content: "Explain different display values: block, inline, inline-block, none with examples.",
    difficulty: "medium",
    type: "theory"
  },
  {
    title: "Position Property",
    content: "Explain static, relative, absolute, fixed, and sticky positions with examples.",
    difficulty: "medium",
    type: "theory"
  },
  {
    title: "Z-index",
    content: "What is z-index in CSS and how does it affect stacking order?",
    difficulty: "medium",
    type: "theory"
  },
  {
    title: "Float and Clear",
    content: "Write CSS code to float an image to the right and clear it using clear property.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Overflow Property",
    content: "Explain overflow: visible, hidden, scroll, and auto with examples.",
    difficulty: "medium",
    type: "theory"
  },
  {
    title: "CSS Units",
    content: "Explain different CSS units: px, %, em, rem, vw, vh.",
    difficulty: "medium",
    type: "theory"
  },

  // --- FLEXBOX & GRID ---
  {
    title: "Flexbox Basics",
    content: "Write CSS to create a flex container with items aligned center and spaced evenly.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Flex Direction",
    content: "Explain row, row-reverse, column, and column-reverse in flexbox.",
    difficulty: "medium",
    type: "theory"
  },
  {
    title: "Flex Wrap",
    content: "Write CSS code to allow flex items to wrap onto multiple lines.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Justify-Content & Align-Items",
    content: "Explain how justify-content and align-items properties work in flexbox.",
    difficulty: "medium",
    type: "theory"
  },
  {
    title: "CSS Grid Basics",
    content: "Write CSS code to create a grid with 3 columns and 2 rows.",
    difficulty: "hard",
    type: "program"
  },
  {
    title: "Grid Template Areas",
    content: "Explain how grid-template-areas work with an example layout.",
    difficulty: "hard",
    type: "theory"
  },
  {
    title: "Grid Gap",
    content: "Write CSS code to set a 10px gap between grid items.",
    difficulty: "medium",
    type: "program"
  },

  // --- TEXT & LINKS ---
  {
    title: "Text Alignment",
    content: "Write CSS to align text to left, right, center, and justify.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "Text Decoration",
    content: "Write CSS code to underline, overline, line-through, and remove text decoration.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "Text Transform",
    content: "Write CSS to convert text to uppercase, lowercase, and capitalize.",
    difficulty: "easy",
    type: "program"
  },
  {
    title: "Text Shadow",
    content: "Write CSS code to add a shadow to text with horizontal, vertical offset and blur.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Link Styling",
    content: "Write CSS code to change the color of normal, visited, hover, and active links.",
    difficulty: "medium",
    type: "program"
  },

  // --- BACKGROUND, GRADIENTS & IMAGES ---
  {
    title: "Background Image",
    content: "Write CSS code to set a background image, position it, and cover the entire div.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Background Gradient",
    content: "Write CSS code for linear and radial gradients.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Opacity",
    content: "Write CSS code to set opacity of an element to 0.7.",
    difficulty: "easy",
    type: "program"
  },

  // --- TRANSITIONS & ANIMATIONS ---
  {
    title: "CSS Transitions",
    content: "Write CSS code to smoothly change the background color of a button on hover.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "CSS Animations",
    content: "Write CSS code to move a div from left to right using @keyframes.",
    difficulty: "hard",
    type: "program"
  },
  {
    title: "Transform Property",
    content: "Explain scale(), rotate(), translate(), and skew() with CSS examples.",
    difficulty: "medium",
    type: "theory"
  },

  // --- RESPONSIVE DESIGN & MEDIA QUERIES ---
  {
    title: "Media Queries",
    content: "Write CSS code to change background color for screens smaller than 600px.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Responsive Units",
    content: "Explain em, rem, vw, vh, and % units and how they help in responsiveness.",
    difficulty: "medium",
    type: "theory"
  },
  {
    title: "Viewport Meta Tag",
    content: "Explain the purpose of <meta name='viewport'> in responsive web design.",
    difficulty: "medium",
    type: "theory"
  },

  // --- ADVANCED CSS ---
  {
    title: "Pseudo-classes",
    content: "Explain :hover, :focus, :nth-child(), :first-child with examples.",
    difficulty: "medium",
    type: "theory"
  },
  {
    title: "Pseudo-elements",
    content: "Explain ::before, ::after, ::first-letter with examples.",
    difficulty: "medium",
    type: "theory"
  },
  {
    title: "CSS Variables",
    content: "Write CSS code to define and use custom properties (variables).",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Calc() Function",
    content: "Write CSS code to set width as calc(100% - 50px).",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "Clip-path",
    content: "Explain how clip-path works and provide an example to create a circular div.",
    difficulty: "hard",
    type: "program"
  },
  {
    title: "CSS Filters",
    content: "Write CSS code to apply grayscale, blur, and brightness filters to an image.",
    difficulty: "medium",
    type: "program"
  },
  {
    title: "CSS Grid vs Flexbox",
    content: "Explain the difference between CSS Grid and Flexbox with use cases.",
    difficulty: "medium",
    type: "theory"
  },
  {
    title: "CSS Specificity",
    content: "Explain CSS specificity and how it affects which styles are applied.",
    difficulty: "medium",
    type: "theory"
  }

];