import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
myLogin: FormGroup;

constructor() {
this.myLogin = new FormGroup({
'email': new FormControl('',[
Validators.required,
Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
]),
'password': new FormControl('',Validators.required)
});
}
onLogin(){
console.log(this.myLogin);
}
ngOnInit() {
}

}
