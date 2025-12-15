import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {IonicModule} from '@ionic/angular';

@Component({
    standalone: true,
    selector: 'app-loggedIn',
    templateUrl: './loggedIn.page.html',
    styleUrls: ['./loggedIn.page.scss'],
    imports: [IonicModule]
})
export class LoggedInPage {
    constructor(private router: Router) {}

    logout(){
        this.router.navigate(['/login']);
    }

    search(){
        this.router.navigate(['/login']);
    }
}