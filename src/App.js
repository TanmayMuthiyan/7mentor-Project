import './App.css';
import Demo2 from './Components/Megha/Demo2';
import TourSection from './Components/Megha/TourSection';
import Demo from './Components/Kartik/Demo';

import CustomersReviews from './Components/Megha/CustomersReviews';
import Footer from './Components/Footer/Footer';
import ContactForm from './Components/Megha/ContactForm';
//import demo2 from './Components/Megha/demo2'
//function App() {
  //return (
    
    // App.js

const App = () => {
  return (
    <div className="App">
      
      <Demo2 />
      <TourSection />
      < CustomersReviews />
    
    <Demo/>
    
      <Footer/>
      <ContactForm/>
    </div>
  );
}

export default App;

  //   <>
  //   <Demo2/>
  //   </>
    
  // );
// }

//export default App;

