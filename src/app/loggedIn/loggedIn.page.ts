import { Component, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import {IonicModule} from '@ionic/angular';
import { FormsModule } from "@angular/forms";   
import { AuthService } from "../services/auth.service";

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

@Component({
    standalone: true,
    selector: 'app-loggedIn',
    templateUrl: './loggedIn.page.html',
    styleUrls: ['./loggedIn.page.scss'],
    imports: [IonicModule, FormsModule]
})
export class LoggedInPage implements AfterViewInit {
    city: string = '';
    map!: Map;

    constructor(private router: Router, private authService: AuthService) {}

    ngAfterViewInit(): void {
        this.map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: fromLonLat([18, 59]), //stockholm default
                zoom: 10
            })
        });
        
    }

    logout(){
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    search(){
        const cityName = this.city.trim().toLocaleLowerCase();

        const cities: { [key: string]: [number, number] } = {
            stockholm: [18.0686, 59.3293],
            göteborg: [11.9746, 57.7089],
            goteborg: [11.9746, 57.7089],
            mitthus:[17.050, 63.150]
        };

        const coords = cities[cityName];

        if(!coords){
            alert('Staden hittades inte');
            return;
        } 

        this.map.getView().animate({
            center: fromLonLat(coords),
            zoom: 12,
            duration: 1000
        });
    }

}