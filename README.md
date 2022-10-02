# lmorchard's sketches-v02

For years, I've tinkered with game development on the web. But, I haven't finished (m)any games. So, I decided to just focus more on finishing little interesting sketches of graphics and sound.

## TODO

- [ ] "Sketches Home" button goes to /index.html, but deployed site is at /sketches-v02/index.html
- [ ] Drop dependency on MainLoop.js - seems unmaintained and generates annoyingly-nested stack traces in exceptions
- [ ] Create my own World class with `createWorld(this)` in the constructor
  - e.g. like [XREngine's World.ts](https://github.com/XRFoundation/XREngine/blob/a083cd0989e1c064186b35c405859886f9fae465/packages/engine/src/ecs/classes/World.ts#L57)
  - could probably wrap up some common init between sketches like adding tweak pane and replay system, etc  
- [ ] In replay, add a way to export / import spans of history to reproduce situations
- [ ] Replay is buggy because deserializing world states does not delete entities
