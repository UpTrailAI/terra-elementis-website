import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL =
  "https://defaultb720c1d17d7443c8a7d3cec70ef22a.e9.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/641666ed9bac4d1cb24cf3501c8f44a2/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rgBMgFMWLjTfEd3L8UdLEMkvgzzmIYACIszfJE5BMXk";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, organization, inquiryType, message } = body;

    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Forward to Power Automate webhook
    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        organization: organization || "Not provided",
        inquiryType,
        message,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!webhookResponse.ok) {
      console.error(
        "Webhook error:",
        webhookResponse.status,
        await webhookResponse.text()
      );
      return NextResponse.json(
        { error: "Failed to submit inquiry" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
