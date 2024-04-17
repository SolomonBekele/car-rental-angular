import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzLayoutModule} from 'ng-zorro-antd/layout';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            NzSpinModule,
            NzFormModule,
            NzButtonModule,
            NzInputModule,
            NzLayoutModule,
            RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'car_rental_angular';
}
