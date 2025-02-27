import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../home/Home";
import About from "../Pages/AboutUs/About";
import NewsPage from "../News/NewsPage";
import Contact from "../Pages/ContactUs/Contact";
import Notfoundpage from "../Pages/notfound/404Notfound";


function CustomRoutes() {
    return (
        <Routes>
            {/* Home Route */}
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />

            {/* News Routes with Correct Categories */}
            <Route path="/entertainment" element={<Layout><NewsPage category="entertainment" country="us" size={8} /></Layout>} />
            <Route path="/technology" element={<Layout><NewsPage category="technology" country="us" size={8} /></Layout>} />
            <Route path="/business" element={<Layout><NewsPage category="business" country="us" size={8} /></Layout>} />
            <Route path="/general" element={<Layout><NewsPage category="general" country="us" size={8} /></Layout>} />
            <Route path="/health" element={<Layout><NewsPage category="health" country="us" size={8} /></Layout>} />
            <Route path="/science" element={<Layout><NewsPage category="science" country="us" size={8} /></Layout>} />
            <Route path="/sports" element={<Layout><NewsPage category="sports" country="us" size={8} /></Layout>} />
            <Route path="/*" element={<Notfoundpage />} />
        </Routes>
    );
}

export default CustomRoutes;
