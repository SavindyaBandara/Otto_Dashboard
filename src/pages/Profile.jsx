import React from 'react';
import "../styles/profile.css";

const Profile = () => {
    return (
        <div className='profile'>
            <h1 className="profile__title">Profile</h1>
            <div className="details__form">
          
          <p className="profile__desc">
            Update your photo and personal details here!
          </p>
          <form>
            <div className="form__group">
            <div>
                <label>Name</label>
                <input type="text" placeholder="Enter your name " />
              </div>
              <div>
                <label>Address</label>
                <input type="text" placeholder="Enter your Address" />
              </div>

              
            </div>

            <div className="form__group">
              <div>
                <label>Email</label>
                <input type="email" placeholder="Enter your e-mail" />
              </div>

              <div>
                <label>Phone Number</label>
                <input type="number" placeholder="+94********** Format please" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Date of Birth</label>
                <input type="date" placeholder="dd/mm/yyyy" />
              </div>

            </div>

            <div className="form__group">
              <div>
                <label>Your Photo</label>
                <p className="profile-img__desc">
                  This will be displayed in your profile
                </p>
                <input type="file" placeholder="choose file" />
              </div>

              <div className="profile__img-btns">
                <button className="dlt__btn">Delete</button>
                <button type="submit"className="update__btn">Update</button>
              </div>
            </div>
          </form>
        </div>
        </div>
    );
};

export default Profile;