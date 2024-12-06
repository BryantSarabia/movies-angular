import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly channel = new Subject<string>();
  private readonly readOnlyChanel$ = this.channel.asObservable();
  // private searchQuery = '';

  getReadonlyChannel() {
    return this.readOnlyChanel$;
  }

  publishToChannel(query: string): void {
    this.channel.next(query);
  }
}
