---
layout: doc
title: How to find out which DNS server your device uses
---

# How to find out which DNS server your device uses

To find out which DNS server answers your device's queries, follow the instructions for your operating system or router.

::: info Note

If the commands in the instructions below show your router's address — for example, `192.168.0.1` or `192.168.1.1` — your queries are handled by the server set in the router's settings, which is usually your ISP's DNS server. To change it, see [How to change the DNS server on your device or router](/en/change-dns).

:::

## How to find out the DNS server on Windows

1. Open the command prompt by pressing <kbd>Win</kbd>+<kbd>R</kbd>.
1. Type `cmd` and press <kbd>Enter</kbd>.
1. Run `nslookup example.com`.
1. Look for the `Server` and `Address` lines in the output — they show the DNS server that answered the query.

## How to find out the DNS server on macOS

1. Open Terminal by pressing <kbd>Cmd</kbd>+<kbd>Space</kbd>.
1. Type `terminal` and press <kbd>Enter</kbd>.
1. Run `scutil --dns`.
1. Look for the `nameserver[0]` line in the output — it shows the address of the DNS server that answered the query.

## How to find out the DNS server on Linux

1. Open a terminal by pressing <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>.
1. Run `cat /etc/resolv.conf`.
1. Look for the `nameserver` line in the output — it shows the address of the DNS server that answered the query.

## How to find out the DNS server on a router

1. Open your router's web interface — usually at `192.168.0.1` or `192.168.1.1`.
1. Find the internet connection settings section — usually called WAN, "Internet", or DHCP.
1. Look for the DNS address fields — if they're set to "Obtain automatically", your ISP's DNS server is in use.
