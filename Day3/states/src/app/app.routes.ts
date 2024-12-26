import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StatesComponent } from './pages/states/states.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SingleStateComponent } from './pages/single-state/single-state.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'states',component:StatesComponent},
    {path:'contact',component:ContactComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'states/:id',component:SingleStateComponent}
];
