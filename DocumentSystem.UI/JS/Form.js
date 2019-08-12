//export default class Form {
//    constructor(form, onAddClick) {
//        this.form = form;

//        let submitBtn = document.getElementById('btnAddUser');

//        submitBtn.addEventListener('click', (e) => {
//            e.preventDefault();

//            if (!this.CheckValidity()) {
//                return;
//            }

//            onAddClick(this.GetData());

//            this.form.reset();
//        });
//    }

//    CheckValidity() {
//        let validForm = true;

//        let inputs = Array.from(this.form.querySelectorAll('input'));

//        inputs.forEach(input => {
//            if (!input.validity.valid) {
//                input.classList.add('invalid');
//                validForm = false;
//            } else {
//                input.className = 'valid';
//            }            
//        });

//        return validForm;
//    }

//    GetData() {
//        let newUser = {};
//        let inputs = this.form.querySelectorAll('input[name]');
//        inputs.forEach(item => {
//            newUser[item.name] = item.value;
//        });

//        return newUser;
//    }
//}