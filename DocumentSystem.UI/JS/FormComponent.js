export default class FormComponent {
    constructor(onAddClick) {
        this.fields = [];

        this.form = document.createElement('form');

        this.onAddClick = onAddClick;
    }

    AddField(field) {
        this.fields.push(field);
    }

    Build() {
        this.form.classList.add('form-container', 'card-body');
        let submitBtn = document.createElement('button');
        submitBtn.classList.add('btn', 'btn-primary');

        submitBtn.innerText = 'Submit';
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();

            if (!this.CheckValidity()) {
                return;
            }

            this.onAddClick(this.GetData());

            this.form.reset();
        })

        for (let field of this.fields) {
            let fieldContainer = document.createElement('div');
            fieldContainer.classList.add('form-group');

            fieldContainer.innerHTML =
                `
                    <label>${field.title}</label>
                    <input name="${field.name}" class="form-control" required type="${field.type}" placeholder="${field.placeholder}"/>
                `;
            this.form.appendChild(fieldContainer);
        }

        this.form.appendChild(submitBtn);

        return this.form;
    }

    CheckValidity() {
        let validForm = true;

        let inputs = Array.from(this.form.querySelectorAll('input'));

        inputs.forEach(input => {
            if (!input.validity.valid) {
                input.classList.add('invalid');
                validForm = false;
            } else {
                input.classList.remove('invalid');
                input.classList.add('valid');
            }
        });

        return validForm;
    }

    GetData() {
        let formData = {};
        let inputs = this.form.querySelectorAll('input[name]');
        inputs.forEach(item => {
            formData[item.name] = item.value;
        });

        return formData;
    }
}