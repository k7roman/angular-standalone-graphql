import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_COUNTRIES } from 'src/app/graphql.queries/graphql.countries.queries';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  countries: any[] = [];
  error: any;
  loading : boolean = true;

  constructor(private apollo : Apollo){}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(){  
    this.apollo.watchQuery({
      query: GET_COUNTRIES
    }).valueChanges.subscribe(({data, error} : any) => {
      this.loading = false;
      this.countries = data.countries;
    })
  }
}
