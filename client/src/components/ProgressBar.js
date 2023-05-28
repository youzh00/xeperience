function ProgressBars({ reviewsByRating }) {
  const getRatingText = (rating) => {
    const ratingMapping = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
    };
    return ratingMapping[rating];
  };

  return (
    <div>
      {Object.entries(reviewsByRating).map(([appID, reviewsCountByRating]) => (
        <div key={appID}>
          <h3>{appID}</h3>
          {Object.entries(reviewsCountByRating).map(([rating, count]) => {
            const ratingText = getRatingText(rating);
            const widthPercentage = (count / 160) * 100; // Assuming total review count is 160

            return (
              <div key={rating} className="rating-progress">
                <span className="rating-text">{ratingText}</span>
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${widthPercentage}%` }}
                  ></div>
                </div>
                <span className="rating-count">{count}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
