import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import {IonicModule} from '@ionic/angular';

@Component({
    standalone: true,
    selector: 'app-createAccount',
    templateUrl: './createAccount.page.html',
    styleUrls: ['./createAccount.page.scss'],
    imports: [IonicModule,FormsModule]
})
export class CreateAccountPage {

    name: string ="";
    password: string ="";

    constructor(private router: Router) {}

    createAccount(){
        this.router.navigate(['/login']);
    }
}