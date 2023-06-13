import React from 'react';
import './WhatIDo.css';

// Make gallery component
const WhatIDo = () => {
    return (
        <section id="whatido" className="whatido">
            <div className="container">
                <h2 className="whatido__title">What I Do</h2>
                <p className="whatido__text">
                    I am a Frontend developer. I am always looking for new
                    challenges and opportunities to improve my skills. I am
                    always open to new ideas and I am always ready to learn new
                    things.
                </p>
                <div className="whatido__info">
                    <div className="whatido__info-item">
                        <div className="whatido__label">Frontend:</div>
                        <div className="whatido__text--info">
                            HTML, CSS, JavaScript, React
                        </div>
                    </div>
                    <div className="whatido__info-item">
                        <div className="whatido__label">Backend:</div>
                        <div className="whatido__text--info">
                            Node.js, Express.js, MongoDB
                        </div>
                    </div>
                    <div className="whatido__info-item">
                        <div className="whatido__label">Tools:</div>
                        <div className="whatido__text--info">
                            Git, Github, VS Code, Figma, Adobe XD
                        </div>
                    </div>
                    <div className="whatido__info-item">
                        <div className="whatido__label">Other:</div>
                        <div className="whatido__text--info">
                            Agile, Scrum, Kanban
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WhatIDo;
