import { ImageResponse } from "next/og"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // ?title=<title>
    const hasTitle = searchParams.has("title")
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Jamees Food"

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FAF7F0",
            position: "relative",
          }}
        >
          {/* Subtle noise/grain effect is hard in standard og, so we use a gradient border instead */}
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              right: 20,
              bottom: 20,
              border: "4px solid #F0A500",
              borderRadius: 40,
              display: "flex",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 120,
              height: 120,
              backgroundColor: "#F0A500",
              borderRadius: 60,
              marginBottom: 40,
            }}
          >
            <span
              style={{
                fontSize: 60,
                color: "#1A1714",
                fontWeight: 700,
                fontFamily: "sans-serif", // next/og uses local fonts if loaded, standard sans-serif fallback here
              }}
            >
              J
            </span>
          </div>

          <div
            style={{
              fontSize: 72,
              fontStyle: "normal",
              color: "#1A1714",
              marginTop: 10,
              lineHeight: 1.1,
              whiteSpace: "pre-wrap",
              textAlign: "center",
              fontWeight: 700,
              padding: "0 100px",
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: 32,
              color: "#1A1714",
              opacity: 0.6,
              marginTop: 20,
            }}
          >
            Bold flavors, guilt-free joy.
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: unknown) {
    console.error(e)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
