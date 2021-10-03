import React from 'react';
import "./Home.css"

function Home(){
    return(
        <div className = "greetings">
            <ul>
                <li className = "title">NASA SpaceApps Challenge 2021</li>
                <li className = "teamName">Team Paunu'</li>
                <li>Choose one of the menu items above in order to get started with our project</li>
            </ul>
        </div>
    )
}

export default Home;