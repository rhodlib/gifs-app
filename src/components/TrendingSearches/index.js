import React, { Suspense } from "react";
import Loader from "components/Loader";
import { useNearScreen } from "hooks/useNearScreen";

const TrendingSearches = React.lazy(() => import("./ThrendingSearches"));

const LazyTrending = () => {
    const { isNearScreen, fromRef } = useNearScreen({ distance: "150px" });

    return (
        <div ref={fromRef}>
            <Suspense fallback={<Loader />}>
                {isNearScreen ? <TrendingSearches /> : <Loader />}
            </Suspense>
        </div>
    );
};

export default LazyTrending;
