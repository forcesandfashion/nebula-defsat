"use server"

import { cookies } from "next/headers"
import { SignJWT, jwtVerify } from "jose"

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-in-production")

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"

export interface AdminSession {
  username: string
  isAdmin: boolean
  exp: number
}

export async function verifyAdminCredentials(username: string, password: string): Promise<boolean> {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}

export async function createAdminSession(username: string): Promise<string> {
  const token = await new SignJWT({ username, isAdmin: true })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(SECRET_KEY)

  const cookieStore = await cookies()
  cookieStore.set("admin-session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  })

  return token
}

export async function getAdminSession(): Promise<AdminSession | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("admin-session")

    if (!token) {
      return null
    }

    const verified = await jwtVerify(token.value, SECRET_KEY)
    return verified.payload as AdminSession
  } catch (error) {
    console.error("[v0] Error verifying admin session:", error)
    return null
  }
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete("admin-session")
}

export async function isAuthenticated(): Promise<boolean> {
  const session = await getAdminSession()
  return session !== null && session.isAdmin === true
}
