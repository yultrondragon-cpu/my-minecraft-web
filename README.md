# YDragonSMP Website

Static website for YDragonSMP.

## Server
Minecraft server address:
`ydragonsmp.shockbyte.games`

## Deploy with Cloudflare Pages
1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, and `script.js`.
3. In Cloudflare Pages, import the GitHub repository.
4. Framework preset: **None**.
5. Build command: leave empty.
6. Output directory: `/` (or the repository root).
7. Deploy.

The live player count uses the public mcsrvstat.us API from the browser.

## Before launch
Edit `index.html`:
- Replace the Discord `#` link.
- Replace the Store `#` link.
- Replace starter rules with your official rules.
- Add your Minecraft version if desired.


## Ad setup

### Adsterra
The website now has three banner placements:
- `#adsterra-top`
- `#adsterra-middle`
- `#adsterra-bottom`

After Adsterra approves the website/ad unit, paste each generated banner script into its corresponding slot. Adsterra's current publisher documentation says banner scripts are generated from the publisher dashboard after approval and can be placed in the HTML body.

### Aplixir
The Rewards section has five video-reward slots. The actual Aplixir rewarded-video SDK/integration must be added using the integration code supplied by Aplixir for your account/site.

Do not invent or reuse another publisher's ad code. Replace the placeholders with the code generated in your own publisher accounts.

### Important
The website UI alone must not award a Minecraft reward merely because a visitor clicks a button. The server-side reward should be granted only after the ad provider's verified completion/callback flow is integrated.
