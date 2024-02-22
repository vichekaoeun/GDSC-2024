import React from "react";
import './PostModal.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function PostModal({ closeModal }) {
    const animatedComponents = makeAnimated();

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="row">
                    <h2 className="col">Create a Post</h2>
                    <div className="col d-flex justify-content-end">
                        <button className="btn btn-danger close-button rounded" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <label for="blog-title">Title</label>
                        <input type="text" className="form-control" id="blog-title" placeholder="Post Title"></input>
                    </div>
                    <div className="form-group mt-3 mb-3">
                        <label>Tags</label>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={[
                                { value: 'chocolate', label: 'Chocolate' },
                                { value: 'strawberry', label: 'Strawberry' },
                                { value: 'vanilla', label: 'Vanilla' }
                            ]}
                        />
                    </div>

                    <div className="form-group">
                        <label for="blog-content">Content</label>
                        <textarea className="form-control" id="blog-content" rows="3" placeholder="Write something here..."></textarea>
                    </div>
                    <button className="btn btn-primary mt-5">Submit</button>
                </form>
            </div>
        </div>
    )
}