import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public name: string = "";
  public email: string = "";
  public subject: string = "";
  public message: string = "";

  public emailObj: any =  {
    sending: false,
    sent: false,
    tried: false,
    hasError: false
  }

  constructor(private mail: MailService) { }

  valueChanged(event: any, message: string) {
    const value = event?.target?.value || "";

    switch (message) {
      case "name":
        this.name = value;
        break;
      case "email":
        this.email = value;
        break;
      case "subject":
        this.subject = value;
        break;
      case "message":
        this.message = value;
        break;
      default:
        break;
    }
  }

  sendMessage(event: any) {
    event.preventDefault();
    this.emailObj.tried = true;
    this.emailObj.sending = true;

    let message = ":: Name :: " + this.name + "<br> :: Email :: "+ this.email + "<br> :: Subject :: " + this.subject + "<br> :: Message :: " + this.message;
    let email = "develope.saket@gmail.com";

    this.mail.sendMail(email, message).then((response: any) => {
      this.emailObj.sent = true;
      this.emailObj.sending = false;
    }).catch((err: any) => { 
      this.emailObj.sent = false;
      this.emailObj.sending = false;
    });
  }

  getEmailText(): string {
    let text = "Send Message";

    if (this.emailObj.sending) {
      text = "Sending...";
    } else if (this.emailObj.sent) {
      text = "Sent !";
    } else if (this.emailObj.tried && !this.emailObj.sending) {
      text = "Error !";
    }

    return text;
  }

  reset() {
    this.name = "";
    this.email = "";
    this.subject = "";
    this.message = "";
  }

  getEmailClass(currentState: string): string {
    let string = "";

    switch (currentState) {
      case "Sending...":
        string = "sending";
        break;
      case "Sent !":
        string = "sent";
        break;
      case "Error !":
        string = "error";
        break;
      default:
        break;
    }

    return string;
  }

}
