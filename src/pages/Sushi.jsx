import {Helmet} from "react-helmet-async";

function Sushi() {
  return (
      <>
          <Helmet>
              <title>Sushi Page</title>
              <meta name="description" content="초밥에 대한 설명입니다." />
              <meta name="keywords" content="cook, sushi, seo, csr, 초밥, 초밥 유래, 초밥 역사" />
              <meta property="og:title" content="Sushi" />
              <meta property="og:description" content="SNS 공유용 초밥 페이지"/>
              <meta property="og:image" content="https://static.vecteezy.com/system/resources/thumbnails/025/067/612/small/sushi-with-ai-generated-free-png.png"/>
              <meta property={"og:url"} content={"http://localhost:5173/sushi"}/>
          </Helmet>
          <section className="section">
      <h1>Sushi</h1>
      <img
        className="food-img"
        src="https://static.vecteezy.com/system/resources/thumbnails/025/067/612/small/sushi-with-ai-generated-free-png.png"
        alt="초밥"
      />
      <article className="article">
        초밥(醋-) 또는 스시(寿司すし, 수사)는 일본 요리의 하나로, 어패류(생선,
        조개 등의 수산물)의 살이나 유부·달걀·김 등의 식재료를 배합초에 절인 쌀밥
        위에 올려 만드는 음식이다. 흔히 일본 요리하면 가장 먼저 떠올리는 음식 중
        하나이다. 스시는 가열하지 않은 날생선(회)을 재료로 얹어 만드는 것이
        일반적이지만, 그 외에도 익힌 식재나 육류, 식물성 재료 등 여러 가지를
        기호에 맞게 얹어 만들 수 있다. 형태 또한 대개 니기리즈시와 같이 밥을
        주먹밥처럼 뭉치고 그 위에 재료를 밥알의 점착력으로 붙이는 것이 많으나,
        이 밖에 김 등을 이용해 재료를 말아 넣거나 장식한 형태의 스시도 존재한다.
      </article>
    </section>
          </>
  );
}

export default Sushi;
