# CAZPIE AUDIO — Portfolio Website

Personal portfolio website for **Adharsh M.** — Game Audio Designer, Music Producer, and Game Designer based in Kerala, India.

Built with zero-dependency HTML5, CSS3, and vanilla JavaScript. The portfolio uses a dark editorial layout with warm terracotta and brass accents.

---

## 📁 Project Structure

```text
Cazpieaudio.com/
├── assets/
│   └── Adharsh_M_Resume_Game_Audio_Portfolio.pdf # Downloadable resume
├── css/
│   └── style.css                          # Responsive dark editorial portfolio styles
├── js/
│   └── main.js                            # Interactive project modals, audio, and navigation
├── index.html                             # Main single-page portfolio
├── serve.ps1                              # Lightweight local development server
├── start-site.bat                         # One-click Windows launch script
└── README.md                              # Documentation & maintenance guide
```

---

## 🚀 How to Run the Website Locally

You have several easy options to run and test the website on your local machine:

### Option 1: Direct Browser Launch (Instant — No Server Required)
Simply double-click **`start-site.bat`** or double-click **`index.html`** in File Explorer. It opens instantly in your default web browser (Edge, Chrome, Firefox, Brave, etc.). All navigation, modals, and SoundCloud embeds work immediately.

### Option 2: Using the Included Local Web Server
If you prefer running through `http://localhost:3000/`:
1. Open PowerShell in this project folder (`E:\Cazpieaudio.com`).
2. Run:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\serve.ps1 -Port 3000
   ```
3. Open your browser and navigate to:
   ```text
   http://localhost:3000/
   ```

### Option 3: Using VS Code Live Server
If you use Visual Studio Code:
1. Open the folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and choose **"Open with Live Server"**.

---

## 📄 Resume

The resume download button links to `assets/Adharsh_M_Resume_Game_Audio_Portfolio.pdf`.

---

## 🎵 How to Update the SoundCloud Embed

The website embeds your official SoundCloud profile (`https://soundcloud.com/cazpie`) with `auto_play=false` so visitors can choose when to play tracks.

### To customize or embed a specific Playlist, Album, or Spotlight Track:
1. Go to your track, playlist, or album on [SoundCloud](https://soundcloud.com/cazpie).
2. Click the **Share** button below the track/playlist.
3. Click the **Embed** tab at the top of the modal.
4. Choose the player style you prefer (Visual or Classic).
5. Ensure **"Enable automatic play"** is unchecked.
6. Copy the `<iframe>` embed code.
7. Open `index.html` and locate the `<div class="sc-embed-container">` section:
   ```html
   <!-- Official SoundCloud Embed -->
   <div class="sc-embed-container">
     <iframe
       id="sc-player"
       title="CAZPIE Audio SoundCloud Player"
       width="100%"
       height="450"
       scrolling="no"
       frameborder="no"
       allow="autoplay"
       src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/cazpie&color=%2348d1e1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
     </iframe>
   </div>
   ```
8. Replace the `src` attribute with the one from SoundCloud's embed code (keeping `auto_play=false` and `color=%2348d1e1` for visual consistency).

---

## 🎮 Game Audio Projects & Modal

The website features your 7 projects in the exact specified order:
1. **Knuckle House** — *IGDC 2026*
2. **Aaji vs Mumbai** — *IGDC 2026*
3. **Durgavana** — *Personal Project*
4. **Niyam** — *Coming Soon*
5. **Slime Time** — *Coming Soon*
6. **Sync Pulse** — *Coming Soon*
7. **Kishkinda Kand** — *Unreleased*

The homepage featured game is selected at random and changes every five seconds.

Clicking a project card opens its details modal. Durgavana includes the *A Hero's Path* soundtrack preview, and Kishkinda Kand includes the *Kand* soundtrack preview; projects without configured details show the **COMING SOON** placeholder.

> **Audio Independence Note:** Opening or closing project cards never reloads the page or interrupts SoundCloud playback, allowing visitors to listen to your music continuously while reviewing unreleased titles.

---

## ✉️ Contact

The Contact buttons open a new message in the visitor's default email app addressed to `djcazpie@gmail.com`.

---

## 🌐 Official Social Links Configured

- **Instagram**: [https://www.instagram.com/cazpiemusic](https://www.instagram.com/cazpiemusic)
- **Discord**: [https://discord.gg/zjwcYhQt9Q](https://discord.gg/zjwcYhQt9Q)
- **LinkedIn**: [https://www.linkedin.com/in/adharsh-m-68b184290/](https://www.linkedin.com/in/adharsh-m-68b184290/)
- **YouTube**: [https://www.youtube.com/@cazpiemusic](https://www.youtube.com/@cazpiemusic)
- **SoundCloud**: [https://soundcloud.com/cazpie](https://soundcloud.com/cazpie)
