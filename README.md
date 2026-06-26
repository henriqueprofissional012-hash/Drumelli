# Drumelli Studio Hero

Hero inicial em React para a Drumelli Studio, com estética premium, escura e tecnológica. O símbolo de infinito agora é uma cena 3D em React Three Fiber, construída com uma curva paramétrica em TubeGeometry, material metálico, trilhas emissivas vermelhas, bloom e interação com mouse/scroll.

## Rodar o projeto

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado no terminal.

## Onde editar

- Logo: `src/components/HeroSection.jsx`, bloco `.brand`.
- Textos da hero: `src/components/HeroSection.jsx`.
- Cards da segunda seção: `src/components/ServicesSection.jsx`.
- Velocidade do infinito: `src/components/InfinityScene.jsx`, props `speed` dos componentes `MovingEnergy` e valores dentro de `useFrame`.
- Intensidade do brilho: `src/components/InfinityScene.jsx`, `emissiveIntensity`, `pointLight intensity` e `<Bloom intensity={...} />`.
- Posição/tamanho do infinito: `src/styles/global.css`, classes `.hero-visual` e `.infinity-scene`; câmera em `src/components/InfinityScene.jsx`.
