import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
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
