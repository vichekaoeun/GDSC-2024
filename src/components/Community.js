import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Community() {
    const items = [
        "Anxiety disorders",
        "Mood disorders",
        "Personality disorders",
        "Psychotic disorders",
        "Eating disorders",
        "Substance use disorders",
        "Neurodevelopmental disorders",
        "Dissociative disorders",
        "Sleep disorders",
        "Other mental health issues"
    ];

    const images = [
        "default.jpg",
        "default.jpg",
        "default.jpg"
    ];

    return (
        <div className="container-fluid bg-secondary text-white py-5">
            <div className="container-fluid text-center px-5">
                <div className="row justify-content-center">
                    <div className="container">
                        <div className="row">
                            {/* <Searc></Searc>h bar */}
                            <div className="col-md-12 col-lg-7 mx-auto mb-5">
                                <div className="input-group search-container">
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {/* Tags section */}
                            <div className="col-md-6 col-lg-3 mx-auto mb-3 justify-content-center">
                                <h2 className="mb-4">Tags</h2>
                                {items.map((item, idx) => (
                                    <div key={idx} className="tag bg-primary text-white px-2 py-2 m-1 font-weight-bold rounded d-inline-block">
                                        {item}
                                    </div>
                                ))}
                            </div>

                            {/* Groups/Communities section */}
                            <div className="col-md-6 col-lg-9 mx-auto mb-3">
                                <h2 className="mb-4">Groups/Communities</h2>
                                <div className="container border">
                                    <div className="row">
                                        {/* date */}
                                        <div className="col text-right col-auto">
                                            <p className="m-0">author/date</p>
                                        </div>
                                    </div>

                                    <div className="row text-left">
                                        {/* title */}
                                        <div className="col text-left justify-content-start col-auto">
                                            <h1 className="mb-0">That time I got reincarnated as a slime</h1>
                                        </div>
                                    </div>
                                
                                    <div className="row">
                                        {/* tags */}
                                        <div className="col-md-1  col-auto">
                                            <p className="mb-1">tags</p>
                                        </div>
                                    </div>

                                    {/* description */}
                                    <div className="row">
                                        <div className="col text-left">
                                            <p className="text-left overflow-hidden text-truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae facere corporis tenetur harum velit a sequi recusandae. Corporis error facilis cupiditate, fugit nemo impedit, ipsum amet voluptatibus nesciunt incidunt eum nulla nobis.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="container border my-5">
                                    <div className="row">
                                        {/* date */}
                                        <div className="col text-right col-auto">
                                            <p className="m-0">author/date</p>
                                        </div>
                                    </div>

                                    <div className="row text-left">
                                        {/* title */}
                                        <div className="col text-left justify-content-start col-auto">
                                            <h1 className="mb-0">That time I got reincarnated as a slime</h1>
                                        </div>
                                    </div>
                                
                                    <div className="row">
                                        {/* tags */}
                                        <div className="col-md-1  col-auto">
                                            <p className="mb-1">tags</p>
                                        </div>
                                    </div>

                                    {/* description */}
                                    <div className="row">
                                        <div className="col text-left">
                                            <p className="text-left overflow-hidden text-truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae facere corporis tenetur harum velit a sequi recusandae. Corporis error facilis cupiditate, fugit nemo impedit, ipsum amet voluptatibus nesciunt incidunt eum nulla nobis.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        
                        <div className="row">
                            <div className="container text-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                                
                    </div>
                </div>
            </div>
        </div>
    );
}
