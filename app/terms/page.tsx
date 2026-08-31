import type { Metadata } from "next";
import { LegalLayout } from "../legal-layout";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return <LegalLayout eyebrow="Using Inkly" title="Terms of Use" updated="August 31, 2026">
    <p>These Terms of Use govern your use of Inkly. By using the app, you agree to them. If you do not agree, do not use Inkly.</p>
    <h2>The app</h2><p>Inkly helps people create personal photo-based reflections. Reflections are for inspiration and personal expression only; they are not medical, legal, financial, mental-health, or other professional advice.</p>
    <h2>Eligibility and acceptable use</h2><p>You must be at least 13 to use Inkly. You are responsible for the photos, profile details, messages, reactions, and other content you submit or share. You must have the rights and permissions needed to use that content.</p><p>You may not use Inkly to upload or share illegal, harmful, abusive, hateful, harassing, exploitative, or privacy-violating material; infringe another person&apos;s rights; submit sensitive information you do not want processed; or abuse, disrupt, reverse engineer, or misuse the app and its services.</p>
    <h2>AI-generated content</h2><p>Inkly uses AI systems to generate and rewrite reflections. Output can be inaccurate, generic, unexpected, or unsuitable for your situation. Review it before relying on it or sharing it.</p>
    <h2>Subscriptions, renewal, and cancellation</h2><p>Inkly may offer paid features or auto-renewing subscriptions through Apple App Store or Google Play in-app purchases. Pricing, billing, renewal, refunds, cancellation, and subscription management are handled by your store account under its terms. You can restore eligible purchases from the paywall in the app by selecting <strong>Restore purchases</strong>. To cancel an auto-renewing subscription, manage it in your Apple or Google subscription settings before the next renewal date. Deleting an Inkly account does not cancel a store subscription.</p>
    <h2>Availability and termination</h2><p>We may modify, suspend, or discontinue parts of Inkly at any time. We may suspend or terminate access for violations of these Terms, misuse, or legal and operational risk.</p>
    <h2>Disclaimers and limitation of liability</h2><p>Inkly is provided “as is” and “as available,” to the extent permitted by law. We do not guarantee particular reflection quality, an emotional outcome, subscription result, or uninterrupted availability. To the maximum extent permitted by law, Inkly and its operators are not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, data, or goodwill arising from use of the app.</p>
    <h2>Privacy and contact</h2><p>Your use is also governed by the <a href="/privacy">Privacy Policy</a>. For questions about these Terms, contact <a href="mailto:support@inkly.app">support@inkly.app</a>.</p>
  </LegalLayout>;
}
