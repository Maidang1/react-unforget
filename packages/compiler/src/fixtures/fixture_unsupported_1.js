const useMovies = () => {
  return [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Dark Knight", year: 2008 },
  ];
};

const object = { key1: "value1", key2: "value2" };

export function MyComponent() {
  let i = [];

  const filteredMovies = i.concat([]);

  i = [{ title: "The Shawshank Redemption", year: 1994 }];

  const movies = useMovies();

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].year > 2000) {
      filteredMovies.push(movies[i]);
    }
  }

  return (
    <div>
      {filteredMovies.map((movie) => (
        <div key={movie.title}>
          {movie.title}
          {/* {value} */}
        </div>
      ))}
    </div>
  );
}

// Expected output:

export function MyComponent() {
  let i;

  const updater_1 = () => {
    i = [];
  };

  let filteredMovies;
  const updater_2 = () => {
    filteredMovies = i.concat([]);
  };

  const updater_3 = () => {
    i = [{ title: "The Shawshank Redemption", year: 1994 }];
  };

  let movies;
  const updater_4 = () => {
    movies = useMovies();
  };

  const updater_5 = () => {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].year > 2000) {
        filteredMovies.push(movies[i]);
      }
    }
  };

  updater_1();

  if (movies_check) {
    updater_2();
  }

  updater_3();
  updater_4();

  if (movies_check || filteredMovies_check) {
    updater_5();
  }

  return (
    <div>
      {filteredMovies.map((movie) => (
        <div key={movie.title}>
          {movie.title}
          {/* {value} */}
        </div>
      ))}
    </div>
  );
}
