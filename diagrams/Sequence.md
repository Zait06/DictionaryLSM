# Sequence diagram

```mermaid
sequenceDiagram
Page->>Server: Search word
Server->>Database: Search word
Database-->>Server: Send description and video
Server-->>Page: Show description and video
```