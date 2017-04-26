import {Component, OnInit} from '@angular/core';
import {PollService} from '../services/poll.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
    selector: 'app-voting',
    templateUrl: './voting.component.html',
    styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
    private name: string;
    private poll: string;
    private options: any[];

    constructor(private router: Router, private route: ActivatedRoute, private pollService: PollService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.pollService.getPoll(params['id']).subscribe((poll: any) => {
                this.name = poll.name;
                this.poll = poll.id;
                this.pollService.getPollOptions(params['id']).subscribe((options: any) => {
                    const processedOptions = [];
                    for (const option of options) {
                        if (option.pollId === params['id']) {
                            processedOptions.push(option);
                        }
                    }
                    this.options = processedOptions;
                });
            });
        });
    }

    vote(pollOption) {
        const voter: any = JSON.parse(localStorage.getItem('voter'));
        const vote = {
            voter: voter.id,
            pollOption: pollOption,
            poll: this.poll
        };
        this.pollService.vote(vote).subscribe((registeredVote: any) => {
            console.log(registeredVote);
            this.pollService.addVote(vote, this.poll).subscribe(() => {
                this.router.navigate(['report', this.poll]);
            });
        });
    }
}
