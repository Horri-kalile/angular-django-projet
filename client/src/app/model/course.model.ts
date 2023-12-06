import { Trainer } from "./trainer.model";

export interface Course {
    id: number;
    title: string;
    description: string;
    image: string;
    instructor: Trainer;
    price: number;
    available_seats: number;
    schedule: string;
    likes: number;
}
  