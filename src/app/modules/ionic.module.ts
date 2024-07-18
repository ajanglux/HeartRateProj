import { NgModule } from "@angular/core";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { 
    IonHeader, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton, 
    IonTitle, 
    IonContent, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent, 
    IonCard, 
    IonButton,
    IonApp, 
    IonSplitPane, 
    IonMenu, 
    IonList, 
    IonListHeader, 
    IonNote, 
    IonMenuToggle, 
    IonItem, 
    IonIcon, 
    IonLabel, 
    IonRouterOutlet, 
    IonRouterLink
    } from '@ionic/angular/standalone';

const var_modules = [
    RouterLink,
    RouterLinkActive,
    IonHeader, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton, 
    IonTitle, 
    IonContent, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent, 
    IonCard, 
    IonButton, 
    IonApp, 
    IonSplitPane, 
    IonMenu, 
    IonList, 
    IonListHeader, 
    IonNote, 
    IonMenuToggle, 
    IonItem, 
    IonIcon, 
    IonLabel, 
    IonRouterOutlet, 
    IonRouterLink
]

@NgModule({
    imports: var_modules,
    exports: var_modules,
})
export class IonicModules{}