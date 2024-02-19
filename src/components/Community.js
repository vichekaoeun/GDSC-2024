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

    const tags = [
        "abc",
        "abc",
        "abc"
    ]

    return (
        <div className="container-fluid custom-bg text-white py-5">
            <div className="container-fluid text-center px-5">
                <div className="row justify-content-center">
                    <div className="container">
                        <div className="row">
                            {/* <Searc></Searc>h bar */}
                            <div className="col-md-12 col-lg-7 mx-auto mb-5">
                                <div className="input-group search-container">
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-danger" type="button">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row bg-primary rounded-4">
                            {/* Tags section */}
                            <div className="col-md-6 col-lg-3 mx-auto mb-3 justify-content-center rounded">
                                <h2 className="m-4">Popular Groups</h2>
                                {items.map((item, idx) => (
                                    <div key={idx} className="tag bg-danger text-white px-3 py-2 m-1 font-weight-bold rounded-pill d-inline-block">
                                        {item}
                                    </div>
                                ))}
                            </div>

                            {/* Groups/Communities section */}
                            <div className="col-md-6 col-lg-9 p-5 mb-3">
                                <div className="container border bg-white rounded-3">
                                    
                                    <div className="row text-black">
                                        <div className="col col-3 col-md-2 d-flex align-items-center justify-content-center">
                                            profile pic
                                        </div>

                                        <div className="col">
                                            <div className="row mt-2 mb-1 fw-bold fs-3">
                                                    title
                                            </div>
                                            
                                            <div className="row mb-1">
                                                April 1st 2024
                                            </div>
                                            
                                            <div className="row mb-1">
                                                    username tag
                                            </div>
                                        </div>
                                    </div>



                                
                                    <div className="row mx-sm-2 mx-md-3 mb-2 mt-3">
                                        {/* tags */}
                                        {tags.map((tag, idx) => (
                                            <div key={idx} className="col col-auto tag bg-danger text-white px-2 py-1 m-1 font-weight-bold rounded d-inline-block">
                                                {tag}
                                            </div>
                                        ))}
                                    </div>



                                    {/* description */}
                                    <div className="row">
                                        <div className="col text-left">
                                            <p className="text-left overflow-hidden text-truncate text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae facere corporis tenetur harum velit a sequi recusandae. Corporis error facilis cupiditate, fugit nemo impedit, ipsum amet voluptatibus nesciunt incidunt eum nulla nobis.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-5">
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
            </div>
        </div>
    );
}
