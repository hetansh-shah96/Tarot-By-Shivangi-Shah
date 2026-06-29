// Tweaks for Tarot By Shivangi Shah — palette, display font, stars
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#8B7FB8", "#322E4A", "#F1EEF7"],
  "displayFont": "Cormorant Garamond",
  "stars": true
}/*EDITMODE-END*/;

function TarotTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    const [accent, night, soft] = t.palette;
    root.style.setProperty('--accent', accent);
    root.style.setProperty('--night', night);
    root.style.setProperty('--soft', soft);
    root.style.setProperty('--font-display', `'${t.displayFont}', Georgia, serif`);
    root.setAttribute('data-stars', t.stars ? 'on' : 'off');
  }, [t]);

  return (
    <TweaksPanel>
      <TweakSection label="Mood" />
      <TweakColor
        label="Palette"
        value={t.palette}
        options={[
          ["#8B7FB8", "#322E4A", "#F1EEF7"],
          ["#C98A96", "#43313B", "#F8EEF0"],
          ["#7C92AE", "#2E3648", "#EDF1F6"]
        ]}
        onChange={(v) => setTweak('palette', v)}
      />
      <TweakSelect
        label="Headline font"
        value={t.displayFont}
        options={["Cormorant Garamond", "Marcellus", "EB Garamond"]}
        onChange={(v) => setTweak('displayFont', v)}
      />
      <TweakToggle label="Night stars" value={t.stars} onChange={(v) => setTweak('stars', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<TarotTweaks />);
