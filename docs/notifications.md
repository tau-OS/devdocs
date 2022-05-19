# Notifications

Notifications are a way to update someone about the state of your app. For example, they can inform the user that a long running background process has been completed or a new message has arrived.

Notifications should not be intrusive, or distracting.

:::note

Remember that users can disable notifications for specific applications, or globally. You should not rely exclusively on notifications.

:::

To add the ability to disable notifications, as well as insure delivery, add the following line to your desktop file:

```ini title="my-app.desktop"
X-GNOME-UsesNotifications=true
```

When using notifications, it's important that your desktop file has the same name as your application's ID. This is because the desktop file provide notification persistence, allowing the desktop to associate the notification to the application even if the application is not running.

:::caution

If you don't have a desktop file whose name matches the application id, your notification might not be displayed.

:::

## Sending Notifications

To send a notification, first create a new `GNotification` object, and add your notification data to it:

```vala title="application.vala"
var notification = new Notification ("Hello World");
notification.set_body ("This is my first notification!");

// Optional: Add an icon. By default, your app icon will be used
var file = new File.for_path ("an-image.png");
var icon = new FileIcon (file);
notification.set_icon (icon);
```

To show your notification, just use the `send_notification` function:

```vala title="application.vala"
application.send_notification ("my-app", notification);
```

You need to provide an id for your notification here. This can be used if you want to make updates to an existing notification: simply send a notification with the same id.

Note that the title should be short; the body can be longer, say a paragraph. The icon may be displayed at a small size (say, 24×24), so choose an icon that is remains readable at small size.

## Buttons and Actions

You can also add buttons to notifications that will trigger actions defined in the `app` namespace. To learn more about creating actions, visit [the GNOME documentation](https://developer.gnome.org/documentation/tutorials/actions.html).

```vala title="application.vala"
notification.add_button ("View More Details", "app.do_a_thing");
```

:::danger

Notifications can't trigger actions defined in other namespaces, like `win`.

:::

## Notification Priority

Notifications also have priority. For example, when a notification is set as `URGENT` it will stay on the screen until either the user interacts with it, or you withdraw it. To make an urgent notification, add the following line:

```vala title="application.vala"
notification.set_priority (NotificationPriority.URGENT);
```

`URGENT` notifications should really only be used on the most extreme cases.

There are also other notification priorities:

```vala title="application.vala"
// Used for notifications that do not require immediate attention - typically used for contextual background information, such as contact birthdays or local weather
notification.set_priority (NotificationPriority.LOW);

// The default priority, to be used for the majority of notifications (for example email messages, software updates, completed download/sync operations)
notification.set_priority (NotificationPriority.NORMAL);

// Used for events that require more attention, usually because responses are time-sensitive (for example chat and SMS messages or alarms)
notification.set_priority (NotificationPriority.HIGH);
```

## Stale Notifications

Sometimes notifications no longer become relevant. In that scenario, you can explicitly withdraw it:

```vala title="application.vala"
application.withdraw_notification ("my-app");
```