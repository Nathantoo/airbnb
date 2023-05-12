import React from "react";
import EmptyState from "../components/empty-state";
import getFavoriteListings from "../actions/get-favorite-listings";
import getCurrentUser from "../actions/get-current-user";
import FavoritesClient from "./favorites-client";

const Favorites = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();
  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found!"
        subtitle="Looks like you have no favorite listings"
      />
    );
  }
  return <FavoritesClient listings={listings} currentUser={currentUser} />;
};

export default Favorites;
