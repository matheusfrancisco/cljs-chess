# Cljs Chess
Chess Game made with CLJS

## Commands

### Watch Dev/Tests
Build the developer build and start shadow-cljs watching and serving main in [`localhost:8000`](http://localhost:8000) and tests in [`localhost:8100`](http://localhost:8100)
```bash
npm run watch
```

### CI Tests
Run **Karma** tests targeted for running CI tests with *Headless Chromium Driver*
```bash
npm run ci:tests
```

### Release
Build the release package to production deploy
```bash
npm run release
```

## TODO
- [ ] Base Layout
- [ ] Game State management
- [ ] Reflect State on doms
- [ ] Check game rules
- [ ] Turns
- [ ] Timer
- [ ] Points
