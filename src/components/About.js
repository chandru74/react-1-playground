import { useContext } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {

    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="about-section">
            <h1>About</h1>
            <p>This is my about component.</p>

            <User name={"Chandra"} location={"Bengaluru"}/>

            <UserClass name={"Chandra(funct)"} location={"Bengaluru"}/>

            <div>
                <span>Logged In User: <span className="font-bold"> {loggedInUser} </span> </span>
            </div>
        </div>
    )
}

export default About;