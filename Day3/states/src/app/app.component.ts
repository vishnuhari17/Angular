import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { CardComponent } from "./ui/card/card.component";
import { StatesComponent } from "./pages/states/states.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CardComponent, StatesComponent, ContactComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'states';
  data= [
    {
      "id": 1,
      "name": "Meghalaya - Laitlum Canyons",
      "description": "A breathtaking gorge with panoramic views and silent trails, perfect for serene getaways and treks.",
      "image": "https://images.unsplash.com/photo-1651409473378-fd27ad07069d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 2,
      "name": "Maharashtra - Lonar Crater Lake",
      "description": "A unique meteorite impact lake surrounded by lush greenery, ancient temples, and rich biodiversity.",
      "image": "https://images.unsplash.com/photo-1548820524-7c4742f76035?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 3,
      "name": "Rajasthan - Kuldhara Village",
      "description": "Explore the mysterious, abandoned ghost village with stories of curses and rich architectural ruins.",
      "image": "https://plus.unsplash.com/premium_photo-1699535657712-02fe404e916f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 4,
      "name": "Arunachal Pradesh - Ziro Valley",
      "description": "A lush valley known for its rice fields, pine forests, Apatani tribal culture, and music festivals.",
      "image": "https://images.unsplash.com/photo-1668437824006-1be44600774b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 5,
      "name": "Gujarat - Polo Forest",
      "description": "Discover ancient temple ruins nestled within serene forests, perfect for trekking and photography.",
      "image": "https://images.unsplash.com/photo-1542202229-7d93c33f5d07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 6,
      "name": "Himachal Pradesh - Chitkul Village",
      "description": "The last village on the Indo-Tibetan border, offering scenic landscapes, wooden houses, and peaceful vibes.",
      "image": "https://plus.unsplash.com/premium_photo-1697729736968-dbaf069935c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 7,
      "name": "Odisha - Bhitarkanika Mangrove Forest",
      "description": "A natural paradise with crocodile spotting, exotic birds, and tranquil boat rides through mangroves.",
      "image": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
  
}
