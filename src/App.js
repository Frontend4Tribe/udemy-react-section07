import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "Rearrange",
  image: "https://source.unsplash.com/tauPAnOIGvE",
  email: "12345@example.com",
  phone: "000-0000-0000",
  company: {
    name: "Test Company"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
