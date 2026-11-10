---
layout: doc
title: How to change the DNS server on your device or router
---

# How to change the DNS server on your device or router

For addresses of popular services, see [Public DNS servers](/en/#public-dns).

## How to change the DNS server on Windows

To change the DNS server on Windows 10 or Windows 11:

1. Open the list of network connections by pressing <kbd>Win</kbd>+<kbd>R</kbd>.
1. Type `ncpa.cpl` and press <kbd>Enter</kbd>.
1. Right-click your connection and select **Properties**.
1. Select **Internet Protocol Version 4 (TCP/IPv4)** and click **Properties**.
1. Select **Use the following DNS server addresses** and enter the preferred and alternate server addresses — for example, `8.8.8.8` and `8.8.4.4`.
1. Click **OK**.

## How to change the DNS server on macOS

<Tabs :labels="['macOS Ventura and later', 'macOS Monterey and earlier']">
<template #tab-0>

To change the DNS server on macOS Ventura and later:

1. Open **System Settings** → **Network**.
1. Select your connection and click **Details** → **DNS**.
1. Click `+` and add the DNS server addresses.
1. Click **OK**.

</template>
<template #tab-1>

To change the DNS server on macOS Monterey and earlier:

1. Open **System Preferences** → **Network**.
1. Select your connection and click **Advanced** → **DNS**.
1. Click `+` and add the DNS server addresses.
1. Click **OK**.

</template>
</Tabs>

## How to change the DNS server on Linux

The GUI path depends on your distribution and desktop environment. The universal way is the `nmcli` command — it works wherever the network is managed by NetworkManager.

1. Open a terminal by pressing <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>.
1. List your connections with `nmcli connection show` and find your connection's name.
1. Run the commands:

    ```bash
    nmcli connection modify <CONNECTION_NAME> ipv4.dns "8.8.8.8 8.8.4.4" ipv4.ignore-auto-dns yes
    nmcli connection up <CONNECTION_NAME>
    ```

## How to change the DNS server on a router

To change the DNS server for all devices on your home network at once:

1. Open your router's web interface — usually at `192.168.0.1` or `192.168.1.1`.
1. Find the internet connection settings section and enter the DNS server addresses.

The section name depends on the manufacturer — look for WAN, "Internet", or DHCP.

## How to flush the DNS cache after switching servers

After switching servers, flush the local DNS cache so your device starts using the new server right away:

- Windows — open the command prompt (<kbd>Win</kbd>+<kbd>R</kbd> → `cmd`) and run `ipconfig /flushdns`.
- macOS — `sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder`.
- Linux (systemd) — `sudo resolvectl flush-caches`.

To check which server is in use now, see [How to find out which DNS server your device uses](/en/check-dns).
