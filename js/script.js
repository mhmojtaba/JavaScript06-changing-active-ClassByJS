const li = document.getElementById("li").children;
// console.log(li);

for (let i = 0; i < li.length; i++) {
  li[i].onclick = (e) => {
    // console.log(e);
    let n = 0;
    while (n < li.length) {
      li[n++].className = "";
    }
    // console.log(n);
    e.target.className = "active";
  };
}
