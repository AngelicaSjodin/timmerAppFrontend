import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {IonicModule} from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
    standalone: true,
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    imports: [IonicModule,FormsModule]
})
export class LoginPage {

    name: string ='';
    password: string ='';

    constructor(private router: Router,private auth: AuthService,private http: HttpClient) {}

    login(): void{

        this.http.post<{message: string}>(
            'http://localhost:8080/users/login',
            {name: this.name, password: this.password}
        ).subscribe({
            next:(res)=>{
                console.log("ok:",res.message);
                this.auth.login();
                this.router.navigateByUrl('/loggedIn');
            },
            error: (err: any) => {
                console.log("fail:",err.error?.message ?? err);
            }
        });
    }

    create(): void{
        this.router.navigate(['/createAccount']);
    }
}