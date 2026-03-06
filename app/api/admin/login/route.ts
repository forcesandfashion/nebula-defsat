import { type NextRequest, NextResponse } from "next/server"
import { verifyAdminCredentials, createAdminSession } from "@/lib/admin-auth"

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json({ message: "Username and password are required" }, { status: 400 })
    }

    const isValid = await verifyAdminCredentials(username, password)

    if (!isValid) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
    }

    await createAdminSession(username)

    return NextResponse.json({ message: "Login successful" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json({ message: "An error occurred" }, { status: 500 })
  }
}
