/*
 * Q4: Custom Form Builder (Forms + Classes)
 * FormBuilder takes an array of field objects and generates a form using innerHTML.
 * getFormData() returns all entered values as an object when "Submit" is clicked.
 */

class FormBuilder {
    constructor(fields, container) {
        this.fields = fields;       // e.g. [{ type: 'text', label: 'Username' }]
        this.container = container; // element where the form is rendered
    }

    // Turn a label like "Date of Birth" into a usable name like "dateOfBirth"
    static toFieldName(label) {
        return label
            .toLowerCase()
            .replace(/[^a-z0-9 ]/g, "")
            .split(" ")
            .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
            .join("");
    }

    // Build the form markup with innerHTML
    render() {
        const fieldsMarkup = this.fields
            .map((field) => {
                const name = FormBuilder.toFieldName(field.label);
                return `
                <label for="${name}">${field.label}</label>
                <input type="${field.type}" id="${name}" name="${name}">`;
            })
            .join("");

        this.container.innerHTML = `
            <form id="dynamicForm">
                ${fieldsMarkup}
                <button type="submit">Submit</button>
            </form>`;

        this.form = this.container.querySelector("#dynamicForm");
        return this.form;
    }

    // Collect every input value into a plain object { fieldName: value }
    getFormData() {
        const data = {};
        this.form.querySelectorAll("input").forEach((input) => {
            data[input.name] = input.type === "checkbox" ? input.checked : input.value;
        });
        return data;
    }
}

// Field configuration for the generated form
const fieldConfig = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" },
    { type: "number", label: "Age" },
    { type: "date", label: "Date of Birth" },
    { type: "checkbox", label: "Subscribe" },
];

const builder = new FormBuilder(fieldConfig, document.getElementById("formContainer"));
const form = builder.render();

// On submit, show the collected data as JSON
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = builder.getFormData();
    console.log(formData);
    document.getElementById("output").textContent = JSON.stringify(formData, null, 2);
});
