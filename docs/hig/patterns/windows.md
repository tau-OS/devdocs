---
sidebar_position: 1
---

# Windows

![Window](/assets/window.png)

Windows are the main object in an app's interface.

## Primary Windows

Primary Windows are what shows up when your app is opened, and displays the main functionality.

* Primary Windows shouldn't depend on anything, closing one should not close others.

* Apps should restrict themselves to one Primary Window.

* All Primary Windows should be able to be resized.

* Try to make the default size of your Primary Window match the desired amount of content your app needs.

## Secondary Windows

Secondary Windows are used for complementary content to the Primary Window, such as **About** or **Preferences**.

* Secondary Windows should always be modal to a Primary Window, appearing "attached" to it and centralized.

* Closing a Primary Window should close any Secondary Windows associated with it.

* Avoid stacking Secondary Windows.

* Avoid complex content on a Secondary Window, and don't make it bigger than the Primary Window.

## Window Sizing

Primary Windows should be able to get to the extreme size of 360×266px for purposes of compatibility with mobile Linux users.
