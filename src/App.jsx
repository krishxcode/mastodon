import "./App.css";
import Donation from "./components/Donation";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Post from "./components/post";
import Post2 from "./components/Post2";
import Post3 from "./components/Post3";
import Server from "./components/Server";
import SupportedBy from "./components/SupportedBy";
import WhyMastodon from "./components/WhyMastodon";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Post />
      <Post2 />
      <Server />
      <Post3 />
      <WhyMastodon />
      <Feedback />
      <Donation />
      <SupportedBy />
      <Footer />
    </>
  );
}

export default App;
