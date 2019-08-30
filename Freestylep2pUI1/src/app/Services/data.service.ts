import { Injectable } from '@angular/core';
import { User } from './Models/userModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  freestylers: User[] = [
    {Id:1, Name: "Daniel",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:3, Name: "Jose",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:4, Name: "Loida",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:5, Name: "Monica",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:9, Name: "Nira",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:11, Name: "Laura",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:23, Name: "Miguel",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:45, Name: "James",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:21, Name: "Alvin",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:34, Name: "David",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:45, Name: "Peter",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:34, Name: "Paul",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:54, Name: "Anthony",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:36, Name: "Antonio",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:43, Name: "Andrew",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:12, Name: "George",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:22, Name: "Ciaran",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20},
    {Id:20, Name: "Alfredo",EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password:"May", Points:20}
    
  ]

  constructor() { }
}
