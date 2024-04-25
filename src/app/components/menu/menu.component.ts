import { Component,OnInit, Output, EventEmitter, Input } from '@angular/core'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  @Input() isOpened?: boolean;
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}