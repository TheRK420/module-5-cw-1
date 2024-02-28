function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", { class: "header" }, "Learn web development"),
    React.createElement(Para1),
    React.createElement(Para2),
    React.createElement(Para3)
  );
}

function Para1() {
  return React.createElement(
    "p",
    { class: "para" },
    "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites."
  );
}

function Para2() {
  return React.createElement(
    "p",
    { class: "para" },
    'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable". From there, you should be able to start making your way, learning from ', React.createElement('a',{href:"#"},'the rest of MDN'),', and other intermediate to advanced resources that assume a lot of previous knowledge.'
  );
}

function Para3() {
  return React.createElement(
    "p",
    { class: "para" },
    "If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development(on your own or as a part of class), a teacher looking for a class materials, a hobbyist, or someone who just wants to understand more about how web technologies work."
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root1"));
