// HÄMTA DATA
const responsePromise = fetch("https://jsonplaceholder.typicode.com/posts");
const dataPromise = responsePromise.then((response) => {
  return response.json();
});

// PRINTA DATA
dataPromise.then((data) => {
  const container = document.querySelector(".container");

  for (let i = 0; i < data.length; i++) {
    // Create h2 element for section with a unique id
    const element = document.createElement("h2");
    element.classList.add("section");
    element.id = "section" + i;

    // Set the title of the section
    element.innerHTML = data[i].title;

    // Create p element for description
    const description = document.createElement("p");
    description.classList.add("description");
    description.innerHTML = data[i].body;
    description.style.display = "none"; // Hide description by default

    // Append description to the h2 element
    element.appendChild(description);

    // Append the h2 element to the container
    container.appendChild(element);

    // Add event listener to toggle visibility of the description
    element.addEventListener("click", toggle);
  }
});

// TOGGLE FUNCTION (only one description is visible at a time)
function toggle(e) {
  const element = e.target; // The clicked section (h2)
  const description = element.querySelector(".description"); // The description (p)

  // Hide all descriptions before showing the clicked one
  const allDescriptions = document.querySelectorAll(".description");
  allDescriptions.forEach((desc) => {
    if (desc !== description) {
      desc.style.display = "none"; // Hide other descriptions
    }
  });

  // Toggle the display of the clicked description
  if (description.style.display === "block") {
    description.style.display = "none"; // Hide if already visible
  } else {
    description.style.display = "block"; // Show the description
  }
}
