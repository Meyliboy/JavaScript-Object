const object = document.querySelector("#object");

const wInput = document.querySelector("#wInput");
const hInput = document.querySelector("#hInput");
const bgColor = document.querySelector("#bgColor");
const bRadius = document.querySelector("#bradius");

object.style.padding = "0 10px";

wInput.addEventListener("keyup", (e) => {
  object.style.width = e.target.value + "px";
});
hInput.addEventListener("keyup", (e) => {
  object.style.height = e.target.value + "px";
  object.style.border = "2px solid black";
});

bgColor.addEventListener("keyup", (e) => {
  function myFunction() {
    if (/[0-9]/gm.test(e.target.value)) {
      if (!/[#]/gm.test(e.target.value)) {
        e.target.value = "#" + e.target.value;
      }
      object.style.backgroundColor = "#" + e.target.value;
    } else {
      let nm = e.target.value;
      if (nm.includes("#")) {
        e.target.value = nm.slice(1);
      }
    }
    object.style.backgroundColor = e.target.value;
    object.style.border = "none";

    object.innerHTML = "BY MBY";
  }
  myFunction();
});
bRadius.addEventListener("keyup", (e) => {
  object.style.borderRadius = e.target.value + "px";
});
