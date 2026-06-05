import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Subjects from './components/Subjects';
import WhyKFS from './components/WhyKFS';
import ApplyForm from './components/ApplyForm';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Subjects />
        <WhyKFS />
        <ApplyForm />
      </main>
      <Footer />
    </div>
  );
}