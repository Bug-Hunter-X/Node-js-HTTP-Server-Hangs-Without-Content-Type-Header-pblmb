# Node.js HTTP Server Hanging Bug

This repository demonstrates a subtle bug in a Node.js HTTP server where omitting the `Content-Type` header in the response can cause the server to hang indefinitely.  The bug is particularly tricky because it doesn't produce obvious error messages.

## Bug Description

The provided `bug.js` file contains a minimal HTTP server.  If you run this server and make a request, the response will hang without sending the 'Hello World!' message. The solution involves adding the `Content-Type` header which explicitly sets the content type to text/plain, resolving this issue.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Make a request to `http://localhost:3000/`.
5. Observe that the response hangs.
6. Uncomment the `res.setHeader` line in `bug.js`, run again, and see the response working as expected.

## Solution

The `bugSolution.js` file provides the corrected code. The key change is setting the `Content-Type` header to `text/plain`. This informs the client about the type of data being sent, allowing the response to complete successfully.