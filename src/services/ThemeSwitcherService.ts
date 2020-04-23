import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class ThemeSwitcherService{
    private theme: BehaviorSubject<String>;
 
    constructor() {
        this.theme = new BehaviorSubject('dark-theme');
    }
 
    setActiveTheme(val: String) {
        this.theme.next(val);
    }
 
    getActiveTheme() {
        return this.theme.asObservable();
    }
}