const apiKey =
  "OGz2xgqVAvGSgEOunyGdX26oqBXAbEEdZHm3bvLjuZnXQ5erXVYJatSxCsvC6zu0B3S_fXn2xq3Ih4D7m_tU5WX61yH298bttsiPHz08IoF81dIjU9iU1j1lR5APY3Yx";
const yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
  },
};
