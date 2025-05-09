import "./App.css";
import { Routes, Route } from "react-router-dom";
import CareerPage from "./pages/CareerPage";
import CommunityPage from "./pages/CommunityPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProjectPage from "./pages/ProjectPage";
import ServicePage from "./pages/ServicePage";
import WhatsNewPage from "./pages/WhatsNewPage";
import SingleProduct from "./components/Product/SingleProduct";
import CaseStudy from "./pages/CaseStudy";
// import Box1 from "./pages/Box1";
import SpecificService from "./components/Services/SpecificService";
import ArticlesPage from "./pages/ArticlesPage";
// import StackScroll from "./pages/StackScroll";
import PageNotFound from "./pages/PageNotFound";
import SingleArticle from "./pages/SingleArticle";
import SingleProject from "./pages/SingleProject";
import SingleCaseStudy from "./pages/SingleCaseStudy";
import ProductCategoryPage from "./components/Product/ProductCategoryPage";
import ScrollArrow from "./components/ReUsableComp/ScrollArrow";
import EachServicePage from "./components/Services/EachServicePage";
import About from "./pages/About";
import EventsPage from "./pages/EventsPage";
import SpecificEvent from "./pages/SpecificEvent";
import NewsRoomPage from "./pages/NewsRoomPage";
import LeaderPage from "./pages/LeaderPage";
import MediaKit from "./pages/MediaKit";
import Partners from "./pages/Partners";

import Template6 from "./Templets/Template6";

import CompetitionPage from "./pages/Competition";
import CertificateView from "./components/CertificateView";

import EventDetails from "./components/Competition/Event-Detail";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Sitemap from "./components/Sitemap";

function App() {
  return (
    <div className="App">
      {/* Lwdnkjgkufefkl */}
      {/* <StackScroll /> */}
      {/* <Box1 /> */}
      <Routes>
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route
          path="/products/:department/:category"
          element={<ProductPage />}
        />
        <Route path="/products" element={<ProductCategoryPage />} />
        <Route path="/products/:department" element={<ProductCategoryPage />} />
        <Route
          path="/products/:department/:category/:id"
          element={<SingleProduct />}
        />
        {/* <Route path="/products/:id" element={<SingleProduct />} /> */}
        {/* <Route path="/article/:department/:title" element={<SingleArticle />} /> */}
        <Route path="/article" element={<ArticlesPage />} />
        <Route path="/article/:department" element={<ArticlesPage />} />
        <Route path="/article/:department/:title" element={<SingleArticle />} />
        <Route path="/article/:department/single-article/:title" element={<SingleArticle />} />

        <Route
          path="/article/:department/single-article/:title"
          element={<Template6 />}
        />

        <Route
          // path="/case-study/:department/:title (Through department from nav bar)"
          path="/case-study/:department/single-caseStudy/:id" //-------------
          element={<SingleCaseStudy />}
        />
        <Route
          // path="/case-study/:department/:title (home) "
          path="/case-study/single-caseStudy/:id" //-------------
          element={<SingleCaseStudy />}
        />

        <Route
          // path="/case-study/:department/:title (direct navigation from navbar)"
          path="/case-study/:department/:id" //-------------
          element={<SingleCaseStudy />}
        />

        {/* Project */}

        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/:department" element={<ProjectPage />} />
        <Route
          path="/project/:department/:category"
          element={<ProjectPage />}
        />
        <Route
          path="/project/:department/:category/:title"
          element={<SingleProject />}
        />
        {/* <Route path="/project/:department/:title" element={<SingleProject />} /> */}


        {/* CaseStudy */}

        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/case-study/:department" element={<CaseStudy />} />
        <Route path="/case-study/:department:id" element={<CaseStudy />} />

        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:department" element={<ServicePage />} />
        <Route
          path="/services/:department/:category"
          element={<SpecificService />}
        />
        <Route
          path="/services/:department/:category/:title"
          element={<EachServicePage />}
        />

        {/* competition */}
        <Route path="/competition" element={<CompetitionPage />} />

        <Route path="/certificates/:id" element={<CertificateView />} />

        {/* <Route path="/competition/:department" element={<CompetitionPage />} /> */}

        {/* < Route path="all-event" component={<AllEvents  />} >
            <Route index element={<AllEvents />} />
            <Route path="all" element={< AllEvents />} />
            <Route path="ongoing" element={<EventFilter />} />
            <Route path="upcoming" element={<EventFilter />} />
          </Route>
 */}

        {/* //sitemap */}

        <Route path="/sitemap" element={<Sitemap />} />

        <Route path="/event/:title" element={<EventDetails />} />

        <Route path="/whatsnew" element={<WhatsNewPage />} />

        <Route path="/about/:key" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/media-kit" element={<MediaKit />} />
        <Route path="/about/leader/:name" element={<LeaderPage />} />

        <Route path="/about" element={<About />} />
        <Route path="/about/:subsection" element={<About />} />
        <Route path="/about/leader/:leaderName" element={<About />} />
        {/* <Route path="/partners" element={<PartnersPage />} /> */}
        {/* <Route path="/media-kit" element={<MediaKitPage />} /> */}

        <Route path="/news" element={<NewsRoomPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:title" element={<SpecificEvent />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ScrollArrow />
    </div>
  );
}

export default App;
