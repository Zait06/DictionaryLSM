# Database diagram

```mermaid
erDiagram

WORD {
    Hash id PK
    string name
    string definition
    string description
    string imageURL
    string videoURL
    int type
    int conjugation
}
```

Probably the database can be NoSQL