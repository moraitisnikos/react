import React from 'react'
import ReactPlayer from "react-player"
import './Mainpage.css'
import Carousel from 'react-bootstrap/Carousel'
import emvolio from './emvolio.png'


function Mainpage() {
    
    return (
        <div className="allContent">
            <div className="container">
                <div className="news-feed  text-dark">
                    <div className="row">
                       <div className="col">
                           <h2>Τελευταία νέα</h2>
                           <p>Συνεχίζονται οι έλεγχοι σε όλα τα μαγαζιά εστίασης για τους ανεμβολίαστους συμπολίτες μας</p>
                           <p>Δεν υπάρχει φως στο τούνελ</p>
                           <p>Τα κρούσματα όλο και αυξάνονται</p>
                        </div>
                        <div className="col">
                            Η Εθνική Εκστρατεία Εμβολιασμού για την COVID-19 ξεκίνησε. Το εμβόλιο είναι στα χέρια μας. 
                            Εγκεκριμένο για την ασφάλεια, την ποιότητα και την αποτελεσματικότητά του
                            από τους αρμόδιους διεθνείς και εθνικούς οργανισμούς, τον Παγκόσμιο Οργανισμό Υγείας, 
                            τον EMA (European Medicines Agency) και τον FDA (US Food and Drug Administration).
                            Ο εμβολιασμός, δωρεάν για όλους, είναι σε εξέλιξη για τους ανθρώπους στην πρώτη γραμμή της υγείας, 
                            για τις ηλικίες άνω των 55 ετών.
                            Στόχος, να εμβολιαστεί το σύνολο του πληθυσμού άνω των 18 ετών. Η Εθνική Επιτροπή Εμβολιασμών 
                            μπορεί να αλλάξει την προτεραιότητα ανάλογα με τον αριθμό των δόσεων που είναι διαθέσιμες.
                        </div>
                    </div>
                </div>
            </div>

            <div className="videos">
            <ReactPlayer
            url="https://www.youtube.com/watch?v=nHqZrhZeWe8"/>
            <ReactPlayer
            url="https://www.youtube.com/watch?v=hjh5oeeipjw"/>
            <ReactPlayer
            url="https://www.youtube.com/watch?v=y66fZlPlLeQ"/>
            </div>

            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={emvolio}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={emvolio}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={emvolio}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default Mainpage
