import React, { useState } from "react";
import { resetUserPassword } from "../../api/admin/AdminApi";

export default function ResetPasswordModal({ user, onClose }) {
    const [tempPassword, setTempPassword] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleReset() {
        setLoading(true);
        resetUserPassword(user.id)
            .then(res => {
                setTempPassword(res.data);
            })
            .finally(() => setLoading(false));
    }

    return (
        <div className="modal-backdrop">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-4">

                    <h4 className="mb-3">Reset password for {user.email}</h4>

                    {!tempPassword && (
                        <>
                            <p>Are you sure you want to reset this user's password?</p>

                            <button className="btn btn-danger w-100 mb-3" onClick={handleReset} disabled={loading}>
                                {loading ? "Resetting..." : "Confirm Reset"}
                            </button>

                            <button className="btn btn-secondary w-100" onClick={onClose}>
                                Cancel
                            </button>
                        </>
                    )}
                    
                    {tempPassword && (
                        <>
                            <div className="alert alert-success">
                                <strong>Temporary Password</strong>
                                <div className="mt-2 p-2 bg-light border roudner text-center">
                                    {tempPassword}
                                </div>
                            </div>

                            <p className="text-muted small">
                                Give this password to the user. They will be forced to change it on next login.
                            </p>

                            <button className="btn btn-primary w-100" onClick={onClose}>
                                Close
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}