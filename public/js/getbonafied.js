const statusBox = document.querySelector(".status");
const getBonafied = () => {
  fetch("http://localhost:5000/api/getbonafied")
    .then((res) => res.json())
    .then((data) => {
      alert(`Info\n${data.message}`);
      window.location.href="/user/bonafied"
    });
};
fetch("http://localhost:5000/api/checkbonafiedstatus")
  .then((res) => res.json())
  .then((data) => {
    if (data.status != "") {
      statusBox.style.display = "block";
      statusBox.innerHTML = data.message;
      statusBox.classList.add(data.status);
    } else {
        statusBox.style.display = "none";
        statusBox.innerHTML = "";
        statusBox.classList.remove("pending");
        statusBox.classList.remove("reject");
    }
  });
