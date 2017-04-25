import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { PollService } from '../services/poll.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-create-poll',
    templateUrl: 'create-poll.component.html'
})
export class CreatePollComponent implements OnInit {
    @Output() created: EventEmitter<string> = new EventEmitter<string>();
    private poll;

    constructor(private pollService: PollService, private router: Router) { }

    ngOnInit() {
        this.poll = {
            name: '',
            options: ['', '', '', '']
        };
    }

    createPoll(form, valid) {
        this.pollService.createPoll(form);
        this.created.emit('created');
    }


}
