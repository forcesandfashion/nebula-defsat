import { NextResponse } from "next/server"
import { isAuthenticated } from "@/lib/admin-auth"

export async function GET() {
  try {
    const authenticated = await isAuthenticated()

    if (!authenticated) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    return NextResponse.json({ message: "Authenticated" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Auth check error:", error)
    return NextResponse.json({ message: "An error occurred" }, { status: 500 })
  }
}
