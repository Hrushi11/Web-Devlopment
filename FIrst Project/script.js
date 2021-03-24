let tip;
let tipamt;
document.querySelector("#calculate").addEventListener("click", function () {
  const billamt = document.querySelector("#billamt").value;
  const people = document.querySelector("#peopleamt").value;
  const service = document.querySelector("#serviceQual").value;

  if (billamt == "" || people == "" || service == 0)
    alert("Please fill all the fields");
  else if (service == 1) tip = 0.1 * billamt;
  else if (service == 2) tip = 0.07 * billamt;
  else if (service == 3) tip = 0.05 * billamt;
  else if (service == 4) tip = 0.02 * billamt;
  else if (service == 5) tip = 0.01 * billamt;

  tipamt = tip / people;

  document.querySelector("#tip").textContent = tipamt;
});
