import React from 'react';

const Tokenomics = () => {
    return(
        <div className="container">
            <div className="row">
                <div class="col-lg-12">
                    <div class="jarallax position-relative">
                        <div class="flex">
                            <div class="row">
                                <div class="col-lg-7 col-md-12">
                                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Tokenomics</h2>
                                    <ul>
                                        <li>
                                            <h4>Ecosystem Development (30%)
                                            </h4>
                                            <p>Allocated for incentivizing developers, creating new tools, <br />
                                                and expanding the ecosystem.
                                            </p>
                                        </li>
                                        <li>
                                            <h4>Strategic Alliance (40%)
                                            </h4>
                                            <p>Reserved for strategic partnerships and potential <br />
                                                acquisitions.
                                            </p>
                                        </li>

                                        <li>
                                            <h4> Liquidity Provision (10%)
                                            </h4>
                                            <p> Dedicated to maintaining liquidity in decentralized <br />
                                                exchanges and ensuring seamless trading experiences.
                                            </p>
                                        </li>


                                        <li>
                                            <h4>Community Treasury (10%)
                                            </h4>
                                            <p> Managed by the AxF DAO to support community-driven <br />
                                                initiatives, grants, and partnerships.
                                            </p>
                                        </li>

                                        <li>
                                            <h4>Team and Advisors (10%)
                                            </h4>
                                            <p> Allocated to the founding team and advisors, vested over <br />
                                                four years to ensure alignment with the project’s growth.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="right_img col-lg-5 col-md-12">
                                    <img src="./img/tokenomics/graph-img.webp"className="img-fluid" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tokenomics;