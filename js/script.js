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
          about me will go here....
        `;
        break;
    case 'skills':
        response = 'HTML, CSS, JavaScript, Node.js, Python, Java, MySQL, and Git';
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
        response = 'projects will go here....';
        break;
    default:
      response = 'Unknown command. Type "help" to see a list of available commands.';
  }

  outputElement.textContent += '\n' + response;
}
