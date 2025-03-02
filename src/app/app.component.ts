import { NgxSpinnerModule } from "ngx-spinner";
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './Core/Services/FlowBite/flowbite.service';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgxSpinnerModule,TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private _flowbiteService: FlowbiteService) {}
  title = 'flowChart';

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite((flowbite) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
