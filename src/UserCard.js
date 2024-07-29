import { useState, useEffect } from 'react';
import axios from 'axios';

export const UserCard = ({ userId, isAdmin, onView, onEdit, onDelete }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${userId}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, [userId]);

  if (!userData) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={userData.image} className="img-fluid rounded-start w-100" alt="user placeholder" />
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {userData.firstName} {userData.lastName}
            </h5>

            <p className="card-text">
              <small className="text-body-secondary">{userData.username}</small>
            </p>

            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-secondary me-2" onClick={onView}>
                View
              </button>

              {isAdmin && (
                <>
                  <button type="button" className="btn btn-secondary me-2" onClick={onEdit}>
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger" onClick={onDelete}>
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
