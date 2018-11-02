import React, { Component } from 'react';
import './Carousel.css';
import Carousel from './compoents/Carousel';

// Data for carousel
const Data = [
  {
    "id": 1,
    "title": "We are Humans",
    "subtitle": "And we love humans",
    "text": "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
    "image_url": "https://picsum.photos/300/150/?image=20",
    "href": "https://mindera.com/people-and-culture/we-are-humans/",
    "is_liked": true
  },
  {
    "id": 2,
    "title": "We work together",
    "subtitle": "Would you like to join us?",
    "text": "We insist on working collaborativelly. <strong>No rockstars</strong>. No departments. The whole owns the whole project together.",
    "image_url": "https://picsum.photos/300/150/?image=30",
    "href": "https://mindera.com/people-and-culture/we-work-together/",
    "is_liked": false
  },
  {
    "id": 3,
    "title": "We change",
    "subtitle": "And we embrace change",
    "text": "Nothing is sacred, from our habits to our rituals, to our enviroment. Change is a natural part of the human life, and we prefer to embrace it.",
    "image_url": "https://picsum.photos/300/150/?image=40",
    "href": "https://mindera.com/people-and-culture/we-change/",
    "is_liked": true
  },
  {
    "id": 4,
    "title": "We hire differently",
    "text": "Most companies operate under the premise that employees should be replaceable like parts of an assembly line. We choose our people more carefully.",
    "image_url": "https://picsum.photos/300/150/?image=50",
    "href": "https://mindera.com/people-and-culture/faq/",
    "is_liked": false
  },
  {
    "id": 5,
    "title": "Get autonomous",
    "text": "You’re given an incredible amount of freedom and autonomy at Mindera. That goes for everyone.",
    "image_url": "https://picsum.photos/300/150/?image=60",
    "href": "https://mindera.com/people-and-culture/faq/",
    "is_liked": false
  },
  {
    "id": 6,
    "title": "Work together",
    "text": "Our flat structure calls for it by necessity. Being a leader may feel unnatural at first, but we expect everyone to step up and own part of the project.",
    "image_url": "https://picsum.photos/300/150/?image=70",
    "href": "https://mindera.com/people-and-culture/faq/",
    "is_liked": false
  },
  {
    "id": 7,
    "title": "Human Truths #1",
    "subtitle": "From the book of humans",
    "text": "Humans are not perfect. Don’t be afraid to fail. And when you do, you might as well fail spectacularly. This is how we grow and learn.",
    "image_url": "https://picsum.photos/300/150/?image=80",
    "href": "https://mindera.com/people-and-culture/faq/",
    "is_liked": false
  },
  {
    "id": 8,
    "title": "Human Truths #2",
    "subtitle": "From the book of humans",
    "text": "Humans are unique. Do you love Portugueses Pop Music (<em>Pimba</em>)? Do you prefer your desk covered with sunflowers? There’s no need to hide it. Be yourself. That’s how you’ll fit in here.",
    "image_url": "https://picsum.photos/300/150/?image=90",
    "href": "https://mindera.com/people-and-culture/faq/",
    "is_liked": false
  },
  {
    "id": 9,
    "title": "Humans are not \"resources\"",
    "subtitle": "Humans are humans",
    "text": "We don’t have an HR department. New hires are interviewed by the people who will be working with them. So get ready to care a lot about the people you work with.",
    "image_url": "https://picsum.photos/300/150/?image=91",
    "href": "https://mindera.com/people-and-culture/faq/",
    "is_liked": false
  }
];
class App extends Component {
  render() {
    return (
      <div><Carousel slides={Data} /></div>
    );
  }
}
export default App;
