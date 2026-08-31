import type { Metadata } from "next";
import { LegalLayout } from "../legal-layout";

export const metadata: Metadata = { title: "Delete Your Account" };

export default function DeleteAccountPage() {
  return <LegalLayout eyebrow="Account control" title="Delete your Inkly account" updated="August 31, 2026">
    <p>Account deletion is initiated inside Inkly. This keeps the request tied to an authenticated account and protects your photos and memories.</p>
    <h2>How to delete your account</h2><ol><li>Open Inkly and go to <strong>Profile</strong>.</li><li>Scroll to <strong>Delete Account</strong>.</li><li>Review the information, confirm the deletion, and follow the in-app prompt.</li></ol>
    <h2>What is deleted</h2><p>When the deletion completes, Inkly deletes your profile, saved photos and avatars in Inkly storage, memories, messages and reactions associated with your account, friendships and invite links, daily AI-usage records, subscription records stored by Inkly, and authentication account. If storage cleanup cannot be completed safely, Inkly keeps the account intact so you can try again.</p>
    <h2>What may remain</h2><p>Some information may remain where required by law, to resolve disputes, prevent fraud, or enforce agreements. Purchase transactions and subscription records maintained by Apple, Google, and payment providers are governed by those providers&apos; retention policies.</p>
    <h2>Cancel your subscription separately</h2><p>Deleting your Inkly account does not cancel an auto-renewing App Store or Google Play subscription. Cancel it through the store account used for purchase before the next renewal date. On iPhone or iPad, open Settings → Apple ID → Subscriptions. On Android, open Google Play → Profile → Payments &amp; subscriptions → Subscriptions.</p>
    <h2>Need help?</h2><p>If you cannot access the app or the deletion does not finish, email <a href="mailto:support@inkly.app">support@inkly.app</a>.</p>
  </LegalLayout>;
}
