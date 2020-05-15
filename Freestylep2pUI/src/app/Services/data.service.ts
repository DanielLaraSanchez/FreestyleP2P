import { Injectable } from '@angular/core';
import { User } from './Models/userModel';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  freestylers: User[] = [
    { Name: "Daniel",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    { Name: "Jose",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    { Name: "Loida",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    { Name: "Monica",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    { Name: "Nira",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    { Name: "Laura",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    { Name: "Miguel",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    { Name: "James",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    { Name: "Alvin",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    // {Id:34, Name: "David",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    // {Id:45, Name: "Peter",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    // {Id:34, Name: "Paul",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    // {Id:54, Name: "Anthony",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    // {Id:36, Name: "Antonio",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    // {Id:43, Name: "Andrew",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    // {Id:12, Name: "George",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    // {Id:22, Name: "Ciaran",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    // {Id:20, Name: "Alfredo",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20}
    
  ]

  readonly URL: string = 'https://batallademcs.azurewebsites.net/api';

  constructor(public _http: HttpClient) { }


  public createUser(user: User){
    return this._http.post(`${this.URL}/User/addUser`, user)
  }


  public logIn(user: User) {
    return this._http.post(`${this.URL}/User/login/`, user)
 
  }

  public getUsers(){
    return this._http.get(`${this.URL}/User/getUsers`)
  }

  public getUser(id: string){
    return this._http.post(`${URL}/User/getUser`, id)
  }








}
