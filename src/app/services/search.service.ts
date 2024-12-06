import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly channel = new BehaviorSubject<string>('F');
  private readonly readOnlyChanel$ = this.channel.asObservable();
  // private searchQuery = '';

  getReadonlyChannel() {
    return this.readOnlyChanel$;
  }

  publishToChannel(query: string): void {
    this.channel.next(query);
  }
}
