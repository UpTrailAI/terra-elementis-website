# Terra Elementis — Marketing Measurement Plan (GA4 + GTM)

Last updated: 2026-03-02

## 1) Measurement Objectives

- Measure investor intent quality
- Measure partnership inquiry quality
- Track content performance by section (Strategy, Governance, Investors)
- Improve conversion rate from visit → inquiry submit

## 2) Core Funnel

1. Landing page view (`/`)
2. Deep-content page views (`/strategy`, `/governance`, `/investors`)
3. Intent action (contact/investor form start)
4. Form submit success

## 3) Recommended GA4 Events

## Standard events
- `page_view`
- `scroll` (90%)
- `session_start`

## Custom events
- `investor_form_start`
  - params: `page_path`, `source`, `medium`
- `investor_form_submit`
  - params: `page_path`, `inquiry_category`
- `contact_form_start`
  - params: `page_path`, `inquiry_type`
- `contact_form_submit`
  - params: `page_path`, `inquiry_type`
- `cta_click`
  - params: `cta_name`, `page_path`
- `outbound_click`
  - params: `destination_url`, `link_text`, `page_path`

## 4) Conversion Definitions in GA4

Mark as conversions:
- `investor_form_submit`
- `contact_form_submit`

Secondary conversions:
- `investor_form_start`
- `cta_click` where `cta_name=Investor Relations`

## 5) Audiences to Build

- High Intent Investors: visited `/investors` + triggered `investor_form_start`
- Government/Institutional Interest: visited `/governance` or `/strategy` + `contact_form_start`
- Engaged Visitors: 2+ pageviews + 90% scroll on any key page

## 6) Dashboard Blocks (Looker Studio)

- Traffic overview by channel/source/medium
- Top landing pages + engagement rate
- Investor funnel conversion rates
- Contact funnel conversion rates
- Page-level assisted conversions

## 7) GTM Data Layer Spec (Optional)

If using GTM, push events like:

```js
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'investor_form_submit',
  page_path: window.location.pathname,
  inquiry_category: 'institutional'
});
```

## 8) Governance & QA

- Verify events in GA4 DebugView before launch
- Validate no PII in event params
- Ensure form success triggers only once per submit
- Review monthly: channel performance + conversion quality

## 9) UTM Standards

Use strict UTM naming:
- `utm_source` (linkedin, x, newsletter, partner)
- `utm_medium` (organic, cpc, email, referral)
- `utm_campaign` (q2-investor-push, strategy-brief, etc.)
- `utm_content` (hero-cta, footer-link, post-variant-a)

## 10) Implementation Notes

- Add GTM container snippet to root layout when approved
- Add data layer pushes on submit handlers in `/investors` and `/contact`
- Keep event names lowercase snake_case
