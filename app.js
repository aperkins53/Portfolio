//form submission handling
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form submitted! I will get back to you soon.");
});

//adding projects
const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1.",
    link: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2.",
    link: "https://github.com/yourusername/project2",
  },
];

const projectContainer = document.getElementById("projects-container");

projects.forEach((project) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  projectDiv.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Code</a>
    `;

  projectContainer.appendChild(projectDiv);
});
