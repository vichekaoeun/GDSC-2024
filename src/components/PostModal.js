import React from "react";
import './PostModal.css';

export default function PostModal({ closeModal }) {
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="row">
                    <h2 className="col">Create Post</h2>
                    <div className="col d-flex justify-content-end">
                        <button className="btn btn-danger close-button rounded" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Post Title"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Select a Tag</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Content</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary mt-5">Submit</button>
                </form>
            </div>
        </div>
    )
}