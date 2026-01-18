let total = 0;
let selesai = 0;

function addActivity() {
  const input = document.getElementById("activityInput");
  if (input.value === "") {
    alert("Aktivitas tidak boleh kosong!");
    return;
  }

  const li = document.createElement("li");

  const text = document.createElement("span");
  text.innerText = input.value;
  text.onclick = () => {
    text.classList.toggle("done");
    selesai += text.classList.contains("done") ? 1 : -1;
    update();
  };

  const btn = document.createElement("button");
  btn.innerText = "Hapus";
  btn.onclick = () => {
    if (text.classList.contains("done")) selesai--;
    li.remove();
    total--;
    update();
  };

  li.append(text, btn);
  document.getElementById("activityList").appendChild(li);

  total++;
  update();
  input.value = "";
}

function update() {
  document.getElementById("total").innerText = total;
  document.getElementById("done").innerText = selesai;
}