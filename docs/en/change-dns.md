---
layout: doc
title: How to change your DNS server
---

# How to change your DNS server

For addresses of popular services, see [Public DNS servers](/en/#public-dns).

## How to change the DNS server on Windows

To change the DNS server in Windows:

1. Open **Settings** → **Network & Internet** and select your connection — **Ethernet** or **Wi-Fi**.
1. Click **Edit** next to **DNS server assignment**.
1. Select **Manual**, turn on the **IPv4** toggle, and enter the _preferred_ and _alternate_ DNS server addresses — for example, `8.8.8.8` and `8.8.4.4`.
1. Click **Save**.

## How to change the DNS server on macOS

To change the DNS server in macOS:

1. Open **System Settings** → **Network**.
1. Select your connection and click **Details** → **DNS**.
1. Click `+` and add the DNS server addresses.
1. Click **OK**.

## How to change the DNS server on Linux

On systems with NetworkManager, run in the terminal:

```bash
nmcli connection modify _connection-name_ ipv4.dns "8.8.8.8 8.8.4.4" ipv4.ignore-auto-dns yes
nmcli connection up _connection-name_
```

To list your connections, run `nmcli connection show`.

## How to change the DNS server on a router

To change the DNS server for all devices on your home network at once:

1. Open your router's web interface — usually at `192.168.0.1` or `192.168.1.1`.
1. In the WAN or DHCP settings section, enter the DNS server addresses.

## How to flush the DNS cache after switching servers

After switching servers, flush the local DNS cache so your device starts using the new server right away:

- Windows — run `ipconfig /flushdns` in the command prompt.
- macOS — `sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder`.
- Linux (systemd) — `sudo resolvectl flush-caches`.

To check which server is in use now, see [How to find out which DNS server your device uses](/en/check-dns).
