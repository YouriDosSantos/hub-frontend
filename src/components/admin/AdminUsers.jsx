import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/admin/AdminApi";
import EditNameModal from "./EditNameModal";
import EditEmailModal from "./EditEmailModal";
import EditRolesModal from "./EditRolesModal";

export default function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalType, setModalType] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    function loadUsers() {
        getAllUsers().then(res => setUsers(res.data));
    }

    function openModal(user, type) {
        setSelectedUser(user);
        setModalType(type);
    }

    function closeModal() {
        setSelectedUser(null);
        setModalType(null);
        loadUsers();
    }

    return (
        <div className="container mt-4">
            <div className="card shadow-lg">
                <div className="card-body">
                    <h2 className="text-center mb-4">Admin User Management</h2>

                    <table className="table table-striped table-bordered">
                        <thead className="table-dark text-center">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Roles</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className="text-center align-middle">
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.roles.join(", ")}</td>

                                    <td>
                                        <div className="d-flex justify-content-center gap-2">
                                            <button className="btn btn-info" onClick={() => openModal(user, "name")}>Edit Name</button>
                                            <button className="btn btn-warning" onClick={() => openModal(user, "email")}>Edit Email</button>
                                            <button className="btn btn-primary" onClick={() => openModal(user, "roles")}>Edit Roles</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </table>
                </div>
            </div>

            {modalType === "name" && (
                <EditNameModal user={selectedUser} onClose={closeModal} />
            )}

            {modalType === "email" && (
                <EditEmailModal user={selectedUser} onClose={closeModal} />
            )}

            {modalType === "roles" && (
                <EditRolesModal user={selectedUser} onClose={closeModal} />
            )}

            {/* Key for Roles */}
            <div className="card shadow-sm mt-4">
                <div className="card-body">
                    <h4 className="mb-3">Role Key</h4>

                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>ROLE_NEWUSER</strong>
                            <div className="text-muted small">
                                Access to the Front page only while awaiting approval
                            </div>
                        </li>

                        <li className="list-group-item">
                            <strong>ROLE_OPERATOR</strong>
                            <div className="text-muted small">
                                Can Create and Read records
                            </div>
                        </li>

                        <li className="list-group-item">
                            <strong>ROLE_ADMIN</strong>
                            <div className="text-muted small">
                                Full system access
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            
        </div>

    );
}