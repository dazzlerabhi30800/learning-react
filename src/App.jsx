import { useState } from "react";
import DOMPurify from "dompurify";
import "./App.css";
import { useQuery, gql, useLazyQuery } from "@apollo/client";

function App() {
  const AnimeList = gql`
    query Query($page: Int) {
      Page(page: $page) {
        media {
          siteUrl
          title {
            english
            native
            userPreferred
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

  const SearchAnimeList = gql`
    query SearchQuery($search: String) {
      Page {
        media(search: $search) {
          siteUrl
          title {
            english
            native
            userPreferred
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
  const [title, setTitle] = useState("");
  const { loading, error, data } = useQuery(AnimeList, {
    variables: { page: page },
  });
  const [handleSearch, list] = useLazyQuery(SearchAnimeList);

  const handleKeyDown = async (e) => {
    if (e.keyCode === 13) {
      await handleSearch({ variables: { search: title } });
      console.log(list.data?.Page?.media);
    } else {
      return;
    }
  };

  return (
    <>
      <h1>Anime List</h1>
      <input
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        id="search-input"
        value={title}
        placeholder="Search Your Favourite Anime"
      />
      <div className="anime--wrapper">
        {!loading ? (
          data.Page.media.map((item, index) => (
            <div className="anime-card" key={index}>
              <img src={item.coverImage.medium} alt={item} />
              <div className="text-info">
                <h2>
                  {item.title.english ? item.title.english : item.userPreferred}
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
