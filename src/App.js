import './App.css';
import Demo2 from './Components/Megha/Demo2';
import TourSection from './Components/Megha/TourSection';
import Demo from './Components/Kartik/Demo';
import './App.css';
import Header from './Components/Tanmay/Header';
import Banner from './Components/Tanmay/Banner';
import CustomersReviews from './Components/Megha/CustomersReviews';
import Footer from './Components/Footer/Footer';
import ContactForm from './Components/Megha/ContactForm';
    
const App = () => {
  return (
    <div className="App">
       <Header/>
       <Banner/>
      <Demo/>
      <Demo2 />
      <TourSection />
      <CustomersReviews />
      <Footer/>
      <ContactForm/>
    
     
    </div>
  );
}

export default App;



