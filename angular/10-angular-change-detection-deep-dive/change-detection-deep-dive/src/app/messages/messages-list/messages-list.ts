import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MessagesService } from '../messages.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  imports: [AsyncPipe],
  templateUrl: './messages-list.html',
  styleUrl: './messages-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesList {
  private readonly messagesService = inject(MessagesService);
  messages$ = this.messagesService.messages$;
  // private readonly changeDetectionRef = inject(ChangeDetectorRef);
  // private readonly destroyRef = inject(DestroyRef);

  // messages = this.messagesService.allMessages;

  // messages: string[] = [];

  // ngOnInit(): void {
  // const subscription = this.messagesService.messages$.subscribe((updatedMessages) => {
  //   this.messages = updatedMessages;
  //   this.changeDetectionRef.markForCheck();
  // });

  // // Alternatively the OnDestroy Interface can be used
  // this.destroyRef.onDestroy(() => {
  //   subscription.unsubscribe();
  // });
  // }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
