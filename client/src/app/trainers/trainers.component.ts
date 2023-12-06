import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainersService } from '../services/trainers.service';
import { Trainer } from '../model/trainer.model';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css',
  providers: [TrainersService, ]
})

export class TrainersComponent implements OnInit {
  trainers: Trainer[] = [];

  constructor(private trainerService: TrainersService) {}

  ngOnInit(): void {
    this.trainerService.getTrainers().subscribe(
      (data) => {
        this.trainers = data;
      },
      (error) => {
        console.error('Error fetching trainers:', error);
      }
    );
  }
}
