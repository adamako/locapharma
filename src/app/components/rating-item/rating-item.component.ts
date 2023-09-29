import { Component, Input } from '@angular/core';
import { Review } from '../../models/Review';

@Component({
  selector: 'app-rating-item',
  templateUrl: './rating-item.component.html',
  styleUrls: ['./rating-item.component.scss'],
})
export class RatingItemComponent {
  @Input() review: Review | undefined;

  viewAuthorProfile() {
    if (this.review) {
      window.open(this.review.author_url, '_blank');
    }
  }
}
