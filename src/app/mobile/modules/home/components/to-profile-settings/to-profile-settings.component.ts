import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'fj-to-profile-settings',
    templateUrl: './to-profile-settings.component.html',
    styleUrls: ['./to-profile-settings.component.scss'],
})
export class ToProfileSettingsComponent {

    constructor(
        private router: Router
    ) {
    }

    navigate() {
       this.router.navigateByUrl('/profile', {
           state: {
               openCategories: true
           }
       });
    }
}
