import {Component, OnInit} from '@angular/core';
import {PollService} from '../services/poll.service';
import {ActivatedRoute, Params, Route} from '@angular/router';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
    results: any[];
    name: string;
    view: any[] = [700, 300];

    colorScheme = {
        domain: ['#5AA454', '#673ab7', '#ffdf68', '#6682c7']
    };

    constructor(private pollService: PollService, private route: ActivatedRoute) {
        this.results = [];
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            console.log(params['id']);
            this.pollService.getReport(params['id']).subscribe((data: any) => {
                console.log(data);
                const results = [];
                for (const entry of JSON.parse(data.results)) {
                    results.push({
                        name: entry.name,
                        value: entry.count
                    });
                }
                this.results = results;
                this.name = data.name;
            });
        });
    }

    onSelect(event)  {
        console.log(event);
    }

}
