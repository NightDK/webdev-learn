var array = [],
  searchNumber = " ",
  isFound = false,
  i, fullmass = " ",
  N = 10,
  inputError,
  pattern = /^[\s]+$/;

for (i = 0; i < N; i++) {
  array[i] = Math.floor(Math.random() * (15 - 0 + 0)) + 0;
  fullmass = fullmass + array[i] + " ";
}

do {
  searchNumber = prompt("search number: ");
  inputError = false;
  if (searchNumber !== null) {
    if ((searchNumber == "") || (isNaN(searchNumber)) || (pattern.test(searchNumber))) {
      alert("Error");
      inputError = true;
    }
  }
} while (inputError == true);

if (searchNumber !== null) {
  for (i = 0; i < N; i++) {
    if (array[i] == searchNumber) {
      isFound = true;
    }
  }
  alert(fullmass);

  if (!isFound) {
    alert("Element " + searchNumber + " not found");
  } else {
    alert("Element " + searchNumber + " is found!");
  }
}
