function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboardPage").style.display = "block";
  } else {
    document.getElementById("loginMessage").innerText = "Invalid login!";
  }
}

function logout() {
  location.reload();
}

function showSection(section) {
  document.getElementById("personsSection").style.display =
    section === "persons" ? "block" : "none";
  document.getElementById("aboutSection").style.display =
    section === "about" ? "block" : "none";
}

function savePerson() {
  const f = fname.value;
  const m = mname.value;
  const l = lname.value;
  const a = age.value;
  const e = email.value;

  if (!f || !l || !a || !e) {
    alert("Please fill out required fields");
    return;
  }

  const row = `
    <tr>
      <td>${f}</td>
      <td>${m}</td>
      <td>${l}</td>
      <td>${a}</td>
      <td>${e}</td>
    </tr>
  `;

  document.getElementById("tableBody").innerHTML += row;

  fname.value = mname.value = lname.value = age.value = email.value = "";
}
