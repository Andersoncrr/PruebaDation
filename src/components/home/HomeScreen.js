import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { News } from "../../const/News";
import "./HomeScreen.css";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(null);
  const handleLogout = () => {
    dispatch(startLogout());
  };

  const searchText = () => {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  const listItems = News.map((item) => (
    <li className="list">
      <div className="container " style={{ marginTop: "50px" }}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-0 d-flex justify-content-center">
            <div className="card-sl ">
              <div className="card-image d-flex justify-content-center">
                <img src={item.Img} alt={item.Title} />
              </div>
              
              <div className={liked ? "card-click" : "card-action"} onClick={ () => setLiked(!liked)} >
                <i className="fa fa-heart"></i>
              </div>
              <div className="card-heading">{item.Title}</div>
              <div className="card-text">{item.Description}</div>
            </div>
          </div>
        </div>
      </div>
    </li>
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
            <input className="form-control" type="text" id="myInput" onKeyUp={searchText} placeholder="Digita una palabra..." />
          </div>
          <ul id="myUL">{listItems}</ul>
        </div>
      </div>
    </div>
  );
};
