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
          Oscar Vasquez-Flores is a computer science specialist with a strong foundation in software development and algorithm design. 
          With a passion for solving complex problems and creating efficient solutions, Oscar has honed his skills in various programming languages 
          and frameworks. He is dedicated to staying up-to-date with the latest technologies and industry trends to deliver innovative and 
          impactful solutions in the field of computer science.
        `;
        break;
    case 'skills':
        response = 'HTML, CSS, JavaScript, Node.js, Python, Java, MySQL, and Git';
        break;
    case 'contact':
        response = 'Email: oscar@oscarvasquez.tech';
        break;
    case 'resume':
        // download resume from /files/resume.pdf
        window.open('files/resume.pdf', '_blank'); // Open resume file in a new window or tab
        response = 'Opening resume...';
        break;
    default:
      response = 'Unknown command. Type "help" to see a list of available commands.';
  }

  outputElement.textContent += '\n' + response;
}
