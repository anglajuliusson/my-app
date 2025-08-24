import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ConvertionComponent } from './Convertion/convertion.component';
import { DescriptionComponent } from './Description/description.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'convertion', component: ConvertionComponent },
    { path: 'description', component: DescriptionComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
