import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { News } from "../../const/News";
import "./HomeScreen.css";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };

  const listItems = News.map((item) => (
    <div className="container " style={{ marginTop: "50px" }}>
      <div className="row d-flex justify-content-center">
        <div className="col-md-0 d-flex justify-content-center">
          <div className="card-sl ">
            <div className="card-image d-flex justify-content-center">
              <img src={item.Img} alt={item.Title} />
            </div>
            <a
              className="card-action"
              href="https://freefrontend.com/bootstrap-cards/"
            >
              <i className="fa fa-heart"></i>
            </a>
            <div className="card-heading">{item.Title}</div>
            <div className="card-text">{item.Description}</div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="asd">
      <div className="home"></div>
      <div className="formulario1">
        <button onClick={handleLogout}>{"<"}</button>
        <div className="d-flex justify-content-center">
          <h3 className="title-Sessionn d-flex justify-content-center">
            Noticias y eventos de ciudad
          </h3>
        </div>
        <div className="formulario card-body">
          <div className="form-group row justify-content-center ">
            <input type="text" className="form-control" />
          </div>
          <ul>{listItems}</ul>
        </div>
      </div>
    </div>
  );
};
