# CROSSKIT

This is a simple toolkit to demonstrate key features and basic functionality of Crossmark.

## Goal

This project was created to show how simple it is to integrate with Crossmark.

It is intended that this project will...

1. Provide an example to new developer building on the XRP Ledger
2. Serve as a debugger tool while integrating with Crossmark

If you have `issues / questions / feedback`, do not hesitate to create an issue, or start a discussion. We are open to suggestions, and would love to hear your feedback.

## Important Notes:

1. A hook is used to instantiate the Crossmark API. This is only required from server-side capable frameworks (such as NextJS).

<aside>
💡 This highlights that the Crossmark API is client-side only. You will NOT be able to access the methods or events found in the Crossmark API from a server-side environment.
</aside>

2. A sample of the sign-in process is demonstration - detecting if crossmark is installed and restricts sign-in access to Desktop-only environments
3. Events are handled and displayed in the logger dialogue. These events are important for session management.

## Session Management

There are `important` events that will alter iterations with the wallet. We will do our best to provide safe-guard during these events, but third-party developers should be aware of these events.

Here is a list of important events and suggested behaviors...

| Event          | Description                                                                                                                                               | Suggested Behavior                                                                                                                                                                                                                                                      |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user-change    | This is an event when the user decide to switch to another profile with the wallet. This will affect the active wallets, or card attached to the account. | Since the user has change to a new account, you should consider this as a sign-out event and direct the user back to the sign-in page.                                                                                                                                  |
| network-change | This is an event when the user switches to different network within the wallet.                                                                           | You should notify the user of the change, and make them aware than any future transactions will be signed with the new network. If your application is not capable with the network, notify the user and listen for when the user changes back to the original network. |
| open           | This is an event that indicates that the user has opened up the extension ( in popup mode).                                                               | …                                                                                                                                                                                                                                                                       |
| close          | This is an event that indicates that the user has closed up the extension ( in popup mode).                                                               | …                                                                                                                                                                                                                                                                       |

## WIP

1. Coming Soon…
