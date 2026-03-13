import React, { useState } from "react";
import { updateUserEmail } from "../../api/admin/AdminApi";

export default function EditEmailModal({ user, onClose }) {
  const [email, setEmail] = useState(user.email);

  function handleSubmit(e) {
    e.preventDefault();

    updateUserEmail(user.id, email)
      .then(() => {
        alert("Email updated successfully");
        onClose();
      })
      .catch(err => {
        alert(err.response?.data?.message || "Failed to update email");
      });
  }

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Edit Email</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <label className="form-label">New Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <div className="mt-3 text-end">
                <button type="button" className="btn btn-secondary me-2" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-warning">
                  Save
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
