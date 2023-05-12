import getCurrentUser from "@/app/actions/get-current-user";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return NextResponse.error();
  const body = await request.json();
  const {
    title,
    description,
    category,
    imageSrc,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body;
  Object.keys(body).forEach((value: any) => {
    if (!body[value]) return NextResponse.error();
  });
  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      category,
      imageSrc,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      userId: currentUser.id,
    },
  });
  return NextResponse.json(listing);
}
