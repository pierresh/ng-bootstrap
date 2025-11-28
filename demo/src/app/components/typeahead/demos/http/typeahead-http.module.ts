import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTypeaheadHttp } from './typeahead-http';

@NgModule({ declarations: [NgbdTypeaheadHttp],
    exports: [NgbdTypeaheadHttp],
    bootstrap: [NgbdTypeaheadHttp], imports: [BrowserModule, FormsModule, NgbModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class NgbdTypeaheadHttpModule {}
