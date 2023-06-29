# CROSSKIT

This is a simple toolkit to demonstrate key features and basic functionality of Crossmark.

## Goal

This project was created to show how simple it is to integrate with Crossmark.

It is intended that this project will...

1. Provide an example to new developer building on the XRP Ledger
2. Serve as a debugger tool while integrating with Crossmark

If you have [ issues / questions / feedback ], do not hesitate to create an issue, or start a discussion.

## Important Notes:

1. A hook is used to instantiate the Crossmark API. This is only required from server-side capable frameworks (such as NextJS).
   `This highlights that Crossmark is a client-side only API. You will not be able to interate with Crossmark from a server.`
2. A sample of the sign-in process is demonstration - detecting if crossmark is installed and restricts sign-in access to Desktop-only environments
3. Events are handled and displayed in the logger dialogue. These events are important for session management.

## Session Management

There are important events that will alter interations with the wallet. We will do our best to provide safe-guard during these events, but third-party developers should be aware of these events.

Here is a list of important events and suggested behaviors...
coming soon

## WIP

1. A hook is used to instantiate the Crossmark API. This is only required from server-side capable frameworks (such as NextJS).
   `This highlights that Crossmark is a client-side only API. You will not be able to interate with Crossmark from a server.`
