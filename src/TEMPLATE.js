
// MUI: Icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';



// Data object that contains all of the data for the template.
const data = {
    profile: {
        name: "Noah Shayne",
        contacts: [
            { icon: EmailIcon, label: "Email", value: <button onClick={() => window.location = 'mailto:noah.shayne@gmail.com'}>noah.shayne@gmail.com</button> }
        ],
        skills: [
            { category: "Programming Languages:", skills: "Python, C" },
            { category: "Scripting Languages:", skills: "HTML" },
            { category: "Documentation:", skills: "Excel, PowerPoint" },
            { category: "Learning:", skills: "SQL, React.js" }
        ],
        websites: [
            { icon: (props) => <GitHubIcon onClick = {event=>window.location.href='https://github.com/noahshayne'}/> },
        ],
        education: [
            {
                degree: "B.S. in Computer Science",
                date: "Anticipated Dec 2026",
                school: "University of Massachusetts Lowell - Lowell, MA",
                gpa: "GPA: 3.769"
            },
         
        ],
        experience: [
            {
                title: "Stop and Shop - Store Associate",
                date: "Summer 2023",
                description: "Worked as a store associate at a local Stop and Shop. Main job duty was to interact with and assist customers on a daily basis as a self-checkout assistant. Other tasks included cleaning, organizing and stocking shelves, and retrieving shopping carriages from the parking lot.",
            },
            {
                title: "Amherst Senior Center - Volunteer",
                date: "Oct 2022 to Jan 2023",
                description: "Worked alongside the Amherst Senior Center's volunteer coordinator to create technical guides geared towards staff and members of the aforementioned senior center.",
            }
          
           
        ],
    },

    
};

// Exporting the data object so that the App.js file can import it.
export default data;
