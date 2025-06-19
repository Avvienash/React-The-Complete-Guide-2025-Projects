import reactImg from '../assets/react-core-concepts.png';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomElement(array) {
    return array[Math.floor(Math.random()*array.length)]
}



function Header() {

    const d = String(new Date())
    const desc = getRandomElement(reactDescriptions);

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
            {desc} React concepts you will need for almost any app you are
            going to build!
            <br></br>

            {d}
            </p>
        </header>
    );
}

export default Header;