import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Orbit, Eye } from 'lucide-react'

export type ThreeModelType = 'neural' | 'torus' | 'cube' | 'galaxy'

interface ThreeCanvasProps {
  className?: string
  model?: ThreeModelType
  interactive?: boolean
  showControls?: boolean
  onModelChange?: (model: ThreeModelType) => void
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  className = '',
  model: initialModel = 'neural',
  interactive = true,
  showControls = true,
  onModelChange
}) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [currentModel, setCurrentModel] = useState<ThreeModelType>(initialModel)
  const [isWireframe, setIsWireframe] = useState<boolean>(true)
  const [isDragging, setIsDragging] = useState<boolean>(false)

  // Sync state if initialModel prop changes
  useEffect(() => {
    setCurrentModel(initialModel)
  }, [initialModel])

  const handleSelectModel = (newModel: ThreeModelType) => {
    setCurrentModel(newModel)
    onModelChange?.(newModel)
  }

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const width = mount.clientWidth || 360
    const height = mount.clientHeight || 360

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
    camera.position.z = 5.2

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    // Dynamic 3D Lights - Crimson Red, Solar Gold & Radiant Amber
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9)
    scene.add(ambientLight)

    const redLight = new THREE.PointLight(0xef4444, 5.0, 50)
    redLight.position.set(4, 4, 4)
    scene.add(redLight)

    const goldLight = new THREE.PointLight(0xfacc15, 4.5, 50)
    goldLight.position.set(-4, -4, 3)
    scene.add(goldLight)

    const amberLight = new THREE.PointLight(0xf59e0b, 3.5, 40)
    amberLight.position.set(0, 3, -3)
    scene.add(amberLight)

    // Master Group for the selected 3D geometry
    const modelGroup = new THREE.Group()
    scene.add(modelGroup)

    const disposables: Array<{ dispose: () => void }> = []

    // 1. NEURAL CORE (Icosahedron Lattice + Pulsing Solar Core + Dual Torus Orbits + Vertex Nodes)
    if (currentModel === 'neural') {
      const geo = new THREE.IcosahedronGeometry(1.85, 1)
      const mat = new THREE.MeshStandardMaterial({
        color: 0xef4444,
        wireframe: isWireframe,
        roughness: 0.15,
        metalness: 0.85,
        emissive: 0xb91c1c,
        emissiveIntensity: 0.65
      })
      const mesh = new THREE.Mesh(geo, mat)
      modelGroup.add(mesh)
      disposables.push(geo, mat)

      // Inner Glowing Core (Solar Amber)
      const coreGeo = new THREE.SphereGeometry(1.05, 32, 32)
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        roughness: 0.1,
        metalness: 0.7,
        transparent: true,
        opacity: 0.82,
        emissive: 0xd97706,
        emissiveIntensity: 0.95
      })
      const coreMesh = new THREE.Mesh(coreGeo, coreMat)
      modelGroup.add(coreMesh)
      disposables.push(coreGeo, coreMat)

      // Dual Orbiting Rings (Solar Gold and Crimson)
      const ringGeo = new THREE.TorusGeometry(2.45, 0.035, 16, 120)
      const ringMat1 = new THREE.MeshBasicMaterial({
        color: 0xfacc15,
        transparent: true,
        opacity: 0.85
      })
      const ring1 = new THREE.Mesh(ringGeo, ringMat1)
      ring1.rotation.x = Math.PI / 3
      modelGroup.add(ring1)

      const ringMat2 = new THREE.MeshBasicMaterial({
        color: 0xef4444,
        transparent: true,
        opacity: 0.85
      })
      const ring2 = new THREE.Mesh(ringGeo, ringMat2)
      ring2.rotation.y = Math.PI / 3.5
      modelGroup.add(ring2)
      disposables.push(ringGeo, ringMat1, ringMat2)

      // Vertex Node Spheres
      const nodeGeo = new THREE.SphereGeometry(0.065, 8, 8)
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 })
      const posAttr = geo.getAttribute('position')
      for (let i = 0; i < posAttr.count; i += 3) {
        const node = new THREE.Mesh(nodeGeo, nodeMat)
        node.position.set(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i))
        modelGroup.add(node)
      }
      disposables.push(nodeGeo, nodeMat)
    }

    // 2. QUANTUM TORUS KNOT
    if (currentModel === 'torus') {
      const knotGeo = new THREE.TorusKnotGeometry(1.4, 0.38, 140, 32, 2, 3)
      const knotMat = new THREE.MeshStandardMaterial({
        color: 0xef4444,
        roughness: 0.2,
        metalness: 0.85,
        wireframe: isWireframe,
        emissive: 0xdc2626,
        emissiveIntensity: 0.6
      })
      const knotMesh = new THREE.Mesh(knotGeo, knotMat)
      modelGroup.add(knotMesh)

      const solidGeo = new THREE.TorusKnotGeometry(1.36, 0.32, 100, 24, 2, 3)
      const solidMat = new THREE.MeshStandardMaterial({
        color: 0xfacc15,
        roughness: 0.25,
        metalness: 0.9,
        transparent: true,
        opacity: 0.68,
        emissive: 0xd97706,
        emissiveIntensity: 0.55
      })
      const solidMesh = new THREE.Mesh(solidGeo, solidMat)
      modelGroup.add(solidMesh)
      disposables.push(knotGeo, knotMat, solidGeo, solidMat)
    }

    // 3. CYBER HYPERCUBE (Nested 4D Tesseract)
    if (currentModel === 'cube') {
      const outerBoxGeo = new THREE.BoxGeometry(2.1, 2.1, 2.1)
      const outerBoxMat = new THREE.MeshStandardMaterial({
        color: 0xef4444,
        wireframe: isWireframe,
        roughness: 0.1,
        metalness: 0.85,
        emissive: 0xb91c1c,
        emissiveIntensity: 0.65
      })
      const outerBox = new THREE.Mesh(outerBoxGeo, outerBoxMat)
      modelGroup.add(outerBox)

      const innerBoxGeo = new THREE.BoxGeometry(1.25, 1.25, 1.25)
      const innerBoxMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        wireframe: isWireframe,
        roughness: 0.15,
        metalness: 0.9,
        emissive: 0xd97706,
        emissiveIntensity: 0.75
      })
      const innerBox = new THREE.Mesh(innerBoxGeo, innerBoxMat)
      modelGroup.add(innerBox)

      const coreOctGeo = new THREE.OctahedronGeometry(0.68, 0)
      const coreOctMat = new THREE.MeshStandardMaterial({
        color: 0xfacc15,
        emissive: 0xeab308,
        emissiveIntensity: 0.95,
        metalness: 0.95,
        roughness: 0.1
      })
      const coreOct = new THREE.Mesh(coreOctGeo, coreOctMat)
      modelGroup.add(coreOct)

      disposables.push(outerBoxGeo, outerBoxMat, innerBoxGeo, innerBoxMat, coreOctGeo, coreOctMat)
    }

    // 4. COSMIC GALAXY / VORTEX
    if (currentModel === 'galaxy') {
      const galaxyCount = 1000
      const galaxyGeo = new THREE.BufferGeometry()
      const galaxyPositions = new Float32Array(galaxyCount * 3)
      const galaxyColors = new Float32Array(galaxyCount * 3)

      for (let i = 0; i < galaxyCount; i++) {
        const i3 = i * 3
        const radius = Math.random() * 2.7 + 0.25
        const spinAngle = radius * 4.2
        const branchAngle = ((i % 3) * (2 * Math.PI)) / 3

        const randomX = (Math.random() - 0.5) * 0.35
        const randomY = (Math.random() - 0.5) * 0.35
        const randomZ = (Math.random() - 0.5) * 0.35

        galaxyPositions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX
        galaxyPositions[i3 + 1] = randomY
        galaxyPositions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

        // Fiery Crimson to Solar Yellow Gradient
        const mixRatio = radius / 3.0
        galaxyColors[i3] = 1.0 // Crimson Red
        galaxyColors[i3 + 1] = 0.2 + 0.8 * mixRatio // Solar Gold blend
        galaxyColors[i3 + 2] = 0.08
      }

      galaxyGeo.setAttribute('position', new THREE.BufferAttribute(galaxyPositions, 3))
      galaxyGeo.setAttribute('color', new THREE.BufferAttribute(galaxyColors, 3))

      const galaxyMat = new THREE.PointsMaterial({
        size: 0.07,
        vertexColors: true,
        transparent: true,
        opacity: 0.92,
        blending: THREE.AdditiveBlending
      })
      const galaxyPoints = new THREE.Points(galaxyGeo, galaxyMat)
      modelGroup.add(galaxyPoints)
      disposables.push(galaxyGeo, galaxyMat)
    }

    // Ambient 3D Star Dust Particles Field
    const particlesCount = 240
    const particlesGeometry = new THREE.BufferGeometry()
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 12
      posArray[i + 1] = (Math.random() - 0.5) * 12
      posArray[i + 2] = (Math.random() - 0.5) * 8
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.045,
      color: 0xfacc15,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    })
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)
    disposables.push(particlesGeometry, particlesMaterial)

    // Interactive Drag Physics & Momentum Variables
    let isUserDragging = false
    let previousPointerPosition = { x: 0, y: 0 }
    let dragVelocity = { x: 0, y: 0 }
    let targetTiltX = 0
    let targetTiltY = 0

    // Pointer Event Listeners for 3D Orbit Dragging
    const onPointerDown = (e: PointerEvent) => {
      if (!interactive) return
      isUserDragging = true
      setIsDragging(true)
      previousPointerPosition = { x: e.clientX, y: e.clientY }
      dragVelocity = { x: 0, y: 0 }
    }

    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect()
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const ny = -(((e.clientY - rect.top) / rect.height - 0.5) * 2)

      // Move point lights in 3D world coordinates with the cursor
      redLight.position.x = nx * 5
      redLight.position.y = ny * 5
      goldLight.position.x = -nx * 4
      goldLight.position.y = -ny * 4

      targetTiltX = nx * 0.45
      targetTiltY = ny * 0.45

      if (isUserDragging) {
        const deltaX = e.clientX - previousPointerPosition.x
        const deltaY = e.clientY - previousPointerPosition.y

        dragVelocity = {
          x: deltaX * 0.007,
          y: deltaY * 0.007
        }

        modelGroup.rotation.y += dragVelocity.x
        modelGroup.rotation.x += dragVelocity.y

        previousPointerPosition = { x: e.clientX, y: e.clientY }
      }
    }

    const onPointerUp = () => {
      isUserDragging = false
      setIsDragging(false)
    }

    const domElement = renderer.domElement
    domElement.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerUp)

    // Resize Handler
    const handleResize = () => {
      if (!mount) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationFrameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Friction & Momentum damping
      if (!isUserDragging) {
        dragVelocity.x *= 0.94
        dragVelocity.y *= 0.94

        // Continuous aesthetic rotation + residual drag momentum + cursor tilt
        modelGroup.rotation.y += 0.008 + dragVelocity.x
        modelGroup.rotation.x += 0.004 + dragVelocity.y

        // Gentle tilt alignment towards cursor
        modelGroup.rotation.y += (targetTiltX - (modelGroup.rotation.y % (Math.PI * 2))) * 0.015
        modelGroup.rotation.x += (targetTiltY - (modelGroup.rotation.x % (Math.PI * 2))) * 0.015
      }

      // Sub-model internal motions
      if (currentModel === 'neural' && modelGroup.children.length >= 2) {
        const core = modelGroup.children[1]
        const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.09
        core.scale.set(pulse, pulse, pulse)
        core.rotation.y = -elapsedTime * 0.35
      }

      if (currentModel === 'cube' && modelGroup.children.length >= 3) {
        const innerBox = modelGroup.children[1]
        const coreOct = modelGroup.children[2]
        innerBox.rotation.x = -elapsedTime * 0.7
        innerBox.rotation.y = -elapsedTime * 0.8
        coreOct.rotation.z = elapsedTime * 1.05
      }

      particlesMesh.rotation.y = -elapsedTime * 0.05

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      domElement.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerUp)
      window.removeEventListener('resize', handleResize)

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement)
      }
      disposables.forEach((d) => d.dispose())
      renderer.dispose()
    }
  }, [currentModel, isWireframe, interactive])

  return (
    <div className={`relative flex flex-col w-full h-full ${className}`}>
      {/* 3D Canvas Mount Point */}
      <div
        ref={mountRef}
        className={`w-full flex-1 touch-none select-none ${
          interactive ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'pointer-events-none'
        }`}
        style={{ minHeight: '280px' }}
      />

      {/* Floating Interactive 3D Controls Bar */}
      {showControls && (
        <div className="absolute bottom-3 inset-x-3 flex flex-wrap items-center justify-between gap-2 p-2 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 text-xs font-mono shadow-xl z-10 pointer-events-auto">
          {/* Model Switcher Chips */}
          <div className="flex items-center gap-1">
            {[
              { id: 'neural', label: 'Neural Core' },
              { id: 'torus', label: 'Quantum Knot' },
              { id: 'cube', label: 'Hypercube' },
              { id: 'galaxy', label: 'Cosmic Vortex' }
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => handleSelectModel(m.id as ThreeModelType)}
                className={`px-2.5 py-1 rounded-xl transition-all font-bold cursor-pointer text-[11px] ${
                  currentModel === m.id
                    ? 'bg-gradient-to-r from-red-500 to-amber-500 text-slate-950 shadow-md shadow-red-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Quick 3D Toggles */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsWireframe((prev) => !prev)}
              className={`px-2.5 py-1 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer text-[11px] font-bold ${
                isWireframe
                  ? 'bg-amber-950/60 border-amber-400 text-amber-300 shadow-sm'
                  : 'bg-black/40 border-white/10 text-slate-400 hover:text-white'
              }`}
              title="Toggle Wireframe Shader"
            >
              <Eye className="w-3 h-3" />
              <span>{isWireframe ? 'Wireframe' : 'Solid'}</span>
            </button>

            <span className="text-[10px] text-slate-400 hidden sm:flex items-center gap-1">
              <Orbit className="w-3 h-3 text-amber-400 animate-spin" />
              <span>Drag to Orbit</span>
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

