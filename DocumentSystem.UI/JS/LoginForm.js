import FormComponent from "./FormComponent";

export default class LoginForm extends FormComponent {
    constructor(onAddClick) {
        super(onAddClick);
        this.onAddClick = onAddClick;
    }

    Build() {
        let form = super.Build();

        form.classList.add('login-form');

        let link = document.createElement('a');
        let submitBtn = form.querySelector('button');

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();           
        })

        link.classList.add('link-new-acc');
        link.innerHTML = 'dont have an account yet, get a new one :)';

        link.addEventListener('click', () => { this.onAddClick() })

        form.appendChild(link);

        return form;
    }

}