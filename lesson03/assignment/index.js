// Read the JSON file
fetch('./data/data.json')
  .then(response => response.json())
  .then(employees => {
    const container = document.querySelector('#list-container');

    // Loop through all elements of the list
    employees.forEach(function (employee, index) {

        let image = document.createElement('img');
        image.src = '/img/headshot.jpg'; // Replace 'path/to/employee-image.jpg' with the actual path to your image
        image.alt = 'Employee Image';
  
        // Append image to container
        container.appendChild(image);
        
      // Build HTML 
      let list = document.createElement('ul');

      // Assign unique class names to each list
      list.classList.add(`employee-${index + 1}`); // Adding 1 to index for 1-based indexing

      list.innerHTML = `
        <li class="employee-name">Name: ${employee.name}</li>
        <li class="employee-job-title">Job Title: ${employee.jobTitle}</li>
        <li class="employee-company">Company: ${employee.company}</li>
        <li class="employee-experience">Experience: ${employee.experience}</li>
        <li class="employee-school">School: ${employee.school}</li>
        <li class="employee-major">Major: ${employee.major}</li>
        <li class="employee-company">Company: ${employee.company}</li>
        <li class="employee-linkedin">LinkedIn URL: ${employee.linkedInUrl}</li>
        <li class="employee-code-languages">Code Languages: ${employee.codeLanguages}</li>
      `;
      // Insert HTML into page
      container.append(list);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));