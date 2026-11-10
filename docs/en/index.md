---
layout: doc
title: The Domain Name System
---

# The Domain Name System

A browser can only open a website once it knows its IP address. But numeric addresses are hard for people to remember, so websites get domain names — for example, `example.com` instead of `93.184.216.34`.

The Domain Name System (DNS) is a distributed database that your browser queries when opening a website. It automatically matches domain names to IP addresses.

The mapping is stored in DNS records — for example, an `A` record holds an IPv4 address, `AAAA` an IPv6 address, and `CNAME` sets an alias of another domain.

## How DNS works

When you type a domain name into your browser:

1. Your browser checks its own cache — if there's no match, the request goes to your operating system.
1. The operating system checks its cache and the `hosts` file — if there's no match, the request goes to the recursive server.

::: info Note

The recursive server is usually your ISP's DNS server or a public service — for example, Google Public DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1). Learn more about [public DNS servers](#public-dns).

:::

1. The recursive server checks its cache — if there's no match, it queries the DNS hierarchy servers in order: the root server, then the TLD server, then the domain's authoritative server. Learn more about [types of DNS servers](#dns-server-types).
1. The resulting IP address is returned to the browser and cached at several levels — in the browser, in the operating system, and on the recursive server. The site will load faster next time.

## Types of DNS servers {#dns-server-types}

DNS works thanks to DNS servers — they exchange queries over a common protocol to find domain IP addresses. DNS servers follow a strict hierarchy.

| DNS server type | What it does |
|---|---|
| Recursive server | Takes the query from the browser and looks up the IP address. Queries other DNS servers down the chain |
| Root server | Takes the query from the recursive server and returns the IP address of the server responsible for the requested <Tooltip align="end" text="The last part of an internet address after the dot, e.g. .com, .net, .org, .io">top-level domain</Tooltip> |
| Top-level domain server (TLD server) | Takes the query from the recursive server and returns the IP address of the authoritative server that holds the domain's records |
| Authoritative server | Takes the query from the recursive server and returns the IP address of the requested domain |

## Public DNS servers {#public-dns}

Your ISP provides its DNS server as part of your internet access. Your queries may be logged or filtered — for example, certain domains may be blocked to comply with legal requirements. To find out which DNS server you currently use, see [How to find out which DNS server your device uses](/en/check-dns).

Besides ISP DNS servers, independent companies offer public DNS servers as a standalone service — usually focusing on security and speed. Such servers typically support query encryption protocols — for example, DNS over HTTPS, where queries travel inside an encrypted HTTPS connection. Your ISP and attackers cannot read or tamper with such queries on the way to the server.

To switch DNS servers, enter the chosen service's addresses in your device's or router's network settings — see [How to change the DNS server on your device or router](/en/change-dns). Popular services:

| Service | <Tooltip position="bottom" text="The classic IP version. An IPv4 address is four dot-separated numbers, e.g. 8.8.8.8">IPv4</Tooltip> addresses | <Tooltip position="bottom" text="The newer IP version with a larger address space. An IPv6 address is written as hexadecimal groups separated by colons, e.g. 2606:4700:4700::1111">IPv6</Tooltip> addresses | Features |
|---------|----------------|----------------|----------|
| Google Public DNS | `8.8.8.8`, `8.8.4.4` | `2001:4860:4860::8888`, `2001:4860:4860::8844` | No filtering, supports DoH and DoT |
| Cloudflare DNS | `1.1.1.1`, `1.0.0.1` | `2606:4700:4700::1111`, `2606:4700:4700::1001` | Privacy-focused, supports DoH and DoT |
| Quad9 | `9.9.9.9`, `149.112.112.112` | `2620:fe::fe`, `2620:fe::9` | Blocks malicious domains, supports DoH and DoT |
| AdGuard DNS | `94.140.14.14`, `94.140.15.15` | `2a10:50c0::ad1:ff`, `2a10:50c0::ad2:ff` | Blocks ads and domains of tracking and analytics networks, supports DoH and DoT |
| Yandex DNS | `77.88.8.8`, `77.88.8.1` | `2a02:6b8::feed:0ff`, `2a02:6b8:0:1::feed:0ff` | Basic mode without filtering; Safe and Family modes use different addresses. Supports DoH and DoT |

::: info Note

DNS-level filtering works per domain: the server blocks the whole domain, not individual page elements.

:::

## Frequently asked questions

### What is a DNS leak?

A DNS leak is when your DNS queries don't go through the secure channel meant for them (such as a VPN tunnel) and are sent directly to your ISP or another unintended DNS server. Because of a leak, your ISP can see which sites you visit, and an attacker can spoof responses to redirect you to a fake site.

### Why does a site still open at the old address after its DNS record changed?

Every DNS record has a time to live — TTL. Until it expires, your browser, operating system, and the recursive server return the cached answer instead of requesting the record again. That's why a domain's IP address change doesn't reach all users at once — it usually takes from a few minutes to 48 hours, depending on the TTL.
