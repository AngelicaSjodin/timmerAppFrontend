import { HttpClient } from "@angular/common/http";
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

    constructor(private router: Router,
        private http: HttpClient
    ) {}

    createAccount(){
        const user = {
            name: this.name,
            password: this.password
        };

        this.http.post('http://localhost:8080/users/register',user).subscribe({
            next: () => {
                alert('konto skapat');
                this.router.navigate(['/login']);
            },
            error: err => {
                console.error(err);
                alert('error, kunde inte skapa konto');
            }
        });
    }

    return(){
        this.router.navigate(['/login']);
    }
}