import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'comments',
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent { }
