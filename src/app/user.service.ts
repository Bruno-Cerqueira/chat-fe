import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './int';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | null = null;
  userSelected$ = new BehaviorSubject<User|null>(null);

  constructor() { }
  setUser(user: User){
    this.user = user;
    this.userSelected$.next(this.user);
  }
  getUser(){
    return this.user;
  }
}
