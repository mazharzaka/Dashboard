import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Avatar} from "@mui/material";
import "./View.css";
export default function View() {
  const {id} = useParams();
  const [user, setuser] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("rows"));

    const result = items.filter((e) => e.id == id);
    setuser(result);
    // console.log(user[0] == undefined);
  });
  return (
    <div className="canlender-contain">
      <div className="user-form">
        <div className="pic-ava">
          {" "}
          <Avatar
            alt="Remy Sharp"
            src={user[0] == undefined ? console.log(user) : user[0].img}
            sx={{width: 60, height: 60}}
          />
        </div>
        <div className="fullname">
          <label className="label-name">Id: </label>
          <div className="nameuser">
            {user[0] == undefined ? console.log(user) : user[0].id}
          </div>
        </div>
        <div className="fullname">
          <label className="label-name">Full Name : </label>
          <div className="nameuser">
            {user[0] == undefined ? console.log(user) : user[0].firstName}{" "}
            {user[0] == undefined ? console.log(user) : user[0].lastName}
          </div>
        </div>
        <div className="fullname">
          <label className="label-name">Email : </label>
          <div className="nameuser">
            {user[0] == undefined ? console.log(user) : user[0].email}
          </div>
        </div>
        <div className="fullname">
          <label className="label-name">Age : </label>
          <div className="nameuser">
            {user[0] == undefined ? console.log(user) : user[0].age}
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}
