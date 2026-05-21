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
| expiresAt   | Number | Unix timestamp, used as DynamoDB TTL                          |
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

### Streams

DynamoDB Streams is enabled on this table. A Lambda function is subscribed to the stream and listens for `REMOVE` events caused by TTL expiration. When a link expires, the Lambda automatically creates a new Notification record for the link owner. For anonymous links (no `userId`), the stream event is ignored — no notification is created.

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
| SK        | String | Sort key — Unix timestamp + UUID to avoid collisions |
| clickId   | String | UUID, unique identifier for the click event          |
| country   | String | Derived from request headers                         |
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
| Get clicks by date range             | clicks-table | Query PK=slug, SK between dates                                     |