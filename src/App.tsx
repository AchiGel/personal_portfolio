import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Profile from "./sections/profile/Profile";
import Projects from "./sections/projects/Projects";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Profile />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
