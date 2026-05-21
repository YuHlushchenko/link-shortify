# Privacy Policy

**Last updated:** May 21, 2026

---

## 1. Who We Are

Link-Shortify ("we", "us", "our") is a URL shortening service. For questions about this policy, contact us at: **yuliia.hlushchenko@gmail.com**

---

## 2. What Data We Collect and Why

### 2.1 Links You Create

When you create a shortened link, we store:

| Data | Purpose |
|------|---------|
| Destination URL | To perform the redirect |
| Shortened slug | To identify the link |
| Creation timestamp | To display to you and sort your links |
| Expiry timestamp (if set) | To automatically deactivate the link |
| Click count | To show you link statistics |
| Link status (`active`, `inactive`, `deleted`, `expired`) | To manage link availability |

**Legal basis (GDPR):** Contract performance — this data is necessary to provide the service.

### 2.2 Click Events

When someone clicks your link, we log:

| Data | Purpose |
|------|---------|
| Country (derived from IP) | Click analytics |
| HTTP Referer header | Analytics — where clicks come from |
| User-Agent string | Analytics — device/browser type |
| Timestamp | Analytics — when clicks happen |

We do **not** store the visitor's IP address in click records. Country is derived at request time and only the country code (e.g. `UA`, `US`) is persisted.

**Legal basis (GDPR):** Legitimate interests — providing meaningful analytics to link owners without identifying individual visitors.

### 2.3 Anonymous Session Identification

If you use the service without creating an account, we need a way to associate your links with your browser session so you can manage them. We do this by computing a one-way hash:

```
anonymousId = SHA-256(your IP address + ":" + browser fingerprint)
```

- The **browser fingerprint** is a value derived from your browser's characteristics (screen resolution, language, installed fonts, etc.) and is provided by your browser via JavaScript. It is **not** a device-level fingerprint — it is browser-specific and may change if you switch browsers, clear certain storage, or update your browser.
- Neither your raw IP address nor the raw fingerprint is stored. Only the **SHA-256 hash** is persisted in our database.
- This hash is used solely to enforce the 5-link limit for anonymous users and to allow you to claim your links after registration.

**Legal basis (GDPR):** Legitimate interests — preventing abuse of the anonymous tier while allowing you to access your own content.

### 2.4 Account Data (Authenticated Users)

When you register and sign in via AWS Cognito, we store:

| Data | Source | Purpose |
|------|--------|---------|
| User ID (Cognito sub) | Cognito | Links your links to your account |
| Email address | Cognito | Account identification, notifications |

We do not store passwords — authentication is managed by AWS Cognito.

### 2.5 Notifications

When one of your links expires, we create an in-app notification for you containing:
- A message describing which link expired
- A timestamp
- Read/unread status

---

## 3. How Long We Keep Your Data

| Data Type | Retention |
|-----------|-----------|
| Links (active, inactive) | Indefinitely while your account exists |
| Links marked as deleted | Indefinitely — slugs are permanently reserved and cannot be reused |
| Links marked as expired | Indefinitely — the record is kept for audit/history |
| Click events | Indefinitely |
| Notifications | Until your account is deleted |
| Anonymous session hash | Until all associated links are claimed or for the lifetime of the service |

**Why we don't delete records:** Slugs in a URL shortener must be permanently reserved once used, otherwise a previously-shared link to `/abc123` could silently redirect to entirely different content in the future. This is a deliberate design decision.

---

## 4. Who We Share Your Data With

We do **not** sell your data. We do not share your personal data with third parties for marketing.

**Infrastructure providers:**

| Provider | Role | Data shared |
|----------|------|-------------|
| Amazon Web Services (AWS) | Hosting, database (DynamoDB), authentication (Cognito), compute (Lambda) | All data — AWS is our infrastructure provider. AWS is a data processor acting on our behalf. |

AWS processes data under its [AWS Data Processing Addendum](https://aws.amazon.com/agreement/).

---

## 5. Cookies and Browser Storage

We do not use tracking cookies. We may use browser `localStorage` to store your browser fingerprint value between page loads for technical reasons (so it doesn't need to be recomputed on every request). This value stays only in your browser and is never transmitted on its own — it is always combined with your IP server-side before hashing.

---

## 6. Your Rights (GDPR)

If you are located in the European Economic Area (EEA) or United Kingdom, you have the following rights:

- **Access:** Request a copy of the personal data we hold about you.
- **Rectification:** Ask us to correct inaccurate data.
- **Erasure:** Request deletion of your account and associated data via the **Delete Account** feature. Note: as explained in Section 3, link records and slugs are retained (with your personal identifiers removed where technically feasible).
- **Restriction:** Ask us to restrict processing in certain circumstances.
- **Portability:** Request your data in a portable format.
- **Objection:** Object to processing based on legitimate interests.
- **Withdraw consent:** Where processing is based on consent, you may withdraw it at any time.

To exercise any of these rights, contact us at: **yuliia.hlushchenko@gmail.com**

You also have the right to lodge a complaint with your local data protection authority.

---

## 7. Anonymous Users — Important Notice

If you use the service without creating an account:

- Your links are associated with your current **browser and IP address combination**. They are **not** tied to your device or to you personally.
- If you switch networks (e.g. change Wi-Fi, use a VPN, switch from mobile data to Wi-Fi), the computed hash will change and your previous anonymous links will not be visible in the new session.
- If your browser significantly changes its fingerprint (e.g., after a major browser update or clearing certain browser data), you may lose access to previously created anonymous links.
- To permanently own your links, **register an account** and use the "Claim Links" feature to transfer all anonymous links to your account.

We are not responsible for loss of access to anonymous links caused by session changes described above.

---

## 8. Security

We use industry-standard security practices:

- All traffic is encrypted via HTTPS/TLS.
- Authentication is handled by AWS Cognito.
- IP addresses and fingerprints are never stored — only their one-way SHA-256 hash.
- AWS infrastructure is protected by AWS's security controls.

---

## 9. Children

This service is not directed to children under the age of 13 (or 16 in the EEA). We do not knowingly collect personal data from children.

---

## 10. Changes to This Policy

We may update this policy from time to time. The "Last updated" date at the top of this page will reflect any changes. Continued use of the service after changes constitutes acceptance of the updated policy.

---

## 11. Contact

For any privacy-related questions or requests: **yuliia.hlushchenko@gmail.com**
