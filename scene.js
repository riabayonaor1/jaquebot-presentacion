import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/** The CAD remains static. Only the camera travels around the real assembly. */
export async function createWorld({ host, onReady = () => {}, onSelect = () => {}, onError = () => {} } = {}) {
  if (!host) throw new Error('Falta el contenedor del modelo 3D.');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const amber = new THREE.Color('#e8b34f');
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x080b0d, 0.024);
  const camera = new THREE.PerspectiveCamera(36, 1, 0.015, 130);
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  } catch (error) {
    const message = 'Este dispositivo no pudo iniciar WebGL. El contenido y las evidencias del proyecto siguen disponibles.';
    onError({ message, cause: error });
    return { setJourney() {}, setExploring() {}, reset() {}, dispose() {}, getState: () => ({ ready: false, meshCount: 0, error: message }) };
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(0x080b0d, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.17;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-label', 'Modelo 3D del ensamblaje real JaqueBot. Activa Explorar para girarlo y seleccionar sus componentes.');
  canvas.setAttribute('role', 'img');
  canvas.style.cssText = 'display:block;width:100%;height:100%;outline:none;touch-action:pan-y';
  host.appendChild(canvas);
  const controls = new OrbitControls(camera, canvas);
  controls.enabled = false;
  // OrbitControls sets touch-action:none on construction, even while disabled.
  // Restore normal page scrolling until the visitor explicitly enters exploration.
  canvas.style.touchAction = 'pan-y';
  controls.enableDamping = !reducedMotion.matches;
  controls.dampingFactor = 0.075;
  controls.enablePan = true;
  controls.screenSpacePanning = true;
  controls.minDistance = 0.36;
  controls.maxDistance = 29;
  controls.maxPolarAngle = Math.PI * 0.53;
  controls.minPolarAngle = 0.06;
  controls.rotateSpeed = 0.65;
  controls.zoomSpeed = 0.8;

  scene.add(new THREE.HemisphereLight(0xe9f2f8, 0x2d2520, 1.18));
  const key = new THREE.DirectionalLight(0xfff4df, 3.2);
  key.position.set(-4, 9, 7);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -5, right: 5, top: 6, bottom: -5, near: 0.5, far: 24 });
  key.shadow.bias = -0.00018;
  key.shadow.normalBias = 0.025;
  key.shadow.radius = 3.5;
  key.target.position.set(0, 1.7, 0);
  scene.add(key, key.target);
  const fill = new THREE.DirectionalLight(0xd7e9ff, 1.25);
  fill.position.set(6, 5, 2);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xe8b34f, 2.6);
  rim.position.set(1, 6, -7);
  scene.add(rim);
  const backFill = new THREE.DirectionalLight(0xd8e5ea, 1.25);
  backFill.position.set(-5, 2.5, -4);
  scene.add(backFill);

  // A small studio environment gives the original CAD plastics and metal legible reflections.
  const studio = new THREE.Scene();
  studio.background = new THREE.Color(0x171b20);
  const panel = (color, intensity, position, scale) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity) }));
    m.position.set(...position); m.scale.set(...scale); studio.add(m);
  };
  panel(0xffffff, 3.5, [-4, 4, 2], [1, 6, 5]);
  panel(0xc7ddf4, 2, [5, 2, -1], [1, 5, 4]);
  panel(0xe8b34f, 2, [0, 4, -5], [5, 3, 0.5]);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(studio, 0.03);
  scene.environment = environment.texture;
  pmrem.dispose();
  studio.traverse(o => { o.geometry?.dispose(); o.material?.dispose(); });

  const stage = new THREE.Group();
  scene.add(stage);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), new THREE.MeshStandardMaterial({ color: 0x101518, roughness: 0.91, metalness: 0.12, transparent: true, opacity: 0.98 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.035;
  floor.receiveShadow = true;
  stage.add(floor);
  // Two quiet coordinate circles ground the engineering model without competing with it.
  for (const radius of [2.55, 3.05]) {
    const points = Array.from({ length: 160 }, (_, n) => new THREE.Vector3(Math.cos(n / 160 * Math.PI * 2) * radius, -0.028, Math.sin(n / 160 * Math.PI * 2) * radius));
    const ring = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: 0xcda254, transparent: true, opacity: radius < 3 ? 0.12 : 0.055 }));
    stage.add(ring);
  }
  const ticks = [];
  for (let n = 0; n < 48; n++) {
    const a = n / 48 * Math.PI * 2;
    const r = n % 4 === 0 ? 2.64 : 2.59;
    ticks.push(new THREE.Vector3(Math.cos(a) * 2.55, -0.026, Math.sin(a) * 2.55), new THREE.Vector3(Math.cos(a) * r, -0.026, Math.sin(a) * r));
  }
  stage.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(ticks), new THREE.LineBasicMaterial({ color: 0xe8b34f, transparent: true, opacity: 0.13 })));

  const assembly = new THREE.Group();
  scene.add(assembly);
  const meshes = [], materialStates = [], meshMap = new Map();
  const componentRoots = [], componentMeshes = [], electronicTextures = [];
  const revealIds = new Set(['part_025', 'part_026', 'part_094', 'part_095', 'part_096']);
  const raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2();
  let ready = false, journey = 0, smoothedJourney = 0, exploring = false, selected = null;
  let contextLost = false, failureMessage = null;
  let visible = true, disposed = false, firstFrame = true, width = 1, height = 1, mobile = false;
  let offsetX = 0.35, offsetY = 0, lastFrame = performance.now(), raf = 0;
  let fullBox = new THREE.Box3(), keys = [];
  const target = new THREE.Vector3(), wantedTarget = new THREE.Vector3(), wantedCamera = new THREE.Vector3();
  const spherical = new THREE.Spherical(), direction = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  const tempRight = new THREE.Vector3(), tempUp = new THREE.Vector3();
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const smooth = t => t * t * (3 - 2 * t);

  const resize = () => {
    width = Math.max(host.clientWidth, 1); height = Math.max(host.clientHeight, 1);
    mobile = width <= 760;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (ready) buildKeys();
  };
  const observer = new ResizeObserver(resize); observer.observe(host); resize();
  const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { rootMargin: '150px' });
  intersection.observe(host);


  // The source CAD documents supports, not all electronics. These recognisable,
  // parametric additions are separate from the 205 original CAD meshes.
  function makeElectronics() {
    const mat = (color, metalness = 0.1, roughness = 0.5) => new THREE.MeshStandardMaterial({ color, metalness, roughness, envMapIntensity: 0.6 });
    const green = mat(0x176b3e), white = mat(0xe6ece8), black = mat(0x10151a, 0.12, 0.47);
    const silver = mat(0xb9c2c7, 0.85, 0.27), gold = mat(0xc7a452, 0.76, 0.34);
    const blue = mat(0x246a9d), terminalGreen = mat(0x26875d), ceramic = mat(0xb4a58b);
    const box = (group, size, position, material) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
      m.position.set(...position); group.add(m); return m;
    };
    const cylinder = (group, radius, length, position, material, segments = 28) => {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, length, segments), material);
      m.position.set(...position); group.add(m); return m;
    };
    function instances(group, size, positions, material) {
      const m = new THREE.InstancedMesh(new THREE.BoxGeometry(...size), material, positions.length);
      const matrix = new THREE.Matrix4();
      positions.forEach((p, i) => { matrix.makeTranslation(...p); m.setMatrixAt(i, matrix); });
      m.instanceMatrix.needsUpdate = true; group.add(m); return m;
    }
    function silk(group, w, d, color, title, variant = 'pi') {
      const drawing = document.createElement('canvas'); drawing.width = 1024; drawing.height = Math.round(1024 * d / w);
      const ctx = drawing.getContext('2d'), h = drawing.height;
      ctx.fillStyle = color; ctx.fillRect(0, 0, 1024, h);
      ctx.strokeStyle = variant === 'nucleo' ? '#9ab8ac' : '#7da58b'; ctx.lineWidth = 1.2;
      // Deterministic printed routing, not a claim about the electrical netlist.
      for (let i = 0; i < 35; i++) {
        const x = 34 + (i * 97 % 940), y = 35 + (i * 53 % Math.max(100, h - 70));
        ctx.globalAlpha = 0.25; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 28, y); ctx.lineTo(x + 28, Math.min(h - 20, y + 33)); ctx.lineTo(x + 65, Math.min(h - 20, y + 33)); ctx.stroke();
      }
      ctx.globalAlpha = 1; ctx.fillStyle = variant === 'nucleo' ? '#244d51' : '#ecf1db';
      ctx.font = 'bold 37px Arial'; ctx.fillText(title, 45, variant === 'nucleo' ? h * 0.44 : h * 0.69);
      ctx.font = '22px Arial'; ctx.fillText(variant === 'nucleo' ? 'STM32 Nucleo-64' : variant === 'camera' ? 'SONY IMX500' : 'Broadcom · RP1 · 40 GPIO', 45, variant === 'nucleo' ? h * 0.48 : h * 0.75);
      ctx.font = '18px monospace';
      for (let i = 0; i < 10; i++) ctx.fillText(String(i * 4 + 1), 135 + i * 63, 29);
      if (variant === 'nucleo') {
        ctx.strokeStyle = '#257b82'; ctx.setLineDash([12, 7]); ctx.beginPath(); ctx.moveTo(15, h * 0.28); ctx.lineTo(1009, h * 0.28); ctx.stroke(); ctx.setLineDash([]);
        ctx.font = 'italic bold 83px Arial'; ctx.fillStyle = '#2394b7'; ctx.fillText('ST', 676, h * 0.86);
        ctx.font = '22px Arial'; ctx.fillStyle = '#315b60'; ctx.fillText('ST-LINK', 420, 70);
      } else if (variant === 'pi') {
        ctx.strokeStyle = '#ecf1db'; ctx.lineWidth = 3;
        for (const [x, y] of [[85, 260], [108, 248], [132, 260], [97, 281], [121, 281], [109, 303]]) { ctx.beginPath(); ctx.arc(x, y, 13, 0, Math.PI * 2); ctx.stroke(); }
        ctx.beginPath(); ctx.ellipse(100, 227, 14, 6, 0.5, 0, Math.PI * 2); ctx.stroke(); ctx.beginPath(); ctx.ellipse(122, 227, 14, 6, -0.5, 0, Math.PI * 2); ctx.stroke();
      }
      const texture = new THREE.CanvasTexture(drawing); texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8); electronicTextures.push(texture);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ map: texture, roughness: 0.62, metalness: 0.05 }));
      m.rotation.x = -Math.PI / 2; m.position.y = 0.009; group.add(m);
    }
    function mountingHoles(group, w, d, y = 0.011) {
      for (const x of [-w / 2 + 0.032, w / 2 - 0.032]) for (const z of [-d / 2 + 0.032, d / 2 - 0.032]) {
        const ring = new THREE.Mesh(new THREE.RingGeometry(0.0135, 0.026, 20), gold); ring.rotation.x = -Math.PI / 2; ring.position.set(x, y, z); group.add(ring);
        cylinder(group, 0.012, 0.017, [x, y - 0.008, z], black, 16);
      }
    }
    function header(group, x, z, count, rows = 2, pitch = 0.0254, alongX = true, pinHeight = 0.06) {
      const positions = [];
      for (let n = 0; n < count; n++) for (let row = 0; row < rows; row++) positions.push(alongX ? [x + n * pitch, 0.043, z + row * pitch] : [x + row * pitch, 0.043, z + n * pitch]);
      box(group, alongX ? [count * pitch + 0.012, 0.035, rows * pitch + 0.008] : [rows * pitch + 0.008, 0.035, count * pitch + 0.012], alongX ? [x + (count - 1) * pitch / 2, 0.027, z + (rows - 1) * pitch / 2] : [x + (rows - 1) * pitch / 2, 0.027, z + (count - 1) * pitch / 2], black);
      instances(group, [0.006, pinHeight, 0.006], positions, gold);
    }
    function passives(group, positions) {
      instances(group, [0.022, 0.013, 0.011], positions, ceramic);
      instances(group, [0.029, 0.012, 0.012], positions.filter((_, i) => i % 2 === 0).map(p => [p[0] + 0.035, p[1], p[2]]), black);
    }
    function register(group, info, chapters = null) {
      group.userData.info = { group: 'Electrónica funcional', source: 'Representación paramétrica didáctica', ...info };
      group.userData.chapters = chapters; group.userData.presence = chapters ? 0 : 1;
      const children = [], originals = new Set();
      group.traverse(m => {
        if (!m.isMesh) return;
        m.userData.info = group.userData.info; m.userData.componentRoot = group;
        m.castShadow = !chapters; m.receiveShadow = true; componentMeshes.push(m); children.push(m);
        for (const material of Array.isArray(m.material) ? m.material : [m.material]) originals.add(material);
      });
      for (const material of originals) {
        // A material is cloned exactly once per component, including instanced pin banks.
        const copy = material.clone();
        for (const child of children) {
          if (Array.isArray(child.material)) child.material = child.material.map(m => m === material ? copy : m);
          else if (child.material === material) child.material = copy;
        }
        if (chapters) { copy.transparent = true; copy.opacity = 0; copy.depthWrite = false; }
        materialStates.push({ mesh: group, material: copy, baseEmissive: copy.emissive?.clone() || new THREE.Color(0), amount: 0, baseOpacity: material.opacity, componentRoot: group });
      }
      scene.add(group); group.updateMatrixWorld(true); group.userData.worldBox = new THREE.Box3().setFromObject(group);
      group.visible = !chapters; componentRoots.push(group); meshMap.set(info.id, group); return group;
    }

    const pi = new THREE.Group(), piSupport = meshMap.get('part_1274').userData.worldBox;
    const piPosition = piSupport.getCenter(new THREE.Vector3());
    piPosition.y = piSupport.max.y + 0.125; pi.position.copy(piPosition);
    box(pi, [0.85, 0.016, 0.56], [0, 0, 0], green);
    silk(pi, 0.85, 0.56, '#176b3e', 'Raspberry Pi 5'); mountingHoles(pi, 0.85, 0.56);
    // BCM2712 package, RP1 I/O controller, PMIC, and paired memory packages.
    box(pi, [0.155, 0.023, 0.155], [-0.075, 0.025, -0.018], silver);
    box(pi, [0.122, 0.018, 0.122], [-0.085, 0.018, 0.155], black);
    box(pi, [0.11, 0.018, 0.09], [-0.235, 0.018, -0.075], black);
    box(pi, [0.075, 0.018, 0.075], [-0.30, 0.018, 0.12], black);
    for (const [z, material] of [[-0.19, black], [0, blue], [0.19, black]]) {
      box(pi, [0.19, 0.14, 0.145], [0.335, 0.08, z], silver);
      box(pi, [0.004, 0.11, 0.118], [0.433, 0.083, z], material);
      if (z !== -0.19) box(pi, [0.012, 0.008, 0.115], [0.435, 0.082, z], silver);
    }
    header(pi, -0.25, 0.23, 20);
    // USB-C power and two micro-HDMI sockets on the long edge.
    for (const [x, w] of [[-0.35, 0.087], [-0.17, 0.066], [-0.045, 0.066]]) {
      box(pi, [w, 0.034, 0.059], [x, 0.028, -0.264], silver);
      box(pi, [w * 0.78, 0.018, 0.004], [x, 0.028, -0.296], black);
    }
    for (const z of [-0.145, 0.04]) box(pi, [0.045, 0.025, 0.145], [-0.375, 0.026, z], white);
    passives(pi, [[-0.19, 0.02, 0.13], [-0.22, 0.02, 0.17], [-0.26, 0.02, -0.18], [0.065, 0.02, -0.16], [0.09, 0.02, 0.14], [0.03, 0.02, -0.20], [-0.31, 0.02, -0.18]]);
    register(pi, { id: 'component_rpi5', name: 'Raspberry Pi 5 · procesamiento', description: 'Ejecuta las dos aplicaciones, procesa imágenes RGB con OpenCV y ArUco, calcula la jugada y coordina la NUCLEO por USB. Modelo didáctico de 85 × 56 mm situado sobre el soporte de referencia del CAD.' });

    const cameraBoard = new THREE.Group(), originalCamera = meshMap.get('part_1273');
    const cameraBox = originalCamera.userData.worldBox;
    cameraBoard.position.copy(cameraBox.getCenter(new THREE.Vector3())); cameraBoard.position.y = cameraBox.max.y - 0.008;
    // Local +Y is the component side. The lens points down toward the chessboard.
    cameraBoard.rotation.z = Math.PI;
    box(cameraBoard, [0.25, 0.016, 0.24], [0, 0, 0], green);
    silk(cameraBoard, 0.25, 0.24, '#237647', 'AI Camera', 'camera'); mountingHoles(cameraBoard, 0.25, 0.24);
    box(cameraBoard, [0.145, 0.031, 0.145], [0, 0.025, -0.005], silver);
    box(cameraBoard, [0.125, 0.041, 0.125], [0, 0.052, -0.005], black);
    cylinder(cameraBoard, 0.053, 0.038, [0, 0.086, -0.005], black, 40);
    cylinder(cameraBoard, 0.040, 0.002, [0, 0.107, -0.005], silver, 40);
    const lens = mat(0x123744, 0.85, 0.13); lens.emissive.set(0x041820);
    cylinder(cameraBoard, 0.033, 0.003, [0, 0.109, -0.005], lens, 40);
    box(cameraBoard, [0.17, 0.028, 0.028], [0, 0.023, 0.108], white);
    originalCamera.visible = false; originalCamera.userData.referenceOnly = true;
    register(cameraBoard, { id: 'component_ai_camera', cadPartId: 'part_1273', name: 'Raspberry Pi AI Camera · Sony IMX500', description: 'Captura las imágenes RGB que usa OpenCV para leer ArUco. En este proyecto no se ejecuta una red neuronal del IMX500. Representación de 25 × 24 × 11,9 mm colocada en el portacámara documental.' });
    // Flat flexible ribbon, illustrated between the two documented supports.
    const ribbonPath = new THREE.CatmullRomCurve3([
      cameraBoard.position.clone().add(new THREE.Vector3(0, 0.008, 0.108)),
      cameraBoard.position.clone().add(new THREE.Vector3(-0.10, 0.12, 0.32)),
      pi.position.clone().add(new THREE.Vector3(-0.36, -0.13, -0.02)),
      pi.position.clone().add(new THREE.Vector3(-0.37, 0.025, -0.025))
    ]);
    const ribbonGeometry = new THREE.BufferGeometry(), vertices = [], ribbonIndices = [];
    for (let i = 0; i <= 36; i++) {
      const p = ribbonPath.getPoint(i / 36), tangent = ribbonPath.getTangent(i / 36);
      const cross = new THREE.Vector3().crossVectors(tangent, new THREE.Vector3(0, 0, 1)).normalize().multiplyScalar(0.065);
      if (cross.lengthSq() < 0.00001) cross.set(0.065, 0, 0);
      vertices.push(p.x - cross.x, p.y - cross.y, p.z - cross.z, p.x + cross.x, p.y + cross.y, p.z + cross.z);
      if (i < 36) { const a = i * 2; ribbonIndices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    ribbonGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); ribbonGeometry.setIndex(ribbonIndices); ribbonGeometry.computeVertexNormals();
    const ribbon = new THREE.Mesh(ribbonGeometry, new THREE.MeshStandardMaterial({ color: 0x9f5425, metalness: 0.35, roughness: 0.5, side: THREE.DoubleSide }));
    ribbon.userData.info = cameraBoard.userData.info; ribbon.userData.componentRoot = cameraBoard; scene.add(ribbon); componentMeshes.push(ribbon);

    const nucleo = new THREE.Group();
    nucleo.position.set(-2.18, 2.32, 0.48); nucleo.rotation.set(Math.PI / 2, -0.12, -0.035); nucleo.scale.setScalar(2.2);
    box(nucleo, [0.70, 0.016, 0.825], [0, 0, 0], white);
    silk(nucleo, 0.70, 0.825, '#e4eeea', 'NUCLEO-F446RE', 'nucleo'); mountingHoles(nucleo, 0.70, 0.825);
    // Integrated ST-LINK section at the top and the main STM32 MCU below it.
    box(nucleo, [0.085, 0.026, 0.085], [-0.005, 0.025, -0.276], black);
    box(nucleo, [0.115, 0.029, 0.115], [0, 0.026, 0.105], black);
    const qfpPins = [];
    for (let n = 0; n < 16; n++) for (const sign of [-1, 1]) { qfpPins.push([sign * 0.067, 0.023, 0.054 + n * 0.0067]); }
    instances(nucleo, [0.017, 0.006, 0.003], qfpPins, silver);
    instances(nucleo, [0.003, 0.006, 0.017], qfpPins.map(p => [p[2] - 0.105, p[1], p[0] + 0.105]), silver);
    header(nucleo, -0.31, -0.11, 19, 2, 0.0254, false, 0.045);
    header(nucleo, 0.285, -0.11, 19, 2, 0.0254, false, 0.045);
    for (const [x, z, n] of [[-0.22, 0.03, 8], [-0.22, 0.25, 6], [0.20, -0.08, 10], [0.20, 0.21, 8]]) header(nucleo, x, z, n, 1, 0.0254, false, 0.025);
    // Mini-USB on the ST-LINK end, blue user button and black reset button.
    box(nucleo, [0.09, 0.045, 0.078], [0, 0.032, -0.39], silver);
    box(nucleo, [0.065, 0.025, 0.004], [0, 0.032, -0.433], black);
    for (const [x, color] of [[-0.10, blue], [0.10, black]]) {
      box(nucleo, [0.055, 0.025, 0.055], [x, 0.027, -0.105], silver);
      cylinder(nucleo, 0.021, 0.022, [x, 0.05, -0.105], color, 18);
    }
    box(nucleo, [0.035, 0.045, 0.055], [0.18, 0.035, -0.255], black);
    passives(nucleo, [[0.09, 0.02, -0.30], [-0.09, 0.02, -0.31], [0.10, 0.02, -0.22], [-0.10, 0.02, 0.21], [0.09, 0.02, 0.22], [0, 0.02, 0.31], [-0.16, 0.02, -0.25], [-0.12, 0.02, 0.32]]);
    register(nucleo, { id: 'component_nucleo', name: 'NUCLEO-F446RE · STM32F446RE', description: 'Recibe órdenes por USB, genera señales para los cuatro servos, lee los potenciómetros y conmuta el electroimán mediante la etapa MOSFET. Ampliación didáctica: esta posición flotante no representa su montaje físico.' }, [7]);

    const mosfet = new THREE.Group(), magnet = meshMap.get('part_148').userData.worldBox.getCenter(new THREE.Vector3());
    mosfet.position.copy(magnet).add(new THREE.Vector3(0.56, 0.14, 0.10)); mosfet.scale.setScalar(1.65);
    mosfet.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(-0.80, 0.36, 0.47).normalize());
    box(mosfet, [0.34, 0.016, 0.20], [0, 0, 0], green);
    silk(mosfet, 0.34, 0.20, '#1d6849', 'MOSFET', 'power');
    for (const x of [-0.105, 0.105]) {
      box(mosfet, [0.105, 0.07, 0.075], [x, 0.046, 0.065], terminalGreen);
      for (const dx of [-0.025, 0.025]) cylinder(mosfet, 0.013, 0.009, [x + dx, 0.087, 0.065], silver, 12);
    }
    box(mosfet, [0.08, 0.085, 0.027], [-0.02, 0.055, -0.045], black);
    box(mosfet, [0.072, 0.05, 0.013], [-0.02, 0.12, -0.045], silver);
    instances(mosfet, [0.006, 0.06, 0.006], [[-0.045, 0.029, -0.02], [-0.02, 0.029, -0.02], [0.005, 0.029, -0.02]], silver);
    cylinder(mosfet, 0.019, 0.045, [0.095, 0.035, -0.045], black, 18);
    register(mosfet, { id: 'component_mosfet', name: 'Etapa MOSFET · potencia del electroimán', description: 'Una señal de control conmuta la alimentación de 12 V de la bobina. La señal USB no alimenta el electroimán. Módulo ilustrativo ampliado; su posición junto a la herramienta explica la relación eléctrica.' }, [5]);

    for (const id of ['part_020', 'part_055']) {
      const sensor = meshMap.get(id); sensor.userData.info = { ...sensor.userData.info, name: id === 'part_020' ? 'Potenciómetro angular de la base' : 'Potenciómetro angular del codo' };
    }
    // Mounted components extend the overview bounds; floating teaching callouts do not.
    fullBox.union(pi.userData.worldBox).union(cameraBoard.userData.worldBox);
  }

  function union(ids, groups = []) {
    const box = new THREE.Box3();
    for (const m of [...meshes, ...componentRoots]) if (ids.includes(m.userData.info.id) || groups.includes(m.userData.info.group)) box.union(m.userData.worldBox);
    return box.isEmpty() ? fullBox.clone() : box;
  }
  function fitDistance(box, centre, azimuth, elevation, extra = 1) {
    direction.set(Math.sin(azimuth) * Math.cos(elevation), Math.sin(elevation), Math.cos(azimuth) * Math.cos(elevation));
    tempRight.crossVectors(up, direction).normalize();
    tempUp.crossVectors(direction, tempRight).normalize();
    const tanV = Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5));
    const tanH = tanV * camera.aspect;
    const fitX = mobile ? 0.82 : 0.54;
    // Mobile copy begins near 55svh: keep the model inside the upper half.
    const fitY = mobile ? 0.49 : 0.80;
    let distance = 0;
    for (const x of [box.min.x, box.max.x]) for (const y of [box.min.y, box.max.y]) for (const z of [box.min.z, box.max.z]) {
      const p = new THREE.Vector3(x, y, z).sub(centre);
      const depth = p.dot(direction);
      distance = Math.max(distance, depth + Math.abs(p.dot(tempRight)) / (tanH * fitX), depth + Math.abs(p.dot(tempUp)) / (tanV * fitY));
    }
    return Math.max(distance * extra, 0.75);
  }
  function buildKeys() {
    const all = fullBox;
    const arm = union([], ['Brazo y articulaciones', 'Elevación y herramienta']);
    const magnet = union(['part_147', 'part_148', 'component_mosfet']);
    const eye = union(['component_ai_camera']);
    const compute = union(['component_rpi5']);
    const controller = union(['component_nucleo']);
    const board = union([], ['Tablero y marcadores', 'Piezas de ajedrez']);
    const neighbours = union(['part_165', 'part_167', 'part_166', 'part_168', 'part_149', 'part_151']);
    const descriptions = [
      { box: all, a: -0.70, e: 0.34, extra: 1.02, groups: [] },
      { box: all, a: -0.27, e: 0.41, extra: 1.03, groups: ['Brazo y articulaciones'] },
      { box: all, a: 0.25, e: 0.35, extra: 1.02, groups: ['Base y estructura', 'Elevación y herramienta'] },
      { box: compute, a: -0.45, e: 0.72, extra: 1.2, groups: [], ids: ['component_rpi5'] },
      { box: arm, a: -0.89, e: 0.47, extra: 1.15, groups: ['Brazo y articulaciones'], ids: ['part_019', 'part_051', 'part_052', 'part_054', 'part_020', 'part_055'] },
      { box: magnet, a: -1.08, e: 0.27, extra: 1.25, groups: [], ids: ['part_147', 'part_148', 'component_mosfet'] },
      { box: eye, a: -0.24, e: -0.72, extra: 1.35, groups: [], ids: ['part_249', 'component_ai_camera'] },
      { box: controller, a: -0.05, e: 0.20, extra: 1.1, groups: [], ids: ['component_nucleo'] },
      { box: all, a: 0.85, e: 0.47, extra: 1.02, groups: ['Brazo y articulaciones'], ids: ['component_rpi5', 'component_nucleo'] },
      { box: board, a: 0.58, e: 0.81, extra: 1.8, groups: ['Tablero y marcadores'], ids: ['component_ai_camera'] },
      { box: board, a: -0.45, e: 0.96, extra: 1.65, groups: ['Piezas de ajedrez'], ids: ['part_148'] },
      { box: all, a: -1.21, e: 0.35, extra: 1.0, groups: ['Base y estructura', 'Brazo y articulaciones'] },
      { box: neighbours, a: -0.90, e: 0.62, extra: 1.8, groups: [], ids: ['part_165', 'part_167', 'part_166', 'part_168'] },
      { box: all, a: -0.43, e: 0.40, extra: 1.03, groups: ['Elevación y herramienta'] },
      { box: all, a: 0.18, e: 0.36, extra: 1.02, groups: ['Base y estructura'] },
      { box: all, a: 0.66, e: 0.37, extra: 1.02, groups: [] }
    ];
    keys = descriptions.map(k => {
      const centre = k.box.getCenter(new THREE.Vector3());
      return { ...k, centre, distance: fitDistance(k.box, centre, k.a, k.e, k.extra) };
    });
  }
  // Smooth scalar Catmull–Rom keeps angular speed continuous through chapter boundaries.
  function curve(property, index, t) {
    const a = keys[Math.max(0, index - 1)][property], b = keys[index][property];
    const c = keys[Math.min(15, index + 1)][property], d = keys[Math.min(15, index + 2)][property];
    return 0.5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (-a + 3 * b - 3 * c + d) * t * t * t);
  }
  function highlightWeight(m, keyIndex) {
    const k = keys[keyIndex];
    return k.ids?.includes(m.userData.info.id) ? 1 : k.groups.includes(m.userData.info.group) ? 0.52 : 0;
  }
  function render(now) {
    raf = requestAnimationFrame(render);
    const dt = Math.min((now - lastFrame) / 1000, 0.06); lastFrame = now;
    if (!ready || !visible || document.hidden || disposed || contextLost) return;
    const ease = reducedMotion.matches || firstFrame ? 1 : 1 - Math.exp(-dt * 5.5);
    smoothedJourney += (journey - smoothedJourney) * ease;
    const index = Math.min(Math.floor(smoothedJourney), 15), fraction = smoothedJourney - index;
    const next = Math.min(index + 1, 15), f = smooth(fraction);
    if (!exploring) {
      wantedTarget.copy(keys[index].centre).lerp(keys[next].centre, f);
      const a = curve('a', index, fraction);
      const e = clamp(curve('e', index, fraction), -0.9, 1.3);
      const radius = Math.max(0.65, curve('distance', index, fraction));
      // A reversible breathing orbit adds life only while the chapter is stationary.
      const idle = reducedMotion.matches ? 0 : Math.sin(now * 0.00016) * 0.008;
      spherical.set(radius, Math.PI / 2 - e, a + idle);
      wantedCamera.setFromSpherical(spherical).add(wantedTarget);
      target.lerp(wantedTarget, ease);
      camera.position.lerp(wantedCamera, ease);
      controls.target.copy(target);
      camera.lookAt(target);
    } else {
      controls.update();
      target.copy(controls.target);
    }
    const wantedX = exploring ? 0 : mobile ? 0 : 0.36;
    const wantedY = exploring ? 0 : mobile ? 0.38 : 0;
    offsetX += (wantedX - offsetX) * ease;
    offsetY += (wantedY - offsetY) * ease;
    camera.updateProjectionMatrix();
    camera.projectionMatrix.elements[8] = -offsetX;
    camera.projectionMatrix.elements[9] = -offsetY;
    camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
    for (const component of componentRoots) {
      const chapters = component.userData.chapters;
      if (!chapters) continue;
      const distance = Math.min(...chapters.map(chapter => Math.abs(smoothedJourney - chapter)));
      const presence = 1 - smooth(clamp((distance - 0.05) / 0.68, 0, 1));
      component.userData.presence = presence; component.visible = presence > 0.015;
    }
    for (const state of materialStates) {
      const weight = selected && state.mesh.userData.info.id === selected.userData.info.id ? 1.25 : THREE.MathUtils.lerp(highlightWeight(state.mesh, index), highlightWeight(state.mesh, next), f);
      state.amount += (weight - state.amount) * ease;
      state.material.emissive.copy(state.baseEmissive);
      const glow = state.componentRoot ? 0.025 : 0.15;
      state.material.emissive.r += amber.r * state.amount * glow;
      state.material.emissive.g += amber.g * state.amount * glow;
      state.material.emissive.b += amber.b * state.amount * glow;
      if (state.componentRoot?.userData.chapters) {
        state.material.opacity = state.baseOpacity * state.componentRoot.userData.presence;
        state.material.depthWrite = state.material.opacity > 0.98;
      } else if (revealIds.has(state.mesh.userData.info.id)) {
        const reveal = 1 - smooth(clamp(Math.abs(smoothedJourney - 4) / 0.70, 0, 1));
        state.material.opacity = 1 - reveal * 0.82; state.material.transparent = state.material.opacity < 0.999; state.material.depthWrite = state.material.opacity > 0.98;
      }
    }
    renderer.render(scene, camera);
    firstFrame = false;
  }

  let pointerDown = null, pointers = new Set();
  canvas.addEventListener('pointerdown', event => {
    pointers.add(event.pointerId);
    pointerDown = pointers.size === 1 ? { x: event.clientX, y: event.clientY, id: event.pointerId, time: performance.now() } : null;
  });
  canvas.addEventListener('pointercancel', event => { pointers.delete(event.pointerId); pointerDown = null; });
  canvas.addEventListener('pointerup', event => {
    pointers.delete(event.pointerId);
    const down = pointerDown; pointerDown = null;
    if (!ready || !exploring || !down || event.pointerId !== down.id || pointers.size || Math.hypot(event.clientX - down.x, event.clientY - down.y) > 6 || performance.now() - down.time > 750) return;
    const rect = canvas.getBoundingClientRect();
    pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
    camera.updateMatrixWorld();
    raycaster.setFromCamera(pointer, camera);
    const pickable = [...meshes, ...componentMeshes].filter(m => m.visible && (!m.userData.componentRoot || m.userData.componentRoot.visible && m.userData.componentRoot.userData.presence > 0.2));
    const hit = raycaster.intersectObjects(pickable, false)[0];
    if (hit) {
      selected = hit.object;
      const p = selected.userData.info;
      onSelect({ name: p.name, description: p.function || p.description, group: p.group, id: p.id });
    }
  });

  const api = {
    setJourney(value) { if (Number.isFinite(Number(value))) journey = clamp(Number(value), 0, 15); },
    setExploring(value) {
      const enabled = Boolean(value);
      if (enabled === exploring) return;
      exploring = enabled;
      controls.enabled = exploring;
      controls.target.copy(target);
      canvas.style.touchAction = exploring ? 'none' : 'pan-y';
      canvas.style.cursor = exploring ? 'grab' : 'default';
      if (!exploring) selected = null;
    },
    reset() {
      selected = null;
      if (exploring && ready) {
        const index = Math.min(Math.round(journey), 15), k = keys[index];
        controls.target.copy(k.centre);
        camera.position.setFromSpherical(new THREE.Spherical(k.distance, Math.PI / 2 - k.e, k.a)).add(k.centre);
        target.copy(k.centre);
        controls.update();
      }
    },
    getState: () => ({ ready: ready && !contextLost, error: failureMessage, journey, currentJourney: Number(smoothedJourney.toFixed(3)), exploring, selected: selected?.userData.info.id || null, meshCount: meshes.length, addedComponents: componentRoots.length, visibleComponents: componentRoots.filter(c => c.visible).map(c => c.userData.info.name), reducedMotion: reducedMotion.matches, camera: camera.position.toArray(), target: target.toArray(), size: [width, height], renderer: { calls: renderer.info.render.calls, triangles: renderer.info.render.triangles } }),
    dispose() {
      disposed = true; cancelAnimationFrame(raf); observer.disconnect(); intersection.disconnect(); controls.dispose();
      reducedMotion.removeEventListener('change', handleMotionPreference);
      canvas.removeEventListener('webglcontextlost', handleContextLoss);
      canvas.removeEventListener('webglcontextrestored', handleContextRestoration);
      scene.traverse(o => { o.geometry?.dispose(); const mats = Array.isArray(o.material) ? o.material : [o.material]; mats.forEach(m => m?.dispose()); });
      electronicTextures.forEach(texture => texture.dispose());
      environment.dispose(); renderer.dispose(); canvas.remove();
    }
  };

  function handleMotionPreference() { controls.enableDamping = !reducedMotion.matches; }
  function handleContextLoss(event) {
    event.preventDefault();
    contextLost = true;
    failureMessage = 'La vista 3D se ha pausado por una interrupción gráfica. El contenido del proyecto sigue disponible.';
    onError({ message: failureMessage });
  }
  function handleContextRestoration() {
    contextLost = false; failureMessage = null;
    if (ready) onReady({ meshCount: meshes.length, addedComponents: componentRoots.length, restored: true, source: 'Ensamblaje CAD R03' });
  }
  reducedMotion.addEventListener('change', handleMotionPreference);
  canvas.addEventListener('webglcontextlost', handleContextLoss);
  canvas.addEventListener('webglcontextrestored', handleContextRestoration);

  try {
    const [gltf, metadata] = await Promise.all([
      new GLTFLoader().loadAsync(new URL('./assets/model/eduscara.glb', import.meta.url).href),
      fetch(new URL('./assets/model/pieces.json', import.meta.url)).then(response => { if (!response.ok) throw new Error(`Metadatos: ${response.status}`); return response.json(); })
    ]);
    const pieces = Array.isArray(metadata) ? metadata : metadata.pieces;
    const lookup = new Map(pieces.flatMap(p => [[p.nodeName || p.id, p], [p.id, p]]));
    gltf.scene.updateMatrixWorld(true);
    const source = []; gltf.scene.traverse(o => { if (o.isMesh) source.push(o); });
    for (const m of source) {
      const matrix = m.matrixWorld.clone();
      m.removeFromParent(); assembly.add(m); matrix.decompose(m.position, m.quaternion, m.scale);
      m.userData.info = lookup.get(m.name) || lookup.get(m.userData?.id) || { id: m.name, name: m.name, group: 'Ensamblaje', description: 'Componente del ensamblaje CAD R03 de JaqueBot.' };
      m.material = Array.isArray(m.material) ? m.material.map(mat => mat.clone()) : m.material.clone();
      for (const mat of Array.isArray(m.material) ? m.material : [m.material]) {
        if (mat.isMeshStandardMaterial) {
          mat.roughness = m.userData.info.group === 'Tornillería' ? 0.39 : Math.min(mat.roughness, 0.58);
          mat.metalness = m.userData.info.group === 'Tornillería' ? 0.62 : m.userData.info.name.includes('Electroimán') ? 0.48 : Math.max(mat.metalness, 0.05);
          mat.envMapIntensity = 0.40;
        }
        const baseEmissive = mat.emissive?.clone() || new THREE.Color(0);
        if (!mat.emissive) mat.emissive = new THREE.Color(0);
        materialStates.push({ mesh: m, material: mat, baseEmissive, amount: 0 });
      }
      m.castShadow = true; m.receiveShadow = true;
      meshes.push(m); meshMap.set(m.userData.info.id, m);
    }
    assembly.updateMatrixWorld(true);
    const originalBox = new THREE.Box3().setFromObject(assembly), originalCentre = originalBox.getCenter(new THREE.Vector3());
    assembly.scale.setScalar(0.01);
    assembly.position.set(-originalCentre.x * 0.01, -originalBox.min.y * 0.01, -originalCentre.z * 0.01);
    assembly.updateMatrixWorld(true);
    fullBox = new THREE.Box3().setFromObject(assembly);
    for (const m of meshes) m.userData.worldBox = new THREE.Box3().setFromObject(m);
    makeElectronics();
    ready = true; buildKeys();
    const k = keys[0];
    target.copy(k.centre);
    camera.position.setFromSpherical(new THREE.Spherical(k.distance, Math.PI / 2 - k.e, k.a)).add(target);
    controls.target.copy(target); camera.lookAt(target);
    window.jaqueWorld = api;
    raf = requestAnimationFrame(render);
    onReady({ meshCount: meshes.length, addedComponents: componentRoots.length, groups: [...new Set(pieces.map(p => p.group))], source: 'Ensamblaje CAD R03' });
  } catch (error) {
    console.error('JaqueBot 3D:', error);
    failureMessage = 'No se pudo cargar el ensamblaje 3D. Recarga la página para volver a intentarlo.';
    canvas.setAttribute('aria-label', failureMessage);
    onError({ message: failureMessage, cause: error });
  }
  return api;
}
