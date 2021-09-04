import React, { Component } from "react";

class NowPlaying extends Component {
    render() {
        return (
            <section>
                <div className="latest">
                    <h1>Now Playing Movies</h1>
                </div>
                <div className="card-deck">
                    <div className="card shadow-lg bg-white rounded">
                        <img src="Images/image-2.jpg" className="rounded" alt="" ></img>
                        <div className="discription">
                            <h5>Replicas</h5>
                            <h5>JANUARY 11</h5>
                            <div className="icon">
                                <ul>
                                    <li><a href=" "><span><i class="fa fa-list" aria-hidden="true"></i></span></a></li>
                                    <li><a href=" "><span><i class="fa fa-heart" aria-hidden="true"></i></span></a></li>
                                    <li><a href=" "><span><i class="fa fa-bookmark" aria-hidden="true"></i></span></a></li>
                                    <li><a href=" "><span><i class="fa fa-star" aria-hidden="true"></i></span></a></li>
                                </ul>
                            </div>
                            <h6>Some humuns are unstopable.</h6>
                            <p>When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it.</p>
                        </div>
                        <div className="card-body row">
                            <div className='col-8'>
                                <h5>Replicas</h5>
                            </div>
                            <div className="col-4">
                                <span><i className="fa fa-share-alt mr-3" aria-hidden="true"></i></span>
                                {' '}
                                <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card shadow-lg bg-white rounded" >
                        <img src="Images/image-4.jpg" className="rounded" alt="" ></img>
                        <div className="discription">
                            <h5>Avangers EndGame</h5>
                            <h5>APRIL 24</h5>
                            <div className="icon">
                                <ul>
                                    <li><a href=" "><span><i class="fa fa-list" aria-hidden="true"></i></span></a></li>
                                    <li><a href=" "><span><i class="fa fa-heart" aria-hidden="true"></i></span></a></li>
                                    <li><a href=" "><span><i class="fa fa-bookmark" aria-hidden="true"></i></span></a></li>
                                    <li><a href=" "><span><i class="fa fa-star" aria-hidden="true"></i></span></a></li>
                                </ul>
                            </div>
                            <h6>Some humuns are unstopable.</h6>
                            <p>When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it.</p>
                        </div>
                        <div className="card-body row">
                            <div className="col-8">
                                <h5>Avangers EndGame</h5>
                            </div>
                            <div className="col-4">
                                <span><i className="fa fa-share-alt mr-3" aria-hidden="true"></i></span>
                                {' '}
                                <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card shadow-lg bg-white rounded">
                        <img src="Images/image-2.jpg" className="rounded" alt="" ></img>
                        <div className="discription">
                            <h5>Replicas</h5>
                            <h5>JANUARY 11</h5>
                            <div className="icon">
                                <ul>
                                    <li><a href=" "><span><i class="fa fa-list" aria-hidden="true"></i></span></a></li>
                                    <li><a href=" "><span><i class="fa fa-heart" aria-hidden="true"></i></span></a></li>
                                    <li><a href=" "><span><i class="fa fa-bookmark" aria-hidden="true"></i></span></a></li>
                                    <li><a href=" "><span><i class="fa fa-star" aria-hidden="true"></i></span></a></li>
                                </ul>
                            </div>
                            <h6>Some humuns are unstopable.</h6>
                            <p>When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it.</p>
                        </div>
                        <div className="card-body row">
                            <div className='col-8'>
                                <h5>Replicas</h5>
                            </div>
                            <div className="col-4">
                                <span><i className="fa fa-share-alt mr-3" aria-hidden="true"></i></span>
                                {' '}
                                <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
export default NowPlaying;