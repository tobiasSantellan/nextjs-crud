import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const task = await prisma.task.findMany();
  console.log(task);
  return NextResponse.json("obteniendo tareas");
}

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  const newTask = await prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
    },
  });
  return NextResponse.json(newTask);
}
