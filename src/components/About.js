import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about-section">
            <h1>About</h1>
            <p>This is my about component.</p>
            <User name={"Chandra"} location={"Bengaluru"}/>

            <UserClass name={"Chandra(funct)"} location={"Bengaluru"}/>
        </div>
    )
}

export default About;