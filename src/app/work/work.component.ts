import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ]),
    ]),

  ]
})
export class WorkComponent {

  public projects = [
    { title: 'Analyzer (Advanced Reviews Dashboard)', description: 'An advanced analysis full stack PWA for comparative analysis of apps from Google Play/ Apple App Store based on reviews and ratings for the apps which can generate charts, word cloud. Sentiment word clouds, add/ compare/ delete any app that is available on Google Play/ App Store.', link: 'https://phoenixSaket.github.io/analyzer', stack: ["Angular", "NodeJS", "Express"], isClientProject: false, image: 'assets/Images/Projects/analyzer.png' , openInDetails: false, detailedDescription: "An advanced analysis full stack PWA for comparative analysis of apps from Google Play/ Apple App Store based on reviews and ratings for the apps which can generate charts, word cloud. Sentiment word clouds, add/ compare/ delete any app that is available on Google Play/ App Store. App enables easy comparison between your app and competitors and helps in analyzing positive and negative thoughts for your apps given by end users.", warning: "App is hosted on free servers and may take some time to load for the first time." },

    { title: 'Reviews Dashboard', description: 'An analysis full stack web app for comparative analysis of apps from Google Play/ Apple App Store based on reviews and ratings for the apps which can generate charts, word cloud. Sentiment word clouds, add/ compare/ delete any app that is available on Google Play/ App Store.', link: 'https://phoenixSaket.github.io/reviews', stack: ["Angular", "NodeJS", "Express"], isClientProject: false , image: 'assets/Images/Projects/reviews.png', openInDetails: true, detailedDescription: 'An analysis full stack web app for comparative analysis of apps from Google Play/ Apple App Store based on reviews and ratings for the apps which can generate charts, word cloud. Sentiment word clouds, add/ compare/ delete any app that is available on Google Play/ App Store. Android app APK/ IOS Source Code available to download on the website. The website enables easy comparison between your app and competitors and helps in analyzing positive and negative thoughts for your apps given by end users.', warning: "App is hosted on free servers and may take some time to load for the first time." },

    { title: 'Viva Farms', description: 'An UI-only website for a client\'s website for their farmhouse with personally designed UI and animations.', link: 'https://phoenixSaket.github.io/farmhouse', stack: ["Angular"], isClientProject: false , image: 'assets/Images/Projects/viva.png', openInDetails: false, detailedDescription: 'An analysis full stack web app for comparative analysis of apps from Google Play/ Apple App Store based on reviews and ratings for the apps which can generate charts, word cloud. Sentiment word clouds, add/ compare/ delete any app that is available on Google Play/ App Store. Android app APK/ IOS Source Code available to download on the website. The website enables easy comparison between your app and competitors and helps in analyzing positive and negative thoughts for your apps given by end users.', warning: "App is hosted on free servers and may take some time to load for the first time."},

    { title: 'Bill Printer Standalone App', description: 'A full stack Point-of-Sale standalone app for a client to print bills for their customers with a custom UI and animations with inventory, customer, bill creation and management ', link: 'https://drive.google.com/file/d/17VnKx1UCyY6akEZWHw2UR6KZtrvmIyUn/view?usp=sharing', linkText: 'Download', linkIcon: 'save_alt',  stack: ["Angular", "NodeJS", "SQLite"], isClientProject: false ,image: 'assets/Images/Projects/bill-printer.png' , openInDetails: true, detailedDescription: 'An analysis full stack web app for comparative analysis of apps from Google Play/ Apple App Store based on reviews and ratings for the apps which can generate charts, word cloud. Sentiment word clouds, add/ compare/ delete any app that is available on Google Play/ App Store. Android app APK/ IOS Source Code available to download on the website. The website enables easy comparison between your app and competitors and helps in analyzing positive and negative thoughts for your apps given by end users.', warning: ""},

    { title: 'Notes Keeper', description: 'An UI-only notes keeper web app with a custom UI and animations with notes creation and management created for gaining more experience in Angular', link: 'https://phoenixSaket.github.io/notes-keeper', stack: ["Angular"], isClientProject: false ,image: 'assets/Images/Projects/notes-keeper.png' , openInDetails: true, detailedDescription: 'An analysis full stack web app for comparative analysis of apps from Google Play/ Apple App Store based on reviews and ratings for the apps which can generate charts, word cloud. Sentiment word clouds, add/ compare/ delete any app that is available on Google Play/ App Store. Android app APK/ IOS Source Code available to download on the website. The website enables easy comparison between your app and competitors and helps in analyzing positive and negative thoughts for your apps given by end users.', warning: ""},

    { title: 'Forgerock Android Integration', description: 'Responsible for the system design, architecture and flow creation, execution and maintenance for the whole project to authorize members into the app using credentials, biometrics along with MFA. Received multiple client appreciations.', link: '', stack: ['Capacitor', 'Angular'], isClientProject: true, image: 'assets/Images/Projects/android.png' , openInDetails: false, detailedDescription: 'Responsible for the system design, architecture and flow creation, execution and maintenance for the whole project to authorize members into the app using credentials, biometrics along with MFA. Created capacitor plugins and wrote scripts to make the plugin dynamic so that the end user is able to complete authentication and access the application. Received multiple client appreciations.', warning: ""},

    { title: 'Apple Health Kit', description: 'Responsible for the system design, architecture and flow creation, execution and maintenance for the whole project to sync data from iPhone\'s Apple Health app to the client\'s app. Delivered bug-less requirements to the client. Received multiple client appreciations.', link: '', stack: ['Capacitor', 'Angular'], isClientProject: true, image: 'assets/Images/Projects/health.png' , openInDetails: true, detailedDescription: 'Responsible for the system design, architecture and flow creation, execution and maintenance for the whole project to authorize members into the app using credentials, biometrics along with MFA. Reading the data from user\'s iPhone, formatting into FHIR clinical format and then send to backend to store in DB for later retrieval. Received multiple client appreciations.', warning: ""},

    { title: 'Apple Wallet', description: 'Integration in IOS apps to add the dynamic ID card from the app to iPhone\'s Wallet app. Received multiple client appreciations.', link: '', stack: ['Capacitor', 'Angular'], isClientProject: true, image: 'assets/Images/Projects/wallet.png' , openInDetails: false, detailedDescription: 'Integration in IOS apps to add the dynamic ID card from the app to iPhone\'s Wallet app. Generating the PKPass file bundle and then adding the received bundle file into the iPhones\'s Apple Wallet app. Received multiple client appreciations.', warning: ""},
  ];

  openProject(project: any, index: number) {
    this.projects[index].openInDetails = true;
  }

  closeProject(project: any) {
    (this.projects.find(p => p.title === project.title) || this.projects[0]).openInDetails = false; 
  }

}
