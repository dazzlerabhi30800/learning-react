import { useState } from "react";
import DOMPurify from "dompurify";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

function App() {
  const AnimeList = gql`
    query Query($page: Int) {
      Page(page: $page) {
        media {
          siteUrl
          title {
            english
            native
          }
          description
          coverImage {
            medium
          }
          bannerImage
          volumes
          episodes
        }
      }
    }
  `;

  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(AnimeList, {
    variables: { page: page },
  });
  console.log(page);

  return (
    <>
      <h1>Anime List</h1>
      <div className="anime--wrapper">
        {!loading ? (
          data.Page.media.map((item, index) => (
            <div className="anime-card" key={index}>
              <img src={item.coverImage.medium} alt={item} />
              <div className="text-info">
                <h2>
                  {item.title.english ? item.title.english : item.title.native}
                </h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item.description),
                  }}
                ></p>

                <p>
                  Episodes: <span>{item.episodes}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <span style={{ margin: "5px auto", fontSize: "1.2rem" }}>
            Loading...
          </span>
        )}
      </div>
      <div className="button">
        <button
          onClick={() => {
            setPage(page - 1 <= 1 ? 1 : page - 1);
            window.scrollTo(0, 0);
          }}
          className="prev"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
            window.scrollTo(0, 0);
          }}
          className="next"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
