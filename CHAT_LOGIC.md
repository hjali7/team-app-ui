# Proposed Backend Architecture for Team Chat

This document outlines a recommended backend architecture for the real-time team chat feature. The goal is to create a secure, scalable, and modern chat system.

## 1. Core Technology: WebSockets

For real-time, bidirectional communication between the client and server, **WebSockets** are the ideal choice. A library like **Socket.IO** or a more modern solution like **GraphQL Subscriptions** over WebSockets is highly recommended.

-   **Socket.IO:** Provides robust features like automatic reconnection, fallback to HTTP long-polling, and broadcasting to rooms, which maps perfectly to our team-based chat rooms.
-   **GraphQL Subscriptions:** If the project already uses GraphQL for its API, extending it with subscriptions is a natural fit.

## 2. Server-Side Logic

-   **Authentication & Authorization:**
    -   Every WebSocket connection must be authenticated. This can be done by passing the user's session token (e.g., a JWT) during the initial handshake.
    -   The server must verify that the authenticated user is a member of the team whose chat they are trying to join. A user should only be able to connect to the WebSocket "room" of a team they belong to.

-   **Room Management:**
    -   Each team should have a dedicated chat room (e.g., named `team:<teamId>`).
    -   When a user connects, the server should add their socket to the rooms of all the teams they are a part of.
    -   When a message is sent to a team, the server should broadcast it to all sockets within that team's room.

-   **Message Handling:**
    -   When the server receives a new message from a client, it should:
        1.  Validate the message content (e.g., check for length, sanitize against XSS attacks).
        2.  Persist the message to the database.
        3.  Broadcast the message to the corresponding team's room.

## 3. Database Schema

A simple schema for chat messages could look like this:

-   **Messages Table:**
    -   `id` (Primary Key)
    -   `teamId` (Foreign Key to Teams table)
    -   `userId` (Foreign Key to Users table)
    -   `content` (Text)
    -   `fileUrl` (String, optional)
    -   `fileName` (String, optional)
    -   `fileType` (String, optional)
    -   `createdAt` (Timestamp)

## 4. File Uploads

-   **Security:** File uploads should be handled with care.
    1.  The client should first request a **presigned URL** from the backend to upload the file directly to a cloud storage service (like AWS S3, Google Cloud Storage, or Cloudinary).
    2.  This prevents large files from overwhelming the application server.
    3.  The server should enforce file size limits (5MB) and scan files for malware before making them accessible.
-   **Process:**
    1.  User selects a file.
    2.  Client requests a presigned URL from the server for the specified file type and size.
    3.  Server generates the URL and returns it to the client.
    4.  Client uploads the file directly to the cloud storage using the presigned URL.
    5.  Once the upload is complete, the client sends a regular chat message event to the WebSocket server, including the URL of the uploaded file.
    6.  The server then persists this message and broadcasts it to the team.

This architecture ensures that the chat system is secure, performant, and scalable.
