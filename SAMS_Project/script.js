function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (username === "" || password === "") {
    alert("Please enter username and password");
    return;
  }

  if (role === "student") {
    window.location.href = "student.html";
  } else if (role === "teacher") {
    window.location.href = "teacher.html";
  } else if (role === "admin") {
    window.location.href = "admin.html";
  }
}

function goHome() {
  window.location.href = "index.html";
}

function saveAttendance() {
  alert("Attendance submitted successfully (simulated).");
}

function approveRequest() {
  alert("Request approved and database updated (simulated).");
}

function rejectRequest() {
  alert("Request rejected successfully (simulated).");
}
