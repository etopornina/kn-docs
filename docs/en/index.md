# What DNS is and how it works with a VPN

When you type a website address like `example.com`, your browser doesn't need the domain name — it needs the server's IP address, such as `93.184.216.34`. Converting names into addresses is the job of DNS (Domain Name System), the internet's distributed "phone book".

## How DNS works

A simplified lookup looks like this:

1. You enter a domain in your browser.
2. The query goes to a DNS resolver — usually provided by your ISP or an app (for example, a VPN).
3. If the answer isn't in the resolver's cache, it asks the root servers, then the zone servers (`.com`, `.net`, etc.), then the domain's authoritative server.
4. The IP address is returned to the browser and cached — so the site loads faster next time.

The chain looks like this:

```text
Browser → Resolver → Recursive server → Root → TLD (.com) → Authoritative
   ▲                                                                    │
   └──────────────────────── IP address ◀───────────────────────────────┘
```

Who's who in this chain:

- **Resolver (stub resolver)** — the DNS client in your OS. It can't look anything up itself: it takes the browser's query, checks the local cache, and passes it to the recursive server.
- **Recursive server** — the "detective" of the chain: it walks the whole hierarchy until it finds an answer. Provided by your ISP, a public service (`1.1.1.1`, `8.8.8.8`), or a VPN app. Caches responses for all its clients.
- **Root server** — the top of the hierarchy. It doesn't know any domain IPs, but it knows where each top-level zone's servers are: "for `.com`, ask over there".
- **TLD server** — serves a specific top-level zone (`.com`, `.net`, `.org`). It knows which authoritative servers handle each domain in its zone.
- **Authoritative server** — the final stop: it holds the domain's actual records (A, AAAA, MX, etc.) as configured by the domain owner. This is where the IP address comes from.

By default, DNS queries are unencrypted. Even when a site loads over HTTPS, your ISP can see every domain you look up — effectively a list of every page you visit.

## What happens to DNS when a VPN is on

When a VPN is active, the app sets its own resolver, and DNS queries travel inside the encrypted tunnel along with the rest of your traffic. As a result:

- your ISP only sees the connection to the VPN server, not the domains you request;
- ISP-level DNS filtering stops working — sites blocked via DNS open normally;
- answers come from the service's resolver in the country of the selected server, so sites detect your region correctly.

That's why you usually don't need to change DNS manually in system settings while the VPN is on — the app handles it for you.

## What a DNS leak is

A DNS leak is when, despite an active VPN, queries still go to your ISP's resolver outside the tunnel. Your traffic is protected, but your ISP can still see which sites you visit.

Common causes:

- a DNS server is set manually in the OS settings and overrides the VPN app's settings;
- Private DNS is enabled on Android — queries may bypass the app's resolver;
- the system uses IPv6 while the tunnel is configured for IPv4 only;
- your ISP transparently intercepts DNS queries on port 53.

You can check for leaks on services like `dnsleaktest.com` or `ipleak.net`: run the test with the VPN on. If the results show your ISP's servers or your real country, there's a leak.

::: tip What to do about a leak
Remove the manual DNS entry in your system settings, turn off Private DNS on Android, and make sure DNS leak protection is enabled in your VPN app. If the leak persists, switch VPN servers or contact support.
:::

## Changing DNS ≠ VPN

These tools solve different problems and are often confused:

- **A different DNS server** (`1.1.1.1`, `8.8.8.8`, etc.) only changes who answers your queries. Your traffic isn't encrypted and your IP address doesn't change — you look the same to websites and your ISP.
- **DoH/DoT** encrypt the DNS queries themselves, but not the rest of your traffic.
- **Smart DNS** is a technology for accessing geo-restricted services: it reroutes some queries but doesn't change your IP or encrypt traffic.
- **A VPN** encrypts all traffic, hides your IP, and handles DNS too — queries go through the tunnel to the service's resolver.

Changing DNS manually makes sense when you're not using a VPN: for speed, ad filtering, or bypassing your ISP's DNS blocks. With a VPN on, manual configuration is more likely to hurt — it can conflict with the app's DNS and cause a leak.

## If a site won't open with the VPN on

Sometimes the system or browser holds on to old DNS responses, and a site opens with an error or from the wrong region. Flush the cache:

- **Windows:** run `ipconfig /flushdns` in the command prompt.
- **macOS:** run `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` in the terminal.
- **Android/iOS:** toggle airplane mode or restart the device.

If the problem persists, check the connection on `dnsleaktest.com` and try a different VPN server — the cause may not be DNS.
