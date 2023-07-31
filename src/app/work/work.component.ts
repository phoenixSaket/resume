import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  public projects = [
    { title: 'Analyzer (Advanced Reviews Dashboard)', description: 'An advanced analysis full stack PWA for comparative analysis of apps from Google Play/ Apple App Store based on reviews and ratings for the apps which can generate charts, word cloud. Sentiment word clouds, add/ compare/ delete any app that is available on Google Play/ App Store.', link: 'https://phoenixSaket.github.io/analyzer', stack: ["Angular", "NodeJS", "Express"] },
    { title: 'Reviews Dashboard', description: 'An analysis full stack web app for comparative analysis of apps from Google Play/ Apple App Store based on reviews and ratings for the apps which can generate charts, word cloud. Sentiment word clouds, add/ compare/ delete any app that is available on Google Play/ App Store.', link: 'https://phoenixSaket.github.io/reviews', stack: ["Angular", "NodeJS", "Express"] },
    { title: 'Viva Farms', description: 'An UI-only website for a client\'s website for their farmhouse with personally designed UI and animations.', link: 'https://phoenixSaket.github.io/viva-farms', stack: ["Angular"] },
    { title: 'Bill Printer Standalone App', description: 'A full stack Point-of-Sale standalone app for a client to print bills for their customers with a custom UI and animations with inventory, customer, bill creation and management ', link: 'https://github.com/phoenixSaket/bill-printer', stack: ["Angular", "SQLite", "NodeJS", "Express"] },
    { title: 'Notes Keeper', description: 'An UI-only notes keeper web app with a custom UI and animations with notes creation and management created for gaining more experience in Angular', link: 'https://phoenixSaket.github.io/notes-keeper', stack: ["Angular"] },
    { title: '', description: '', link: '', stack: []}
  ]

}
