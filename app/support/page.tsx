import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "../legal-layout";

export const metadata: Metadata = { title: "Support" };

export default function SupportPage() {
  return <LegalLayout eyebrow="We&apos;re here to help" title="Inkly Support" updated="August 31, 2026">
    <p>For help with Inkly, email <a href="mailto:support@inkly.app">support@inkly.app</a>. Please include the email or sign-in method linked to your account, your device type, and a short description of what happened. Never send passwords or payment details.</p>
    <h2>Common questions</h2>
    <h3>I can&apos;t sign in</h3><p>Make sure you use the same sign-in method you chose originally: Apple or Google. If you used Inkly as a guest, your local preferences may not be attached to a permanent account until you sign in.</p>
    <h3>How do I restore a purchase?</h3><p>Open the paywall in Inkly and choose <strong>Restore purchases</strong>. Make sure you are signed in to the same Apple ID or Google account used to buy the subscription. If it still does not appear after a few minutes, contact support.</p>
    <h3>How do I cancel a subscription?</h3><p>Subscriptions are managed by the store where you bought them. On iPhone or iPad, open Settings, tap your Apple ID, then Subscriptions. On Android, open Google Play, tap your profile, then Payments &amp; subscriptions. Cancel before the next renewal to avoid another charge.</p>
    <h3>How do reminders work?</h3><p>Inkly sends reminders only when you enable them. You can change the time or turn them off inside Inkly, or disable notifications in your device settings.</p>
    <h3>Are my photos private?</h3><p>Yes, saved photos are private by default. You decide whether to share a specific memory with friends or publicly. When you ask Inkly to make a reflection, the selected photo or processed image data is sent to Inkly&apos;s backend and AI provider to create it.</p>
    <h3>How do I delete my account?</h3><p>Delete it inside the app: <strong>Profile → Delete Account</strong>. Read more about what is removed on the <Link href="/delete-account">account deletion page</Link>.</p>
  </LegalLayout>;
}
