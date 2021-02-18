import { Component } from '@angular/core';
import { AppDataService } from '../services/app.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  businesses: any = [];
  
  constructor(private appDataService?: AppDataService) { }

  ngOnInit() {
    
    this.appDataService.getBusinesses().subscribe(data => {
      this.businesses = data;
    });
    
  }
}
