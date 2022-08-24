import React from "react";
import Header from "../../components/Header/Header";
import News from "../../components/News/News";
import Footer from "../../components/Footer/Footer";
import * as Styled from "./Home.style";

const Home = () => (
  <Styled.Container>
    <Header />
    <main>
      <News />
    </main>
    <Footer />
  </Styled.Container>
);

export default Home;
