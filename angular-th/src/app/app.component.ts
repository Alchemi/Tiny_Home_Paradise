import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { menuList } from './helpers/menuList';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { OpenState, UiService } from './services/ui.service';
import { Subject, subscribeOn, takeUntil } from 'rxjs';
import {gsap} from 'gsap'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'cev';

  constructor(){}

  ngOnInit(): void {
   
  }


}
