---
sidebar_position: 2
---

# App Bar

![App Bar](/assets/appbar_normal.png)

App bars—internally, headerbars—appear at the top of apps. They include the title of the app or page, the main functions available from that location, and navigation options.

App Bars depend on context for their styling. For Primary Windows without Sidebars, an App Bar displays itself with a solid gray background, and a bottom separator. But, with the context of a Primary Window or section without scroll, it will show itself with a lighter background, and no separator.

No actions, unless needed, should be text-form instead of an icon in an App Bar. And they should always be on the right of the App Bar.

The most common actions you'll find in one are the app name, search, an optional specific action, and then the App Menu, in that order. The app name should only be shown once in the entire app, and always be on the left of the App Bar. Centered title position is reserved for other custom functionality such as View Switchers, if the layout demands it.

- If more actions are needed to be here, put them on the Menu.

- If there's more than one App Bar (such as in Sidebared Apps), the other App Bars should use a Secondary Menu which uses the `view-more` symbolic.

## Flat App Bar

![App Bar (flat)](/assets/appbar_flat.png)

A flat App Bar is used when the content below it doesn't scroll. It is made to be flush with the content below by being transparent in its background, and usually accompanies a View Title or View Switcher below it.

Content may be positioned below the app bar while in flat form, to make the layout more utilized properly, such as image headers, or watching a video. In those cases, the app bar should be flat, and the media should extend to the top of the Primary Window.

A Flat App Bar, if needed, can be shown only on mouse hover, if the functionality of it being in-view is not needed.