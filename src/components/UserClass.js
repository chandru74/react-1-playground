import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name: '',
                location: '',
            },
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/chandru74");

        const json = await data.json();

        this.setState({
            userInfo : json
        })
    }

    render(){
        const { name, location} = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
            </div>
        )
    }
}

export default UserClass;
