import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ResponseObject } from '../_models/response-object';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  baseUrl = "http://localhost:5000/";
  http = inject(HttpClient);


  getResponse(chatObject: any) {
    return this.http.post<ResponseObject>(this.baseUrl + "api/" + "Chat", chatObject)
  }
}
