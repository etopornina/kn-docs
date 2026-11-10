# DNS and DNS servers

A browser can only open a website once it knows its IP address. But numeric addresses are hard for people to remember, so websites get domain names — for example, `example.com` instead of `93.184.216.34`.

Matching domain names to IP addresses is the job of DNS — a distributed database that your browser queries when opening a website.

## How DNS works

When you type a domain name into your browser:

1. Your browser checks its own cache — if there's no match, the request goes to your operating system.
2. The operating system checks its cache — if there's no match, the request goes to the recursive server.

::: info Note

The recursive server is usually your ISP's DNS server or a public service — for example, Google Public DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1).

:::

3. The recursive server queries other DNS servers one by one.
4. The resulting IP address is returned to the browser and cached — the site will load faster next time.

## Types of DNS servers

DNS works thanks to DNS servers — machines that exchange queries over a common protocol to find domain IP addresses. DNS servers follow a strict hierarchy.

| DNS server type | What it does |
|---|---|
| Recursive server | Takes the query from the browser and looks up the IP address. Queries other DNS servers down the chain |
| Root server | Takes the query from the recursive server and returns the IP address of the server responsible for the requested <Tooltip text="The last part of an internet address after the dot, e.g. .com, .ru, .net, .org">top-level domain</Tooltip> |
| Top-level domain server (TLD server) | Takes the query from the recursive server and returns the IP address of the server that belongs to the specific top-level domain and holds the domain's record database |
| Authoritative server | Takes the query from the recursive server and returns the IP address of the requested domain |

## FAQ

### How is a public DNS server different from an ISP's DNS server?

An ISP provides DNS as part of your internet access. It may filter or log your queries — for example, blocking certain domains to comply with legal requirements.

A public DNS is an independent third-party service that usually emphasizes security and speed. Public DNS services also typically support newer encryption protocols (such as DNS over HTTPS), which reduces the risk of your queries being intercepted in transit.

### What is a DNS leak?

A DNS leak is when your DNS queries don't go through the secure channel meant for them (such as a VPN tunnel) and are sent directly to your ISP or another unintended DNS server.
