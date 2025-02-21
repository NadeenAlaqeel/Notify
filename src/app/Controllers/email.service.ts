import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
  
  sendEmail(email : String ,title: String ,message: String): Observable<string> {

    console.log(`Sending email to ${email}...`);
    
    // Simulating email send delay
    return of(`Email was successfully sent to ${email} with the subject '${title}'. Details: ${message}`).pipe(
      delay(2000) // Simulate a 2-second delay
    );
  }
}
