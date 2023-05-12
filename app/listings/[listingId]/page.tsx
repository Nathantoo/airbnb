import getCurrentUser from "@/app/actions/get-current-user";
import getListingById from "@/app/actions/get-listing";
import EmptyState from "@/app/components/empty-state";
import React from "react";
import ListingClient from "./listing-client";
import getReservations from "@/app/actions/get-reservations";

interface IParams {
  listingId?: string;
}

const Listing = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  const reservations = await getReservations(params);
  if (!listing) return <EmptyState />;

  return (
    <ListingClient
      listing={listing}
      currentUser={currentUser}
      reservations={reservations}
    />
  );
};

export default Listing;
