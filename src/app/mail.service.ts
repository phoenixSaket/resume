import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendMail(email: string, message: string): Promise<any> {

    return new Promise((resolve, reject) => {
      
      let sendMail = this.http.post("https://reviews-be.cyclic.app/mail/send", {email: email, message: message}).toPromise();

      sendMail.then((response: any) => {
        if (response.opstatus == 0) {
          resolve(true);
        }
      }, (error: any) => {
        reject(true);
      })
    });

  }
}
