import React, { useEffect, useState } from "react";
import { updateUserRoles,getAllRoles } from "../../api/admin/AdminApi"

// const ALL_ROLES = ["ROLE_ADMIN", "ROLE_OPERATOR", "ROLE_NEWUSER"];

export default function EditRolesModal({ user, onClose }) {

  const [roles, setRoles] = useState(user.roles);
  const [allRoles, setAllRoles] = useState([])

  useEffect(() => {
    getAllRoles().then(res => setAllRoles(res.data));
  }, []);

  function toggleRole(role) {
    if (roles.includes(role)) {
      setRoles(roles.filter(r => r !== role));
    } else {
      setRoles([...roles, role]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateUserRoles(user.id, roles)
      .then(() => {
        alert("Roles updated successfully");
        onClose();
      })
      .catch(err => {
        alert(err.response?.data?.message || "Failed to update roles");
      });
  }

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Edit Roles</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>

              <label className="form-label">Select Roles</label>

              <div className="list-group">

                {allRoles.map(role => (
                  <label key={role} className="list-group-item">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      checked={roles.includes(role)}
                      onChange={() => toggleRole(role)}
                    />
                    {role}
                  </label>
                ))}

              </div>

              <div className="mt-3 text-end">
                <button type="button" className="btn btn-secondary me-2" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
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
