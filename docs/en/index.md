# What DNS is and how it works

When you type a website address like `example.com`, your browser doesn't need the domain name — it needs the server's IP address, such as `93.184.216.34`. Converting names into addresses is the job of DNS (Domain Name System), the internet's distributed "phone book".

## How it works

A simplified lookup looks like this:

1. You enter a domain in your browser.
2. The query goes to a DNS resolver — usually provided by your ISP or an app (for example, a VPN).
3. If the answer isn't in the resolver's cache, it asks the root servers, then the zone servers (`.com`, `.net`, etc.), then the domain's authoritative server.
4. The IP address is returned to the browser and cached — so the site loads faster next time.

## Why change your DNS server

- **Speed.** Public resolvers often respond faster than your ISP's.
- **Access.** If your ISP filters DNS queries, switching servers may help open a blocked site.
- **Filtering.** Some servers block ads, malicious, or adult websites.
- **Privacy.** Some servers don't keep query logs and support encryption (DoH/DoT).

::: tip If you use a VPN
The app may set its own DNS — this protects you from DNS leaks, where queries are visible to your ISP outside the tunnel. Manual DNS configuration is usually not needed in this case.
:::

## Popular public DNS servers

| Provider | IPv4 | IPv6 | Highlights |
|---|---|---|---|
| Cloudflare | `1.1.1.1`, `1.0.0.1` | `2606:4700:4700::1111` | Fast, no query logging, DoH/DoT |
| Google | `8.8.8.8`, `8.8.4.4` | `2001:4860:4860::8888` | Reliable, wide network |
| Quad9 | `9.9.9.9`, `149.112.112.112` | `2620:fe::fe` | Blocks malicious domains |
| AdGuard | `94.140.14.14`, `94.140.15.15` | `2a10:50c0::ad1:ff` | Filters ads and trackers |
| OpenDNS | `208.67.222.222`, `208.67.220.220` | `2620:119:35::35` | Family filters, flexible settings |

## How to change your DNS server

### Windows

1. Open **Settings** → **Network & Internet** → **Properties** of your active connection.
2. Click **Edit** next to "DNS server assignment".
3. Select **Manual**, turn on IPv4, and enter the addresses from the table.
4. Save the changes.

### macOS

1. Open **System Settings** → **Network**.
2. Select your active connection → **Details** → **DNS** tab.
3. Click **+** and add the server addresses.
4. Click **OK**, then **Apply**.

### Android

1. Open **Settings** → **Network & Internet** → **Private DNS**.
2. Select "Private DNS provider hostname" and enter a hostname — for example, `one.one.one.one` for Cloudflare or `dns.adguard-dns.com` for AdGuard.
3. Save. This section takes a hostname, not an IP address.

### iOS

1. Open **Settings** → **Wi-Fi**.
2. Tap **(i)** next to your network → **Configure DNS**.
3. Select **Manual**, remove the existing addresses, and add the new ones.
4. Save. The setting applies only to the selected Wi-Fi network.

### Router

1. Open your router's admin panel — usually `192.168.0.1` or `192.168.1.1` in a browser.
2. Find the **WAN**, **Internet**, or **DHCP** section.
3. Enter the DNS addresses and save.

Router settings apply to all devices on the network — no need to configure each one separately.

## If a site won't open after changing DNS

Flush the DNS cache — your system may have kept old responses:

- **Windows:** run `ipconfig /flushdns` in the command prompt.
- **macOS:** run `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` in the terminal.
- **Android/iOS:** toggle airplane mode or restart the device.

If the problem persists, switch back to automatic DNS in the settings — the site may be unavailable for another reason.
