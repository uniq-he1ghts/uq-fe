import { NextResponse } from "next/server";
import { subUsers } from "../data";

export async function GET(request, response) {
  //const delayedResponse = await delayResponse(demoData, 2000);
  return NextResponse.json(subUsers, { status: 200 });
}

export async function POST(request, response) {
  const newItem = await request.json();
  newItem.id = subUsers.length + 1;
  subUsers.push(newItem);

  return NextResponse.json(newItem, { status: 201 });
}
