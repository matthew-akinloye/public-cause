import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-section',
  standalone: false,
  
  templateUrl: './cards-section.component.html',
  styleUrl: './cards-section.component.scss'
})
export class CardsSectionComponent {
  cards = [
    {
      image: 'https://dacfoundation.org/frontend/db-assets/cause-images/1700368682-noticias_thebighand_5-1120x550.jpg',
      title: 'Clean Water Initiative',
      description: 'Providing clean and safe drinking water to underprivileged communities.',
      buttonText: 'Learn More'
    },
    {
      image: 'https://www.ei-ie.org/image/Quality-education.jpg/lead.jpg',
      title: 'Education for All',
      description: 'Ensuring every child has access to quality education.',
      buttonText: 'Learn More'
    },
    {
      image: 'https://www.maasavitringo.org/wp-content/uploads/2024/07/CMP_TP_1.jpg',
      title: 'Tree Planting Drive',
      description: 'Join us in planting trees to combat climate change.',
      buttonText: 'Learn More'
    },
    {
      image: 'https://smcgh.edu.in/wp-content/uploads/2024/02/582577521-bp-test-at-home-copy-1024x683.jpg',
      title: 'Health Awareness',
      description: 'Promoting health and wellness in rural areas.',
      buttonText: 'Learn More'
    }
  ];
}
