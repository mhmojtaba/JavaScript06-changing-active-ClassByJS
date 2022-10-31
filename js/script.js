const li = document.getElementById("li").children;
// console.log(li);

/* method 1

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
*/

/* method 2 */
for (let i = 0; i < li.length; i++) {
  li[i].onclick = () => {
    for (let index = 0; index < li.length; index++) {
      li[index].classList.remove("active");
    }
    li[i].classList.add("active");
  };
}
