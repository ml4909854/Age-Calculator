const btn = document.getElementById("btn");
const birthDay = document.getElementById("birthDay");
const result = document.getElementById("result");

// Function to calculate age
function calculateAge() {
  const birthDayValue = birthDay.value;

  if (!birthDayValue) {
    result.textContent = "Please enter your birthday date!";
    result.style.color = "red";
    return;
  }

  const ageMessage = getAge(birthDayValue);
  result.textContent = ageMessage;
  result.style.color = "#333"; // Reset text color for valid input
}

// Function to calculate age based on date input
function getAge(birthDayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthDayValue);

  // Validate if input date is in the future
  if (birthdayDate > currentDate) {
    return "Your birthday date is in the future. Please enter a valid date.";
  }

  // Calculate age
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const birthMonth = birthdayDate.getMonth();
  const currentDay = currentDate.getDate();
  const birthDay = birthdayDate.getDate();

  // Adjust age if the birthday hasn't occurred yet this year
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }

  return `Your age is ${age} years old.`;
}

// Add event listener for the button
btn.addEventListener("click", calculateAge);
