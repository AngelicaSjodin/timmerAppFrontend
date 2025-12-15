import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {IonicModule} from '@ionic/angular';

@Component({
    standalone: true,
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    imports: [IonicModule]
})
export class LoginPage {
    constructor(private router: Router) {}

    login(){
        this.router.navigate(['/home']);
    }

    create(){
        this.router.navigate(['/createAccount']);
    }
}