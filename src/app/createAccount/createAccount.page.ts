import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {IonicModule} from '@ionic/angular';

@Component({
    standalone: true,
    selector: 'app-createAccount',
    templateUrl: './createAccount.page.html',
    styleUrls: ['./createAccount.page.scss'],
    imports: [IonicModule]
})
export class CreateAccountPage {
    constructor(private router: Router) {}

    createAccount(){
        this.router.navigate(['/login']);
    }
}