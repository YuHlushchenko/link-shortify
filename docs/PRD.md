# PRD — Link-Shortify

## Overview

Link-Shortify is a URL shortening service that allows users to create, manage, and track shortened links. The product targets both anonymous and authenticated users, with extended capabilities for registered accounts.

---

## Functional Requirements

### Authentication & User Management

- User registration, login, logout, and account deletion
- Google OAuth provider
- Anonymous users can create links within a defined limit; authenticated users have no creation limit

### Link Management

- Create a shortened link with an auto-generated random slug or a user-defined custom slug
- Delete a link (slug is permanently marked as `deleted` in the database and never reused)
- Activate or deactivate a link (deactivated links do not redirect)
- Set an expiration date on a link (expired links stop redirecting automatically)
- Bulk delete multiple links at once
- Sort links by creation date or popularity
- Filter links by status, date range, or other criteria

### Redirect & Click Tracking

- Redirect users who visit a shortened link to the original URL
- Record each click event with: timestamp, country, referrer, user agent (IP address is never stored)
- Display total click count per link
- Display full click history for the link owner

### QR Code

- Generate a QR code for any shortened link

### Notifications

- In-app notification bell that notifies the user when a link has been automatically deactivated due to expiration.

---

## Non-Functional Requirements

- **Performance** — redirect latency < 100ms
- **Privacy** — IP addresses are temporarily stored in Upstash Redis solely for rate limiting purposes, with a short TTL.
- **Security** — rate limiting is enforced for all users to prevent abuse:
  - Anonymous users: limited number of link creations (to be defined)
  - Authenticated users: max 10 link creations per minute and 200 per day to prevent automated abuse
- **Cost** — monthly infrastructure maintenance cost must stay within $0.05–$0.10, excluding domain registration
- **Observability** — application logs are retained for 3 months, then automatically deleted
