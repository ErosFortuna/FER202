import { Container } from 'react-bootstrap';

function About() {
    return (
        <Container className="my-5">
            <h1 className="mb-4">About Us</h1>
            <p className="lead">
                Welcome to Pizza House, your ultimate destination for authentic and delicious pizza!
            </p>
            <p>
                We are passionate about delivering the finest quality pizzas made with the freshest ingredients and traditional recipes. 
                Our dedicated team of chefs brings years of experience and expertise to create memorable dining experiences.
            </p>
            <h3 className="mt-4">Our Mission</h3>
            <p>
                To provide exceptional pizza experiences by combining quality ingredients, skilled craftsmanship, 
                and outstanding customer service in a welcoming environment.
            </p>
            <h3 className="mt-4">Why Choose Us?</h3>
            <ul>
                <li>Premium quality ingredients sourced from trusted suppliers</li>
                <li>Authentic pizza-making techniques</li>
                <li>Fast and reliable delivery service</li>
                <li>Friendly and professional customer service</li>
                <li>Diverse menu options for every taste</li>
            </ul>
            <p className="mt-5">
                Join us today and experience the taste of authentic pizza at Pizza House!
            </p>
        </Container>
    );
}

export default About;
