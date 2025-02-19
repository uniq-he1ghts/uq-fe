import { NextResponse } from "next/server";
import { users } from "./data";

export async function GET(request, response) {
  //const delayedResponse = await delayResponse(demoData, 2000);
  return NextResponse.json(users, { status: 200 });
}

export async function POST(request, response) {
  const newItem = await request.json();
  newItem.id = users.length + 1;
  users.push(newItem);

  return NextResponse.json(newItem, { status: 201 });
}
