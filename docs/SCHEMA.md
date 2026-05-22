# Database Schema

## Overview

Link-Shortify uses two DynamoDB tables:

- **links-table** — stores links and notifications using single table design
- **clicks-table** — stores click events as an append-only log

---

## links-table

Single table design with two entity types: Links and Notifications.

### Keys

| Entity       | PK       | SK                       |
| ------------ | -------- | ------------------------ |
| Link         | `slug`   | `LINK`                   |
| Notification | `userId` | `NOTIFICATION#createdAt` |

### Attributes — Link

| Attribute   | Type   | Notes                                                         |
| ----------- | ------ | ------------------------------------------------------------- |
| PK          | String | Partition key — slug                                          |
| SK          | String | Sort key — always `LINK`                                      |
| userId      | String | Cognito sub of the owner. Absent for anonymous links          |
| anonymousId | String | SHA256(IP + fingerprint). Absent after claim or for auth links |
| originalUrl | String | Destination URL                                               |
| status      | String | `active`, `inactive`, `deleted`, or `expired`                 |
| createdAt   | Number | Unix timestamp                                                |
| updatedAt   | Number | Unix timestamp                                                |
| expiresAt   | Number | Unix timestamp of expiration                                  |
| clickCount  | Number | Total number of clicks                                        |

A link has either `userId` (authenticated) or `anonymousId` (anonymous), never both. After claim (`POST /auth/claim`), `userId` is set and `anonymousId` is removed.

### Attributes — Notification

| Attribute      | Type    | Notes                                             |
| -------------- | ------- | ------------------------------------------------- |
| PK             | String  | Partition key — userId (Cognito sub)              |
| SK             | String  | Sort key — `NOTIFICATION#createdAt`               |
| notificationId | String  | UUID                                              |
| message        | String  | Notification content                              |
| isRead         | Boolean | Read status                                       |
| createdAt      | Number  | Unix timestamp                                    |

### Global Secondary Indexes

| GSI  | PK            | SK           | Purpose                                    |
| ---- | ------------- | ------------ | ------------------------------------------ |
| GSI1 | `userId`      | `createdAt`  | Get all links by user, sort by date        |
| GSI2 | `userId`      | `clickCount` | Sort links by popularity                   |
| GSI3 | `anonymousId` | `createdAt`  | Get all links by anonymous session; claim  |

### Link Expiration

Link expiration is handled by **EventBridge Scheduler**. When a link is created or updated with an `expiresAt` value, a one-time EventBridge schedule is created. At the scheduled time, the `expire-link` Lambda is invoked — it sets the link status to `expired` and creates a Notification for the owner (if the link has a `userId`). For anonymous links, no notification is created.

Expired records are **never deleted** from the database.

---

## clicks-table

Append-only log of click events.

### Keys

| PK     | SK                  |
| ------ | ------------------- |
| `slug` | `clickedAt#clickId` |

### Attributes

| Attribute | Type   | Notes                                                |
| --------- | ------ | ---------------------------------------------------- |
| PK        | String | Partition key — slug                                 |
| SK        | String | Sort key — `clickedAt#clickId`                       |
| clickId   | String | UUID, unique identifier for the click event          |
| clickedAt | Number | Unix timestamp of the click                          |
| country   | String | ISO 3166-1 alpha-2 code from `CF-IPCountry` header   |
| referrer  | String | HTTP Referer header                                  |
| userAgent | String | HTTP User-Agent header                               |

### Global Secondary Indexes

None required.

---

## Access Patterns

| Access Pattern                       | Table        | Operation                                                           |
| ------------------------------------ | ------------ | ------------------------------------------------------------------- |
| Get link by slug (redirect)          | links-table  | Query PK=slug, SK=LINK                                              |
| Get all links by user                | links-table  | Query GSI1 PK=userId                                                |
| Sort links by date                   | links-table  | Query GSI1 PK=userId, sort by SK                                    |
| Sort links by popularity             | links-table  | Query GSI2 PK=userId, sort by SK                                    |
| Check if slug exists                 | links-table  | Query PK=slug                                                       |
| Get anonymous links by session       | links-table  | Query GSI3 PK=anonymousId                                           |
| Count anonymous links (limit check)  | links-table  | Query GSI3 PK=anonymousId, SELECT COUNT, filter status <> deleted   |
| Claim anonymous links                | links-table  | Query GSI3 PK=anonymousId → batch Update userId, remove anonymousId |
| Get all notifications by user        | links-table  | Query PK=userId, SK begins_with NOTIFICATION#                       |
| Get unread notifications             | links-table  | Query PK=userId, SK begins_with NOTIFICATION# + filter isRead=false |
| Get all clicks by slug               | clicks-table | Query PK=slug                                                       |
| Get clicks by date range             | clicks-table | Query PK=slug + FilterExpression clickedAt BETWEEN from AND to      |