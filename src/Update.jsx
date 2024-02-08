import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateUser } from "./userReducer";


const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const {
    number,
    heading,
    name1,
    name2,
    detail1,
    detail2,
    time,
    avatar,
    Logo
    
  } = existingUser[0];
  const [upnumber, setUpnumber] = useState(number);
  const [upname1, setUpname1] = useState(name1);
  const [upname2, setUpname2] = useState(name2);
  const [updetail1, setUpdetail1] = useState(detail1);
  const [updetail2, setUpdetail2] = useState(detail2);
  const [uptime, setUptime] = useState(time);
  const [Upheading, setUpheading] = useState(heading);
  const [upavatar, setUpavatar] = useState(avatar || null);
  const [upLogo, setUpLogo] = useState(Logo||null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      UpdateUser({
        id: id,
        number: upnumber,
        name1: upname1,
        name2: upname2,
        detail1: updetail1,
        detail2: updetail2,
        time: uptime,
        heading: Upheading,
        avatar: upavatar,
        Logo:upLogo
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className=" w-100 border bg-secondary text-white p-5">
        <h3>Update user</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="number">Name:</label>
            <input
              type="text"
              name="number"
              className="forn-control  "
              placeholder="enter number"
              value={upnumber}
              onChange={(e) => setUpnumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="heading">Header:</label>
            <input
              type="text"
              name="heading"
              className="forn-control  "
              placeholder="enter heading"
              value={Upheading}
              onChange={(e) => setUpheading(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name1">name1:</label>
            <input
              type="text"
              name="name1"
              className="forn-control "
              placeholder="enter name1"
              value={upname1}
              onChange={(e) => setUpname1(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name2">name2:</label>
            <input
              type="text"
              name="name2"
              className="forn-control  "
              placeholder="enter name2"
              value={upname2}
              onChange={(e) => setUpname2(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="detail1">detail1:</label>
            <input
              type="text"
              name="detail1"
              className="forn-control  "
              placeholder="enter detail1"
              value={detail1}
              onChange={(e) => setUpdetail1(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="detail2">detail2:</label>
            <input
              type="text"
              name="detail2"
              className="forn-control  "
              placeholder="enter detail2"
              value={updetail2}
              onChange={(e) => setUpdetail2(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="time">time:</label>
            <input
              type="text"
              name="time"
              className="forn-control  "
              placeholder="enter time"
              value={uptime}
              onChange={(e) => setUptime(e.target.value)}
            />
          </div>
          <div >
            <label htmlFor="avatar">avatar:</label>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              className="  forn-control "
              onChange={(e) => setUpavatar(URL.createObjectURL(e.target.files[0]))}
             />
          </div>
          <div>
            <label htmlFor="Logo">Logo:</label>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              className="forn-control "
               onChange={(e) => setUpLogo(URL.createObjectURL(e.target.files[0]))}
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
