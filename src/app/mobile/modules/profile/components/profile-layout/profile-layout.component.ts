import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'fj-profile-layout',
    templateUrl: './profile-layout.component.html',
    styleUrls: ['./profile-layout.component.scss'],
})
export class ProfileLayoutComponent implements OnInit {
    @Input() imagePath: string = 'https://www.w3schools.com/howto/img_avatar.png';

    constructor() {
    }

    ngOnInit() {
    }

}
