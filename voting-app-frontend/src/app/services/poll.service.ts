import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class PollService {

    constructor(private http: Http) {
    }

    getVoter(email): Observable<any[]> {
        return this.http.get('http://localhost:9000/voters').map((res: Response) => {
            const voters = res.json();
            for (const voter of voters) {
                if (voter.email === email) {
                    return voter;
                }
            }
            return false;
        });
    }

    addVoter(form): Observable<any[]> {
        return this.http.post('http://localhost:9000/voters', form).map((res: Response) => {
            return res.json();
        });
    }

    getPolls() {
        return this.http.get('http://localhost:9000/polls').map((res: Response) => {
            return res.json();
        });
    }

    createPoll(form: any) {
        return this.http.post('http://localhost:9000/polls', form).map((res: Response) => {
            return res.json();
        }).subscribe((poll: any) => {
            console.log(poll.id);
            const optionA = {
                name: form.optionsA,
                description: form.optionsA,
                pollId: poll.id
            };
            this.http.post('http://localhost:9000/pollOptions', optionA).map((res: Response) => {
                return res.json();
            }).subscribe();
            const optionB = {
                name: form.optionsB,
                description: form.optionsB,
                pollId: poll.id
            };
            this.http.post('http://localhost:9000/pollOptions', optionB).map((res: Response) => {
                return res.json();
            }).subscribe();
            const optionC = {
                name: form.optionsC,
                description: form.optionsC,
                pollId: poll.id
            };
            this.http.post('http://localhost:9000/pollOptions', optionC).map((res: Response) => {
                return res.json();
            }).subscribe();
            const optionD = {
                name: form.optionsD,
                description: form.optionsD,
                pollId: poll.id
            };
            this.http.post('http://localhost:9000/pollOptions', optionD).map((res: Response) => {
                return res.json();
            }).subscribe();
        });
    }

    getPoll(id: any) {
        return this.http.get('http://localhost:9000/polls/' + id).map((res: Response) => {
            return res.json();
        });
    }

    getPollOptions(id: any) {
        return this.http.get('http://localhost:9000/pollOptions?pollId=' + id).map((res: Response) => {
            return res.json();
        });
    }
}
