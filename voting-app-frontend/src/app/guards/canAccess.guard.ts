import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanAccessGuard implements CanActivate {

    constructor() {}

    canActivate() {
        if (localStorage.getItem('voter')) {
            return true;
        } else {
            return false;
        }
    }
}
