// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// function HeaderImage() {
//   return (
//     <Carousel slide={false}>
//     <Carousel.Item>
//       <ExampleCarouselImage text="First slide" />
//       <Carousel.Caption>
//         <h3>First slide label</h3>
//         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <ExampleCarouselImage text="Second slide" />
//       <Carousel.Caption>
//         <h3>Second slide label</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <ExampleCarouselImage text="Third slide" />
//       <Carousel.Caption>
//         <h3>Third slide label</h3>
//         <p>
//           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//         </p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
//   )
// }

// export default HeaderImage

import { UncontrolledCarousel}from 'reactstrap';
import homesliderimage1 from '../../assets/images/headerImage1.jpg';

function HeaderImage() {
  return (
    <div ><UncontrolledCarousel
    items={[
      {
        height:"700px",
        key: 1,
        src:homesliderimage1
        
      },
      {
        
        key: 2,
        src:homesliderimage1
        
      },
      
    ]}
    /></div>
  )
}

export default HeaderImage