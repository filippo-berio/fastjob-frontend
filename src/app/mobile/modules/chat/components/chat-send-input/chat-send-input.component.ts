import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'fj-chat-send-input',
    templateUrl: './chat-send-input.component.html',
    styleUrls: ['./chat-send-input.component.scss'],
})
export class ChatSendInputComponent implements OnInit {
    @Output() send = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

}
