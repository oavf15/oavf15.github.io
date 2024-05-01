const outputElement = document.getElementById('output');
const nameElement = document.getElementById('name');
const inputElement = document.getElementById('input');

const welcomeMessage = `
Welcome to my website!
Type 'help' to see a list of available commands.
`;

nameElement.textContent = 'Oscar Vasquez-Flores';

outputElement.textContent += welcomeMessage;

inputElement.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const command = inputElement.value.trim();
    inputElement.value = '';
    processCommand(command);
  }
});

function processCommand(command) {
  let response = '';

  switch (command.toLowerCase()) {
    case 'help':
      response = 'Available commands: about, skills, contact, resume, projects';
      break;
      case 'about':
        response = `
        I am a dedicated and proficient Computer Science professional with a Bachelor of Science from the University of Maryland Global Campus, specializing in data management and programming. My academic and professional experiences have equipped me with extensive knowledge in databases, software development, and technical documentation. As an Academic Technology Tutor at Prince George's Community College, I have honed my ability to mentor students and resolve complex technical issues, enhancing productivity and fostering a collaborative learning environment. My passion for technology is complemented by my commitment to continuous learning and excellence in all professional endeavors.
        `;
        break;
    case 'skills':
        response = `
        I possess advanced skills in data management, particularly with SQL Server, Oracle SQL, PostgreSQL, and MySQL. My technical toolkit includes extensive experience with Microsoft Excel, Power Query, and Power Automate, as well as programming expertise in HTML, CSS, JavaScript, Java, and Python. These skills allow me to develop robust software solutions and dynamic web projects. Additionally, I am adept at analytical problem-solving and data-driven decision-making, supported by strong technical writing skills that enable me to communicate complex information effectively. My practical experience is underpinned by certifications and hands-on projects that demonstrate my capabilities in real-world applications.
        `;
        break;
    case 'contact':
        response = 'Email: oavf15@gmail.com';
        break;
    case 'resume':
        // download resume from /files/resume.pdf
        window.open('files/resume.pdf', '_blank'); // Open resume file in a new window or tab
        response = 'Opening resume...';
        break;
    case 'projects':
        response = `
        I have engaged in diverse technical projects that demonstrate my expertise in programming, database management, and data analytics. Key projects include Nutella, a web-based network tool suite developed with Python and Streamlit, and InventorySQL, where I crafted an inventory database using MySQL to showcase my database creation skills. Additionally, I developed the AnneArundelPostgres project, analyzing crime data with PostgreSQL, and created various dynamic dashboards in PowerBI. Each project underscores my ability to apply complex technical skills in practical scenarios. For a more detailed exploration of these projects, please see the dedicated section in my resume.
        `;
        break;
    default:
      response = 'Unknown command. Type "help" to see a list of available commands.';
  }

  outputElement.textContent += '\n' + response;
}
