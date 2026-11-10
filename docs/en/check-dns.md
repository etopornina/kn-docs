---
layout: doc
title: How to find out which DNS server your device uses
---

# How to find out which DNS server your device uses

To find out which DNS server answers your device's queries, run the command for your operating system.

## How to check the DNS server on Windows

1. Open the command prompt: press <kbd>Win</kbd>+<kbd>R</kbd>, type `cmd`, and press <kbd>Enter</kbd>.
1. Run `nslookup example.com`.
1. Look for the `Server` and `Address` lines at the top of the output — they show the DNS server that answered the query.

To see all DNS servers assigned to your network adapters, run `ipconfig /all` and look for the "DNS Servers" line.

## How to check the DNS server on macOS

1. Open Terminal: press <kbd>Cmd</kbd>+<kbd>Space</kbd>, type `terminal`, and press <kbd>Enter</kbd>.
1. Run `scutil --dns`.
1. Find the `nameserver[0]` line in the output — it shows your DNS server's address.

## How to check the DNS server on Linux

1. Open a terminal: press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> or find "Terminal" in your applications menu.
1. Run `cat /etc/resolv.conf`.
1. Find the `nameserver` line in the output — it shows the DNS server's address.

If your system uses systemd-resolved, run `resolvectl status` and look for the `DNS Servers` line.

::: info Note

If the commands show your router's address instead of a DNS server — for example, `192.168.0.1` or `192.168.1.1` — your queries are handled by the server set in the router's settings, which is usually your ISP's DNS server.

:::
