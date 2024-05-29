const Contact = () => {
    return(
        <div>
            <h1>Contact Us Page</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="Username" />
                <input type="text" className="border border-black p-2 m-2" placeholder="Message" />
                <button className="border border-black p-2 m-2 bg-gray-500 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
