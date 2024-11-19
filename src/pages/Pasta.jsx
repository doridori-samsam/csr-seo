import {Helmet} from "react-helmet-async";

function Pasta() {
  return (
      <>
          <Helmet>
              <title>Pasta Page</title>
              <meta name="description" content="파스타에 대한 설명입니다." />
              <meta name="keywords" content="cook, pasta, seo, csr, 파스타, 파스타 유래, 파스타 역사" />
              <meta property="og:title" content="Pasta" />
              <meta property="og:description" content="SNS 공유용 파스타 페이지"/>
              <meta property="og:image" content="https://www.pngplay.com/wp-content/uploads/4/Pasta-Transparent-Background.png"/>
              <meta property={"og:url"} content={"http://localhost:5173/pasta"}/>
          </Helmet>
    <section className="section">
    <h1>Pasta</h1>
      <img
        className="food-img"
        src="https://www.pngplay.com/wp-content/uploads/4/Pasta-Transparent-Background.png"
        alt="파스타"
      />
      <article className="article">
        파스타(pasta)는 물과 듀럼밀 세몰리나를 반죽하여 만드는 이탈리아의 면과
        이를 이용한 음식 전반을 일컫는 말이다. 파스타 생산은 최근에 듀럼밀의
        영양학적 우수성이 인정 받아 급성장 중인 산업이며, 스펠트밀,
        호라산밀(카무트), 엠머밀 등 다양한 고대밀을 사용한 파스타 또한
        만들어지고 있다.
      </article>
    </section>
    </>
  );
}

export default Pasta;
