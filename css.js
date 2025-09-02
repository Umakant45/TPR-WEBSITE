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
}

];