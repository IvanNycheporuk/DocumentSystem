import XHRService from './XHRService.js';
import Table from './Table.js';
import FormComponent from './FormComponent';
import Modal from './Modal';
import LoginForm from './LoginForm';

const host = 'http://localhost:51622/api/';

class App {
    constructor(el) {
        this.el = el;    

        this.LoadUsersPage = this.LoadUsersPage.bind(this);
        this.LoginPage = this.LoginPage.bind(this);

        this.ProcessRoute();       
    }

    CreateHeader() {
        let header = document.createElement('div');
        header.classList.add('header');

        let title = document.createElement('h1');
        title.innerHTML = "Manage users";

        let showModalBtn = document.createElement('a');
        showModalBtn.classList.add('modal-btn', 'btn', 'btn-info', 'test', 'mb-3');
         showModalBtn.innerText = 'Add user';
         showModalBtn.addEventListener('click', () => {
             document.querySelector('.modalBackdrop').classList.add("visible");             
         });

        header.appendChild(title);

        this.el.appendChild(showModalBtn);
        this.el.appendChild(header);
     }

    CreateMain() {
        let main = document.createElement('div');
        main.classList.add('main');

        this.el.appendChild(main);
    }

    LoadUsers() {
        let xhr = this.CreateXHRService();
        let tableContainer = document.querySelector('.main');        

        xhr.SendRequest('users/getusers', 'get', null, data => {
            let table = new Table();
            table.AddColumn({ title: 'Id', field: 'Id' });
            table.AddColumn({ title: 'Name', field: 'Name' });
            table.AddColumn({ title: 'Second Name', field: 'SecondName' });
            table.AddColumn({ title: 'Email', field: 'Email'} );

            table.AddColumn({
                title: 'Controls',
                builder: this.AddControls.bind(this)
            });

            while (tableContainer.firstChild) {
                tableContainer.removeChild(tableContainer.firstChild);
            }

            tableContainer.appendChild(table.Build(data));
        })
    }

    RemoveUser(id, el) {
        let xhr = this.CreateXHRService();
       
        xhr.SendRequest('users/RemoveUser', 'post', JSON.stringify(id.Id), () => {
            el.target.closest('tr').remove();
            alert('user has been deleted');            
        }, () => { alert('not working!')})
    }

    AddUser(user) {
        let xhr = this.CreateXHRService();

        xhr.SendRequest('users/AddUser', 'post', JSON.stringify(user), () => {
            this.LoadUsersPage();
        }, () => { alert('not working!') })

        xhr.SendRequest();
    }

    LoginUser(user) {
        let xhr = this.CreateXHRService();

        xhr.SendRequest('users/LoginUser', 'post', JSON.stringify(user), () => {
            this.LoadUsers();
        }, () => { alert('not working!') })

        xhr.SendRequest();
    }

    AddControls(tableData, data) {
        let btn = document.createElement('button');
        btn.classList.add('btn', 'btn-danger');
        btn.innerText = 'remove';

        btn.addEventListener('click', (e) => {
            this.RemoveUser(data, e);
        });

        tableData.appendChild(btn);
    }

    CreateXHRService() {
        return new XHRService(host);
    }

    LoadUsersPage() {
        this.CreateHeader();
        this.CreateMain();
        this.LoadUsers();

        let modal = new Modal();
        let formComponent = new FormComponent(this.AddUser.bind(this));
        formComponent.AddField({ title: 'User name', name: 'Name', placeholder: 'please type your name', type: 'text' });
        formComponent.AddField({ title: 'Second name', name: 'secondName', placeholder: 'please type second name', type: 'text' });
        formComponent.AddField({ title: 'Email', name: 'email', placeholder: 'please type email', type: 'email' });
        formComponent.AddField({ title: 'Password', name: 'password', placeholder: 'please type your name', type: 'password' });

        modal.SetContent(formComponent.Build());

        document.body.appendChild(modal.Build());
    }

    Navigate(pathname) {
        window.history.pushState(
            {},
            pathname,
            window.location.origin + pathname
        );

        this.ProcessRoute();
    }

    LoginPage() {
        let loginForm = new LoginForm(() => { this.Navigate('/users').bind(this) });

        loginForm.AddField({ title: 'Your name', name: 'Name', placeholder: 'please type your name', type: 'text' });
        loginForm.AddField({ title: 'Password', name: 'passowrd', placeholder: 'please type your password', type: 'password' });
        
        document.getElementById('app').appendChild(loginForm.Build())
    }

    ProcessRoute() {
        document.getElementById('app').innerHTML = '';
        const routes = {
            '/': this.LoginPage,
            '/users': this.LoadUsersPage,
        };

        let key = window.location.pathname;

        if (key in routes) {
            routes[key]();
        } else {
            throw new Error('Invalid url');
        }
    }
       
}

let app = document.getElementById('app');
new App(app);