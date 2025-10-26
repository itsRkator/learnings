import { Component, computed, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Task } from './task/task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, RouterLink],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {
  // Router params of the parent won't accessible by default via input by the child route
  // Need to be explicitly inherited via the withRouterConfig({ paramsInheritanceStrategy: 'always' }) in the provideRouter config
  // Directly accessible using the ActivatedRoute's paramMap Observables
  userId = input.required<string>();
  // order = input<'ASC' | 'DESC'>(); // Using inputs

  order = signal<'ASC' | 'DESC'>('DESC');

  private readonly tasksService: TasksService = inject(TasksService);
  userTasks = computed(() =>
    this.tasksService
      .allTasks()
      .filter((task) => task.userId === this.userId())
      .sort((a, b) => {
        if (this.order() === 'DESC') {
          return a.id > b.id ? -1 : 1;
        } else {
          return a.id > b.id ? 1 : -1;
        }
      })
  );

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.activatedRoute.queryParamMap.subscribe({
      next: (queryParam) => {
        this.order.set(queryParam.get('order') as 'ASC' | 'DESC');
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
