import { useState } from "react";
import { requestBackend } from "../../../utils/requests";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
    const navigate = useNavigate();

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (newPassword !== confirmPassword) {
            setError("New Passwords do not match");
            return;
        }

        try {
            await requestBackend({
                method: "POST",
                url: "/api/users",
                data: {
                    currentPassword,
                    newPassword,
                }
            });
        

        setSuccess("Password updated Successfully. Redirecting to login...");

        localStorage.removeItem("access_token");
        setTimeout(() => navigate("/login"), 1500);

        } catch(err) {
            console.error(err);
            setError("Current password is incorrect");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "450px"}}>
            <h2 className="mb-4 text-center">Set a New Password</h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Temporary Password</label>
                    <input type="password" className="form-control" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input type="password" className="form-control" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Confirm New Password</label>
                    <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                </div>

                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <button type="submit" className="btn btn-primary w-100">Update Password</button>

            </form>
        </div>
    )
}