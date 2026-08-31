import type { Metadata } from "next";
import { LegalLayout } from "../legal-layout";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return <LegalLayout eyebrow="Your information" title="Privacy Policy" updated="August 31, 2026">
    <p>Inkly helps you create personal reflections from photos, preferences, and everyday activity. This policy explains what we collect, why we use it, and the choices you have.</p>
    <h2>Information we collect</h2>
    <ul><li><strong>Account and profile information</strong>, including your account ID, display name, avatar, and chosen sign-in provider.</li><li><strong>Guest preferences</strong>, such as local persona choices, reflection language, reminder preferences, and display name.</li><li><strong>Your content</strong>, including photos you capture or upload, generated or edited reflections, saved memories, reactions, messages, and friend/invite activity.</li><li><strong>Usage and purchase information</strong>, including reflection-generation counts, paywall and purchase status, streaks, reminders, and relevant app events.</li><li><strong>Technical information</strong>, including app version, device platform, notification-permission state, diagnostics, crash reports, and network request metadata.</li></ul>
    <h2>How we use information</h2>
    <p>We use information to generate and personalize reflections; save and display memories; support invitations and sharing; manage subscriptions, purchase restoration, and free usage limits; send reminders you enable; and improve reliability, prevent abuse, and understand app use.</p>
    <h2>Photos and AI processing</h2>
    <p>When you request a reflection from a photo, the photo or processed image data may be sent to Inkly&apos;s backend and AI providers, including OpenAI, to analyze the image and generate a reflection. Do not upload content you do not have permission to use or sensitive information you do not want processed.</p>
    <h2>Where information is processed</h2>
    <p>Inkly uses Supabase for authentication, database, and private storage; RevenueCat and the Apple App Store or Google Play for subscriptions and purchase status; PostHog for product analytics; and Sentry for diagnostics and crash reporting when configured. These providers process information under their own privacy practices.</p>
    <h2>Private by default and sharing</h2>
    <p>Saved photos are private by default. You can deliberately choose friends or public visibility for a memory. We do not sell personal information. We may share information with providers needed to run Inkly, when you choose to share content, to comply with law, protect rights and safety, or as part of a business transfer.</p>
    <h2>Retention and deletion</h2>
    <p>We keep information as long as reasonably needed to provide Inkly, meet legal obligations, resolve disputes, and enforce agreements. You can delete your account from inside the app. Account deletion removes your Inkly profile, saved photos and avatars, memories, messages and reactions associated with the account, friendships and invites, usage records, and subscription records held in Inkly&apos;s database. Purchases remain subject to your store provider&apos;s records and policies.</p>
    <h2>Your choices</h2>
    <p>You may use Inkly as a guest, adjust language and reminder settings, disable notifications in device settings, choose sharing visibility for each memory, restore or manage subscriptions through your Apple or Google account, and request help at <a href="mailto:support@inkly.app">support@inkly.app</a>.</p>
    <h2>Children</h2><p>Inkly is not intended for children under 13, and we do not knowingly collect their personal information.</p>
    <h2>Changes and contact</h2><p>We may update this policy and will post the revised version here with a new effective date. For privacy questions, contact <a href="mailto:support@inkly.app">support@inkly.app</a>.</p>
  </LegalLayout>;
}
