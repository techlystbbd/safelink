async function generate() {
  let url = document.getElementById("url").value;

  if (!url) return alert("Enter URL");

  let id = Math.random().toString(36).substring(2, 10);

  let data = await fetch("data.json").then(res => res.json());

  data[id] = url;

  document.getElementById("result").innerHTML =
    location.origin + "/s/#" + id;

  console.log("Manual add this to data.json:", `"${id}": "${url}"`);
}
