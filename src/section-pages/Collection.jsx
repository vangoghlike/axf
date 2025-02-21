import React from 'react';
import { Link } from 'react-router-dom';

const collection = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="wow fadeInUp">Games</h2>
                    <div className="spacer-20"></div>
                </div>
            </div>
            <div class="row g-4 sequence">
                <div class="col-lg-3 col-md-6 gallery-item">
                    <div class="de-item wow">
                        <div class="d-overlay">
                            <div class="d-text">
                                <h4>Crypto Clan War</h4>
                            </div>
                        </div>
                        <img src="./img/covers/game1.webp" class="img-fluid " alt="" />
                    </div>
                </div>

                <div class="col-lg-9 col-md-6 gallery-item text_box">
                    <h3> Crypto Clan War</h3>
                    <p>• Genre: RTS PVP Strategy Game<br />
                        • Platform: Mobile (Android / iOS / PC)<br />
                        • Game Engine: Cocos2d-x<br />
                        • Game Features: Character Card RTS PVP Strategy Game<br />
                        - Combat gameplay driven by collecting my own strategic hero cards<br />
                        - CLAN WAR system where all players can participate<br />
                        - 1 vs 1 PVP mode<br />
                        - 7 different game modes that change daily (Mission SEVEN)
                    </p>
                </div>
                <div class="col-lg-3 col-md-6 gallery-item">
                    <div class="de-item wow">
                        <div class="d-overlay">
                            <div class="d-text">
                                <h4>Drill 3D Puzzle</h4>
                            </div>
                        </div>
                        <img src="./img/covers/game2.webp" class="img-fluid " alt="" />
                    </div>
                </div>

                <div class="col-lg-9 col-md-6 gallery-item text_box">
                    <h3> Drill 3D Puzzle</h3>
                    <p>• Genre: Casual Puzzle Game<br />
                        • Platform: Mobile (Android / iOS / PC)<br />
                        • Game Engine: Unity 3D<br />
                        • Game Features: 3D Character Puzzle Gam<br />
                        - Action puzzle game (drill puzzle) where you can strategize by upgrading the character's stats<br />
                        - All blocks and monsters are created in 3D<br />
                        - Character-specific skills and upgrades<br />
                        - Strategic gameplay using special items<br />
                    </p>
                </div>

            </div>

        </div>
    );
}

export default collection;