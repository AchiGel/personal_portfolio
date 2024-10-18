import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Profile from "./sections/profile/Profile";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Profile />
      </main>
      <Footer />
    </div>
  );
}

export default App;
