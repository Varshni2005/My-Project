// Mock data for classes, bookings, and attendance
const classes = [
  { id: 1, name: "Yoga", time: "Monday, 9:00 AM" },
  { id: 2, name: "Pilates", time: "Tuesday, 10:00 AM" },
  { id: 3, name: "Zumba", time: "Wednesday, 7:00 PM" }
];

const bookings = [
  { id: 1, classId: 1, date: "2024-12-25" },
  { id: 2, classId: 2, date: "2024-12-26" },
  { id: 3, classId: 3, date: "2024-12-27" }
];

const attendance = [
  { id: 1, classId: 1, date: "2024-12-25", attendees: ["John", "Jane"] },
  { id: 2, classId: 2, date: "2024-12-26", attendees: ["Bob", "Alice"] },
  { id: 3, classId: 3, date: "2024-12-27", attendees: ["Mike", "Emma"] }
];

// Function to populate classes table
function populateClassesTable() {
  const classesTable = document.getElementById("classes-table");
  const classesTbody = classesTable.tBodies[0];

  classes.forEach((cls) => {
    const row = classesTbody.insertRow();
    const classNameCell = row.insertCell();
    const timeCell = row.insertCell();

    classNameCell.textContent = cls.name;
    timeCell.textContent = cls.time;
  });
}

// Function to populate bookings form
function populateBookingsForm() {
  const classSelect = document.getElementById("class-name");

  classes.forEach((cls) => {
    const option = document.createElement("option");
    option.value = (link unavailable);
    option.textContent = cls.name;

    classSelect.appendChild(option);
  });
}

// Function to handle booking form submission
function handleBookingFormSubmission(event) {
  event.preventDefault();

  const classId = document.getElementById("class-name").value;
  const date = document.getElementById("booking-date").value;

  // TO DO: Send booking data to server-side API
  console.log(`Booking submitted: Class ID ${classId}, Date ${date}`);
}

// Function to populate attendance table
function populateAttendanceTable() {
  const attendanceTable = document.getElementById("attendance-table");
  const attendanceTbody = attendanceTable.tBodies[0];

  attendance.forEach((att) => {
    const row = attendanceTbody.insertRow();
    const classNameCell = row.insertCell();
    const dateCell = row.insertCell();
    const attendeesCell = row.insertCell();

    classNameCell.textContent = classes.find((cls) => (link unavailable) === att.classId).name;
    dateCell.textContent = att.date;
    attendeesCell.textContent = att.attendees.join(", ");
  });
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  populateClassesTable();
  populateBookingsForm();
  populateAttendanceTable();

  const bookingForm = document.getElementById("booking-form");
  bookingForm.addEventListener("submit", handleBookingFormSubmission);
});
