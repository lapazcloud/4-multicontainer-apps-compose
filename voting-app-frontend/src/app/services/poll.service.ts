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
}
