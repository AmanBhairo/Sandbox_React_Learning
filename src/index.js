import React from "react";
import reactDom from "react-dom";

var curentDate = new Date();
var time = curentDate.getHours();

const currentStyle = {
  color: "red"
};

var txt = "Good Morning!!";
console.log(time);

if (time < 12) {
  currentStyle.color = "red";
} else if (time < 18) {
  currentStyle.color = "green";
  txt = "Good Afternoon!!";
} else {
  currentStyle.color = "blue";
  txt = "Good Night!!";
}
reactDom.render(
  <h1 className="heading" style={currentStyle}>
    {txt}
  </h1>,
  document.getElementById("root")
);
