import React from 'react';
import { Link } from "react-router-dom";

const footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <div className="container">
                <div className="row gx-5">
                    <div class="col-lg-12 col-sm-6 text-lg-end2 text-sm-start">
                        <div class="logo-wrapper">Powered by <img class="logo-main" src="./img/ui/footer_logo.webp" alt="" /></div>
                        <ul class="menu-simple">
                            <li><a href="#">AxF</a></li>
                            <li><a href="#">Resource</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Terms and Condition</a></li>
                        </ul>
                        <div class="col-lg-12 col-sm-6 copyright">
                            2024-2025 AxF Foundation, All rights reserved
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default footer;