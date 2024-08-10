// Import statements
import { getRoles, getCompanies } from "./modules/salaryData.js";
import { getAverageSalaryByRole, getAverageSalaryByCompany, getSalaryAtCompany, getIndustryAverageSalary } from "./modules/workAroundModule.js";
import { formatNumber } from "./modules/utilities.js";

// Gets companies and roles using the salaryData module
const companies = getCompanies();
const roles = getRoles();

// Creates input buttons for every company and role represented in the data
renderInputButtons(companies, "company");
renderInputButtons(roles, "role");

// Creates a new <section> with radio inputs based on the data provided in the labels array
function renderInputButtons(labels, groupName) {
  const container = document.createElement('section');
  container.setAttribute('id', `${groupName}Inputs`);

  let header = document.createElement('h3');
  header.innerText = `Select a ${groupName}`;
  container.appendChild(header);

  labels.forEach(label => { 
    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'option');

    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'radio');
    inputElement.setAttribute('name', groupName);
    inputElement.setAttribute('value', label);
    divElement.appendChild(inputElement);

    // Create a label for that radio input element.
    let labelElement = document.createElement('label');
    labelElement.setAttribute('for', label);
    labelElement.innerText = label;
    divElement.appendChild(labelElement);

    // Update the results when the input is selected.
    inputElement.addEventListener('click', updateResults);

    container.appendChild(divElement);
  });

  document.querySelector('main').prepend(container);
}

function updateResults() {
  // Gets the current selected company and role from the radio button inputs
  const company = document.querySelector("input[name='company']:checked").value;
  const role = document.querySelector("input[name='role']:checked").value;

  // If either the company or role is unselected, return
  if (!company || !role) { return; }

  // Uses the workAroundModule functions to calculate the needed data
  const averageSalaryByRole = formatNumber(getAverageSalaryByRole(role));
  const averageSalaryByCompany = formatNumber(getAverageSalaryByCompany(company));
  const salary = formatNumber(getSalaryAtCompany(role, company));
  const industryAverageSalary = formatNumber(getIndustryAverageSalary());

  // Renders them to the screen
  document.getElementById("salarySelected").innerText = `The salary for ${role}s at ${company} is $${salary}.`;
  document.getElementById("salaryAverageByRole").innerText = `The industry average salary for ${role} positions is $${averageSalaryByRole}.`
  document.getElementById("salaryAverageByCompany").innerText = `The average salary at ${company} is $${averageSalaryByCompany}.`;
  document.getElementById("salaryAverageIndustry").innerText = `The average salary in the tech industry is $${industryAverageSalary}.`
}