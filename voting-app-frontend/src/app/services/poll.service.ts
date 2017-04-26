import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class PollService {

    constructor(private http: Http) {
    }

    getVoter(email): Observable<any[]> {
        return this.http.get('http://localhost:8080/voters').map((res: Response) => {
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
        return this.http.post('http://localhost:8080/voters', form).map((res: Response) => {
            return res.json();
        });
    }

    getPolls() {
        return this.http.get('http://localhost:8080/polls').map((res: Response) => {
            return res.json();
        });
    }

    createPoll(form: any) {
        return this.http.post('http://localhost:8080/polls', form).map((res: Response) => {
            return res.json();
        }).subscribe((poll: any) => {
            const optionA = {
                name: form.optionsA,
                description: form.optionsA,
                pollId: poll.id
            };
            this.http.post('http://localhost:8080/pollOptions', optionA).map((res: Response) => {
                return res.json();
            }).subscribe((savedOptionA) => {
                optionA['id'] = savedOptionA.id;
                const optionB = {
                    name: form.optionsB,
                    description: form.optionsB,
                    pollId: poll.id
                };
                this.http.post('http://localhost:8080/pollOptions', optionB).map((res: Response) => {
                    return res.json();
                }).subscribe((savedOptionB) => {
                    optionB['id'] = savedOptionB.id;
                    const optionC = {
                        name: form.optionsC,
                        description: form.optionsC,
                        pollId: poll.id
                    };
                    this.http.post('http://localhost:8080/pollOptions', optionC).map((res: Response) => {
                        return res.json();
                    }).subscribe((savedOptionC) => {
                        optionC['id'] = savedOptionC.id;
                        const optionD = {
                            name: form.optionsD,
                            description: form.optionsD,
                            pollId: poll.id
                        };
                        console.log(optionD);
                        this.http.post('http://localhost:8080/pollOptions', optionD).map((res: Response) => {
                            return res.json();

                        }).subscribe((savedOptionD) => {
                            optionD['id'] = savedOptionD.id;
                            optionA['count'] = 0;
                            optionB['count'] = 0;
                            optionC['count'] = 0;
                            optionD['count'] = 0;
                            const report = {
                                name: poll.name,
                                pollId: poll.id,
                                results: JSON.stringify([
                                    optionA,
                                    optionB,
                                    optionC,
                                    optionD
                                ])
                            };

                            this.createReport(report).subscribe();
                        });
                    });
                });
            });
        });
    }

    getPoll(id: any) {
        return this.http.get('http://localhost:8080/polls/' + id).map((res: Response) => {
            return res.json();
        });
    }

    getPollOptions(id: any) {
        return this.http.get('http://localhost:8080/pollOptions?pollId=' + id).map((res: Response) => {
            return res.json();
        });
    }

    vote(vote) {
        return this.http.post('http://localhost:8080/votes', vote).map((res: Response) => {
            return res.json();
        });
    }

    createReport(report) {
        return this.http.post('http://localhost:8081/reports', report).map((res: Response) => {
            return res.json();
        });
    }

    getReport(pollId) {
        return this.http.get('http://localhost:8081/reports/' + pollId).map((res: Response) => {
            return res.json();
        });
    }

    addVote(vote, pollId) {
        return this.http.post('http://localhost:8081/reports/' + pollId, vote).map((res: Response) => {
            return res.json();
        });
    }
}
