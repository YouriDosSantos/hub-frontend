import React, { useState } from "react";
import { updateUserName } from "../../api/admin/AdminApi";

export default function EditNameModal({user, onClose}) {
    const [name, setName] = useState(user.name);

    function handleSubmit(e) {
        e.preventDefault();

        updateUserName(user.id, name)
            .then(() => {
                alert("Name updated successfully");
                onClose();
            })
            .catch(err => {
                alert(err.response?.data?.message || "Failed to update name");
            });
    }

    return (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)"}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Name</h5>
                        <button className="btn-close" onClick={onClose}></button>
                    </div>

                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <label className="form-label">New Name</label>
                            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                            <div className="mt-3 text-end">
                                <button type="button" className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}