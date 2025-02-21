import React from 'react';


const Section = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="mb20">About</h2>
                </div>

                <div className="col-lg-6"></div>

                <div className="col-lg-3 col-md-6 mb-sm-20" >
                    <div>
                        <img src="./img/icons/1.png" className="mb20" alt=""/>
                        <h4>AI-Powered Autonomous Gameplay</h4>
                        <p>AI agents automate quests, resource mining, and battles for a seamless gaming experience</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <img src="./img/icons/2.png" className="mb20" alt=""/>
                        <h4>Blockchain-Integrated Smart AI</h4>
                        <p>AI and blockchain ensure secure, transparent, and decentralized game operations.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <img src="./img/icons/3.png" className="mb20" alt=""/>
                        <h4>Personalized Adaptive Gaming</h4>
                        <p>AI tailors gameplay by learning player preferences and optimizing strategies.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <img src="./img/icons/4.png" className="mb20" alt=""/>
                        <h4>GameFi-Driven Economy</h4>
                        <p>AI agents enhance earnings through NFT staking, liquidity provision, and DeFi activities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;