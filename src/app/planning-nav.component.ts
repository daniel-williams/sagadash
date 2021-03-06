import {
  AfterContentInit,
  Component } from '@angular/core';

import {
  AppConstants } from './app.constants';
import {
  FabricService } from './shared';


@Component({
  selector: 'planning-nav',
  templateUrl: './planning-nav.component.html',
})
export class PlanningNav implements AfterContentInit {
  private fabric: any;

  constructor(private appConstants: AppConstants, private fabricService: FabricService) {
    this.fabric = this.fabricService.api;
  }

  ngAfterContentInit() {
    let fabric = this.fabric;

    if(fabric) {
    }
  }

}