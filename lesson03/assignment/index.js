// Read the JSON file
fetch('./data/data.json')
  .then(response => response.json())
  .then(employees => {
    const container = document.querySelector('.profile-card');

    // Loop through all elements of the list
    employees.forEach(function (employee, index) {

        let image = document.createElement('img');
        image.src = '/img/headshot.jpg';
        image.alt = 'Employee Image';

        
      // Build HTML 
      let list = document.createElement('div');

    
      // Assign unique class names to each list
      list.classList.add(`employee-${index + 1}`, 'profile-card'); // Adding 1 to index for 1-based indexing

      list.innerHTML += `
      <div class="employee-info">
      <img src="${image.src}" alt="${image.alt}" class="profile-image">
      <div class="employee-name">${employee.name}</div>
      <div class="employee-job-title">${employee.jobTitle}</div>
    </div>
    <div class="right-content">
      <ul>
        <li class="employee-company"><span style="font-weight: bold">Company:&nbsp</span> ${employee.company}</li>
        <li class="employee-experience"><span style="font-weight: bold">Experience:&nbsp</span> ${employee.experience}</li>
        <li class="employee-school"><span style="font-weight: bold">School:&nbsp</span> ${employee.school}</li>
        <li class="employee-major"><span style="font-weight: bold">Major:&nbsp</span> ${employee.major}</li>
        <li class="employee-company"><span style="font-weight: bold">Email:&nbsp</span> ${employee.email}</li>
        <li class="employee-linkedin"><img src="/img/linkedin.svg">&nbsp${employee.linkedInUrl}</li>
        <li class="employee-code-languages">${employee.codeLanguages}</li>
        </ul>
        </div>
      `;
      // Insert HTML into page
      container.append(list);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));