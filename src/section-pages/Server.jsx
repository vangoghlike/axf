import React from 'react';
import { Link } from "react-router-dom";

const server = () => {
    return(
        <div className="container">
            <div className="row align-items-center gx-5">
                <div className="col-lg-6">
                    <img width="1000" height="600" src="./img/misc/server.webp" className="img-fluid mb-sm-30" alt=""/>
                </div>

                <div className="col-lg-6">
                    <h2 className=""><span className="text-gradient">An</span> Interactive Game That Grows with AI</h2>
                    <p className="">This game offers an innovative interactive experience where AI and players grow together. The AI learns the player's playstyle, providing personalized challenges and assistance to enhance immersion. Experience a new form of gameplay that develops alongside AI, beyond just a simple game!</p>


                </div>
            </div>
        </div>
    );
}

export default server;