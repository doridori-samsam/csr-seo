import { Link, Outlet } from "react-router-dom";
import {Helmet} from "react-helmet-async";
function Home() {
  return (
    <>
        <Helmet>
            <meta property="og:title" content="SEO 테스트 홈"/>
            <meta property="og:description" content="SNS 공유용 파스타 페이지"/>
            <meta property="og:image"
                  content="https://www.pngplay.com/wp-content/uploads/4/Pasta-Transparent-Background.png"/>
            <title>Home Page</title>
        </Helmet>
        <header className="header">
            <p>React에서 SEO 해보기</p>
            <nav>
                <Link to="chicken">Chicken</Link>
                <Link to="pasta">Pasta</Link>
                <Link to="sushi">Sushi</Link>
            </nav>
        </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Home;
