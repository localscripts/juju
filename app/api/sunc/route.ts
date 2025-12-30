import { NextResponse } from "next/server"
import { suncConfig } from "@/config/sunc-config"

export const runtime = "edge"

export async function GET() {
  try {
    const { scrapId, key } = suncConfig.widget

    const response = await fetch(`https://api.rubis.app/v2/scrap/${scrapId}/raw?accessKey=${key}`, {
      headers: {
        Accept: "application/json",
      },
    })

    const data = await response.json()

    if (data.__SUNC) {
      return NextResponse.json(data)
    }

    return NextResponse.json({
      error: "Invalid sUNC data",
      useDefaults: true,
    })
  } catch (error) {
    console.error("Error fetching sUNC data:", error)
    return NextResponse.json({ error: "Failed to fetch sUNC data", useDefaults: true }, { status: 500 })
  }
}
