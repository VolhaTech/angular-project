import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthRepositoryService {
  constructor(private readonly http: HttpClient) { }

  signIn() {
    return this.http.get('/movies');
  }
}