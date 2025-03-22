import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Demo.css';

const Data = [
  {
    id: 1,
    imgsrc: "https://media.cntraveler.com/photos/5dfa89a7abf9dc0008b282c4/16:9/w_2560,c_limit/St.%20Regis%20Bora%20Bora%20Resort_bobxr-exterior-aerialview-1580-hor-clsc.jpg",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "Rs. 45000",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgsrc: "https://www.railbookers.com/sites/railbookers/files/styles/hero/public/media/images/machu-picchu_168497345_web.jpeg?h=2f593d94&itok=L4vGk2f7",
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "Rs 50000",
    description:
      "Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called lost city of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.",
  },
  {
    id: 3,
    imgsrc: "https://www.aatkings.com/media/peciqcvf/cairns-region-great-barrier-reef-banner.jpg",
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "Rs 40000",
    description:
      "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'. Always interesting to be in this place.",
  },
  {
    id: 4,
    imgsrc: "https://www.sojournturkeytours.com/system/images/000/384/818/aa2da36214ecf55f89a2a204e8f0d122/original/Cappadocia.jpg?1616041663",
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "Rs 15000",
    description:
      "According to the World Tourism Ranking, 45 million people visit Turkey each year, and about 2 million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 5,
    imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqM1R_GvyAGwwcgZyf29mF5szz4Aws64HKBA&s",
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "Rs 20000",
    description:
      "A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with bright colors. Always welcome.",
  },
  {
    id: 6,
    imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBNGsPX7XVTiamMwopgITvGXLaa2hPd_exw&s",
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "Rs 35000",
    description:
      "The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here.",
  },
  {
    id: 7,
    imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0SSOXBltEpHCLYPQ7_W13oNwmVMqZUyBHA&s",
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "Rs 20000",
    description:
      "Angkor Wat represents the entire range of khmer art from the 9th to the 15th century. This temple is considered the heart and soul of cambodia. This place is known for its luxurious stays and adventurous activities",
  },
  {
    id: 8,
    imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEVguzPcmw3nKsS9lAt_gr3_Cwd2qFfT_GQ&s",
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "Rs 15000",
    description:
      "An immense mausoleum of white marble, built-in agra by Mughal emperor shah jahan in memory of his wife mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities",
  },
  {
    id: 9,
    imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPze340MWJpvIW66b3Ki1vKNrGe-FQYizudA&s",
    destTitle: "Bali Island",
    location: "Indinesia",
    grade: "CULTURAL RELAX",
    fees: "Rs 15000",
    description:
      "Bali is an indonesian island and one of the best holiday destinations in the indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandybeaches.",
  },
];

const DestinationCard = ({ destination }) => {
  return (
    <Card className="shadow-lg border-0 rounded-4">
      <Card.Img
        variant="top"
        src={destination.imgsrc}
        alt={destination.destTitle}
        className="rounded-top-4 dbz"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="fw-bold">{destination.destTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <i className="bi bi-geo-alt-fill"></i> {destination.location}
        </Card.Subtitle>
        <Card.Text>
          <span className="badge bg-primary">{destination.grade}</span>
        </Card.Text>
        <Card.Text>
          <span className="fs-4 fw-bold text-success">{destination.fees}</span>
        </Card.Text>
        <Card.Text className="text-muted">{destination.description}</Card.Text>
        <Button variant="primary">
          <i className="bi bi-info-circle"></i> Details
        </Button>
      </Card.Body>
    </Card>
  );
};



const Demo = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4 fw-bold">🌍 Travel Destinations</h1>
      <Row className="g-4">
        {Data.map((item) => (
          <Col key={item.id} xs={12} sm={6} lg={4}>
            <DestinationCard destination={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Demo;
