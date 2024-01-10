import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components and pages
import ContactUs from "./pages/Contact-Us.jsx";
import HomePage from './pages/Home-Page.jsx';
import NavBar from './components/Nav-Bar.jsx';
import TourPage from './pages/Tour-Page.jsx';
import EditPost from './forms/Edit-Post.jsx';
import RiderPage from './pages/Rider.jsx';
import Banner from './components/Banner.jsx';
import UniquePost from './components/Unique-Post.jsx';
import UniqueTour from './components/Unique-Tour.jsx';
import Video from './pages/Video.jsx';
import Menu from './components/Menu.jsx';

// import forms
import LoginPage from './pages/Login-Page.jsx';
import PostForm from './forms/Post-Form.jsx';
import AboutPage from './pages/About.jsx';
import TourForm from './forms/Tour-Form.jsx';
import SendNewsLetter from './forms/Send-Newsletter.jsx';

// css imports
import './styles/App.css'
import "./styles/user-details.css"
import "./styles/forms.css"
import "./styles/post-list.css"
import "./styles/slider.css"
import "./styles/navbar.css"
import "./styles/buttons.css"
import "./styles/contact.css"
import "./styles/rider.css"
import "./styles/tour.css"
import "./styles/videos.css"

function App() {
  return (
    <Router>
        {/* <Alert>Alert</Alert> */}
      <Banner />
      {/* <Slider slides={SliderIMG}/> */}
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/tour" element={<TourPage />}></Route>
          <Route path="/posts/:id" element={<UniquePost />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/rider" element={<RiderPage />}></Route>
          <Route path="/tour/:id" element={<UniqueTour />}></Route>
          <Route path="/video" element={<Video />}></Route>
          {/* Routes to Forms*/}
          <Route path="/diblog" element={<LoginPage />}></Route>
          <Route path="/dibposts" element={<PostForm />}></Route>
          <Route path="/dibtour" element={<TourForm />}></Route>
          <Route path="/editPost" element={<EditPost />}></Route>
          <Route path="/editTour" element={<UniqueTour />}></Route>
          <Route path="/newsletter" element={<SendNewsLetter />}></Route>
          {/* <Route path="" element={}></Route>
          <Route path="" element={}></Route>
          <Route path="" element={}></Route> */}
        </Routes>
      </main>
      <NavBar />
    </Router>
  )
}

export default App;