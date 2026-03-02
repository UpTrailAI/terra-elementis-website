import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL =
  "https://alcnx.webhook.office.com/webhookb2/75afb798-d0d9-4604-8354-63235c7b7c94@b720c1d1-7d74-43c8-a7d3-cec70ef22ae9/IncomingWebhook/bf5708f577d84344bce43ef25d5ccf56/fb4aa683-e401-4c30-a2fe-f05c4571ed99/V2UBTJVPM9mDITe7d18NNiFECarLMpTEL6Y0-eo571Pqo1";

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

    // Format for Teams Incoming Webhook (MessageCard)
    const teamsMessage = {
      "@type": "MessageCard",
      "@context": "https://schema.org/extensions",
      summary: "New Terra Elements Contact Form Submission",
      themeColor: "D4AF37", // Gold
      title: "🌍 New Contact Form Submission",
      sections: [
        {
          activityTitle: name,
          activitySubtitle: email,
          facts: [
            {
              name: "Organization:",
              value: organization || "Not provided",
            },
            {
              name: "Inquiry Type:",
              value: inquiryType,
            },
            {
              name: "Message:",
              value: message,
            },
            {
              name: "Submitted:",
              value: new Date().toLocaleString("en-US", {
                timeZone: "Australia/Sydney",
                dateStyle: "medium",
                timeStyle: "short",
              }),
            },
          ],
        },
      ],
    };

    // Forward to Teams webhook
    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamsMessage),
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
