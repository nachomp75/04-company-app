import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';
import { NgxApxSideMenuComponent, TitleColor } from 'ngx-apx-side-menu';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SideMenuComponent,
    NgxApxSideMenuComponent,
  ],
  templateUrl: './admin-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminLayoutComponent {
  isAuthenticated = signal(false);
  TitleColor = TitleColor;

  onLogin() {
    this.isAuthenticated.set(true);
  }

  onLogout() {
    this.isAuthenticated.set(false);
  }
}
