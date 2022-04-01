import {
  Navbar,
  Welcome,
  Footer,
  Features,
  Form,
  Transactions,
} from "./components/index";

const App = () => {
  return (
    <div className="gradient-bg">
      <div className="min-h-screen">
        <Navbar />
        <Welcome />
      </div>
      <Features />
      <Form />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
