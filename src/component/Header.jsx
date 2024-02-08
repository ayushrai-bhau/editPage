import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const users = useSelector((state) => state.users);

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/edit/${user.id}`} className="btn btn-success my-3">
           Edit
          </Link>
          <p className="mob">Mob: {user.number}</p>
          <div className="Header">
            <img
              src={user.avatar}
              alt="avatar"
              className="avatar"
            />
            <h1>{user.heading}</h1>
          </div>
          <div className="Header-main ">
            <div className="Header-main-left ">
              <h2>{user.name1}</h2>
              <p>{user.detail1}</p>
            </div>
            <div className="Header-main-center ">
              <img src={user.Logo} width={200} height={200} alt="" />
            </div>
            <div className="Header-main-right ">
              <h2>{user.name2}</h2>
              <p>{user.detail2}</p>
            </div>
          </div>
          <div className="time">
            <p>Consultation time -: From {user.time} (Everyday)</p>
            <p>Sunday -: holiday or closed</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Header;
