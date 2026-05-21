# Terms of Service

**Last updated:** May 21, 2026

---

## 1. Acceptance of Terms

By accessing or using Link-Shortify ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Service.

---

## 2. The Service

Link-Shortify is a URL shortening service that allows users to create short links that redirect to longer destination URLs. The Service is provided "as is" without any uptime guarantees.

---

## 3. Anonymous Use

### 3.1 Anonymous Link Limit

You may use the Service without creating an account. Anonymous users may create up to **5 active links** per browser session (identified by a combination of your IP address and browser fingerprint).

"Active" means links with status `active` or `inactive`. **Deleting a link frees up a slot**, allowing a new anonymous link to be created.

### 3.2 Session Stability

Your anonymous links are tied to your current browser and IP address. You may lose access to them if:

- You change your network (switch Wi-Fi, mobile data, or use a VPN).
- Your browser is significantly updated or its fingerprint changes.
- You use a different browser or device.

**We strongly recommend creating an account** if you want permanent, browser-independent access to your links.

### 3.3 Claiming Anonymous Links

After registering, you may transfer anonymous links to your account by using the **Claim Links** feature (`POST /auth/claim`). This operation:

- Transfers all anonymous links associated with your current browser + IP session to your account.
- Can be called multiple times from different browser/IP combinations to claim links created across different sessions.
- Does nothing if there are no anonymous links to claim.

---

## 4. Accounts

### 4.1 Registration

Accounts are created via AWS Cognito. You are responsible for maintaining the security of your account credentials.

### 4.2 Account Deletion

You may delete your account at any time via the **Delete Account** feature. Upon deletion:

- Your Cognito account is permanently deleted.
- All your links are marked as `deleted`.
- Your notifications are removed.
- **Slugs remain permanently reserved** and cannot be reused by anyone (see Section 5.2).

---

## 5. Links

### 5.1 Link Status

Links can have the following statuses:

| Status | Meaning |
|--------|---------|
| `active` | The link is live and redirects visitors |
| `inactive` | The link is disabled; visitors receive a 410 Gone response |
| `deleted` | The link has been deleted by the user; visitors receive a 410 Gone response |
| `expired` | The link's expiry time has passed; visitors receive a 410 Gone response |

### 5.2 Permanent Slug Reservation

Once a slug is created (even if later deleted or expired), **it cannot be reused**. This ensures that links shared publicly always resolve to the same destination (even if that destination shows a "gone" page) and cannot be silently hijacked.

### 5.3 Link Expiry

You may optionally set an expiry timestamp when creating or updating a link. When a link expires:

- Its status changes to `expired`.
- Redirects return a 410 Gone response.
- If you have an account, you receive an in-app notification.
- The link record is permanently retained (see Section 5.2).

### 5.4 No Guarantee of Availability

We do not guarantee that any shortened link will remain accessible indefinitely. We reserve the right to deactivate links that violate these Terms.

---

## 6. Prohibited Use

You may not use the Service to shorten URLs that:

- Link to malware, phishing pages, or any content that is harmful to visitors.
- Distribute spam.
- Violate any applicable law or regulation.
- Infringe on third-party intellectual property rights.
- Link to child sexual abuse material (CSAM) — this will result in immediate permanent ban and reporting to relevant authorities.
- Facilitate fraud, scams, or unauthorized data collection.

We reserve the right to immediately deactivate any link and/or terminate any account that we determine, at our sole discretion, to be in violation of these Terms.

---

## 7. Click Analytics

Click data (country, referrer, user-agent, timestamp) is collected when a visitor clicks a shortened link and is made available to the link owner. By creating a link and sharing it, you acknowledge that click analytics will be collected on your behalf.

---

## 8. Intellectual Property

You retain all rights to the destination URLs you submit. By using the Service, you grant us a limited license to store and process those URLs solely for the purpose of providing the redirect service.

---

## 9. Disclaimer of Warranties

THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE.

---

## 10. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE, INCLUDING LOSS OF DATA OR ACCESS TO ANONYMOUS LINKS DUE TO SESSION CHANGES.

---

## 11. Changes to These Terms

We may update these Terms from time to time. The "Last updated" date at the top of this page will reflect any changes. Continued use of the Service after changes constitutes acceptance of the updated Terms.

---

## 12. Governing Law

These Terms are governed by the laws of **Ukraine**. Any disputes shall be resolved in the courts of **Ukraine**.

---

## 13. Contact

For any questions about these Terms: **yuliia.hlushchenko@gmail.com**
