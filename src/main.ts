import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app-routing.module";
import { Apollo, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from 'apollo-angular/http';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { myUrl } from "./app/graphql.config";
import { importProvidersFrom } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

bootstrapApplication(
  AppComponent, 
  {
    providers: [
      importProvidersFrom(HttpClientModule),
      provideRouter(routes),
      {
        provide: APOLLO_OPTIONS,
        useFactory: (
          httpLink: HttpLink,
        ): ApolloClientOptions<unknown> => ({
          link: ApolloLink.from([
            httpLink.create({ uri: myUrl }),
          ]),
          cache: new InMemoryCache(),
        }),
        deps: [HttpLink],
      },
      Apollo,
    ],
  }
);