sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user writes a new note and clicks the Save button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
        activate server
        Note right of server: Contains the new note as form data
        server-->>browser: HTTP 302 Redirect to /exampleapp/notes
        deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
        activate server
        server-->>browser: HTML document
        deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server
        server-->>browser: the css file
        deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
        activate server
        server-->>browser: the JavaScript file
        deactivate server

    Note right of browser: The browser executes JavaScript that fetches the updated list of notes in JSON

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: Updated list of notes (JSON)
        deactivate server

    Note right of browser: The browser executes the callback function that renders the updated notes

