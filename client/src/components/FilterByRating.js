import { ChevronsDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Stars from "./Stars";
import { useState } from "react";
import reviews from "@/assets/reviews.json";

function calculateReviewsByRating(reviews) {
  var reviewsByRating = {};

  // Group reviews by appID
  var uniqueAppIDs = [...new Set(reviews.map((review) => review.appID))];

  uniqueAppIDs.forEach((appID) => {
    var appReviews = reviews.filter((review) => review.appID === appID);
    var reviewsCountByRating = {};

    // Rating mapping object
    var ratingMapping = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
    };

    appReviews.forEach((review) => {
      var rating = review.rating;
      var ratingKey = ratingMapping[rating];

      if (!reviewsCountByRating[ratingKey]) {
        reviewsCountByRating[ratingKey] = 1;
      } else {
        reviewsCountByRating[ratingKey]++;
      }
    });

    reviewsByRating[appID] = reviewsCountByRating;
  });

  return reviewsByRating;
}

const FilterByRating = () => {
  const [isOpen, setIsOpen] = useState(false);

  let reviewsByRating = calculateReviewsByRating(reviews);

  return (
    <div>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[300px] space-y-2"
      >
        <div className="mt-6 flex items-center justify-start">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
          <h4 className="text-sm font-semibold">Filter by Rating</h4>
        </div>

        <CollapsibleContent className="space-y-2">
          <div className=" px-4 py-1 font-mono text-sm">
            <Stars count={5} />
            <ProgressBars reviewsByRating={reviewsByRating["com.amazom"]} />
          </div>
          <div className=" px-4 py-1 font-mono text-sm">
            <Stars count={4} />
          </div>
          <div className=" px-4 py-1 font-mono text-sm">
            <Stars count={3} />
          </div>
          <div className=" px-4 py-1 font-mono text-sm">
            <Stars count={2} />
          </div>
          <div className=" px-4 py-1 font-mono text-sm">
            <Stars count={1} />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default FilterByRating;
