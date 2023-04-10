import React from "react";
import "./Contact.css"
import Glitch from "../../Components/GlitchedText/GlitchedText";


function Contact() {
    return (
        <div className="contact__container">
            <div className="contact__description">
                <Glitch text="Get In Touch" id="About"
                    style={{ "font-size": "2.5rem", "color": "black", "padding-bottom": "1rem" }} className="one" />
                    <p>
                        Hi
                    </p>
            </div>
        </div>
    );
}

export default Contact;