---
title: "Creating a Host File Shortcut on Windows"
slug: "windows-host-file-shortcut"
date: "2021-04-06"
tags: ["windows", "productivity"]
---

If you are using Windows, creating a host file shortcut comes in handy since you will need to edit the host file occasionally.

Editing host file on Windows can be cumbersome. First, the host file path (C:\Windows\System32\drivers\etc\hosts) is hard to remember. Second, if you are just browsing to the host file location and open it with notepad, you won't be able to edit and save changes because you don't have the administrator privileges. The way I do is I will run notepad as administrator first, then only browse to host file path in notepad. However I found this is inconvenient and I am thinking to create a shortcut for this.

 I found this solution on [Superuser.com](https://superuser.com/questions/625621/how-to-create-a-hosts-file-shortcut-with-administrator-privileges). Credit to [ArchLayperson](https://superuser.com/users/241706/archlayperson)

1. Right click on the desktop
2. New > Shortcut
3. Type "notepad" as the location
4. Give the shortcut a name
5. Right click -> Properties on the shortcut
6. to the end of the "target" text box, append "%SYSTEMROOT%\System32\drivers\etc\hosts" (remember to leave a space)
7. Click on "Advanced"
8. Check Run as Administrator
9. Then press OK, on both windows
