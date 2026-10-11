import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export type ThreeModelType = 'neural' | 'torus' | 'cube' | 'galaxy'

interface ThreeCanvasProps {
  className?: string
  model?: ThreeModelType
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  className = '',
  model = 'neural'
}) => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5.5

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9)
    scene.add(ambientLight)

    const cyanPointLight = new THREE.PointLight(0x00f2fe, 4, 50)
    cyanPointLight.position.set(5, 5, 5)
    scene.add(cyanPointLight)

    const violetPointLight = new THREE.PointLight(0xa855f7, 4, 50)
    violetPointLight.position.set(-5, -5, 4)
    scene.add(violetPointLight)

    const pinkPointLight = new THREE.PointLight(0xec4899, 3, 40)
    pinkPointLight.position.set(0, 4, -3)
    scene.add(pinkPointLight)

    // Group to hold model-specific objects
    const modelGroup = new THREE.Group()
    scene.add(modelGroup)

    const disposables: Array<{ dispose: () => void }> = []

    // 1. NEURAL CORE (Icosahedron + Glowing Core + Dual Orbiting Torus Rings)
    if (model === 'neural') {
      const geo = new THREE.IcosahedronGeometry(2.0, 1)
      const mat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        wireframe: true,
        roughness: 0.1,
        metalness: 0.9,
        emissive: 0x0284c7,
        emissiveIntensity: 0.5
      })
      const mesh = new THREE.Mesh(geo, mat)
      modelGroup.add(mesh)
      disposables.push(geo, mat)

      // Inner Glowing Core
      const coreGeo = new THREE.SphereGeometry(1.2, 28, 28)
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x9333ea,
        roughness: 0.1,
        metalness: 0.6,
        transparent: true,
        opacity: 0.7,
        emissive: 0x7c3aed,
        emissiveIntensity: 0.8
      })
      const coreMesh = new THREE.Mesh(coreGeo, coreMat)
      modelGroup.add(coreMesh)
      disposables.push(coreGeo, coreMat)

      // Outer Orbiting Rings
      const ringGeo = new THREE.TorusGeometry(2.6, 0.035, 16, 100)
      const ringMat1 = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0.6
      })
      const ring1 = new THREE.Mesh(ringGeo, ringMat1)
      ring1.rotation.x = Math.PI / 3
      modelGroup.add(ring1)

      const ringMat2 = new THREE.MeshBasicMaterial({
        color: 0xec4899,
        transparent: true,
        opacity: 0.6
      })
      const ring2 = new THREE.Mesh(ringGeo, ringMat2)
      ring2.rotation.y = Math.PI / 4
      modelGroup.add(ring2)
      disposables.push(ringGeo, ringMat1, ringMat2)
    }

    // 2. QUANTUM TORUS KNOT
    if (model === 'torus') {
      const knotGeo = new THREE.TorusKnotGeometry(1.5, 0.42, 128, 32, 2, 3)
      const knotMat = new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        roughness: 0.2,
        metalness: 0.8,
        wireframe: true,
        emissive: 0x4f46e5,
        emissiveIntensity: 0.4
      })
      const knotMesh = new THREE.Mesh(knotGeo, knotMat)
      modelGroup.add(knotMesh)

      const solidGeo = new THREE.TorusKnotGeometry(1.47, 0.38, 100, 24, 2, 3)
      const solidMat = new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        roughness: 0.3,
        metalness: 0.9,
        transparent: true,
        opacity: 0.65,
        emissive: 0x0891b2,
        emissiveIntensity: 0.3
      })
      const solidMesh = new THREE.Mesh(solidGeo, solidMat)
      modelGroup.add(solidMesh)
      disposables.push(knotGeo, knotMat, solidGeo, solidMat)
    }

    // 3. CYBER HYPERCUBE
    if (model === 'cube') {
      const outerBoxGeo = new THREE.BoxGeometry(2.3, 2.3, 2.3)
      const outerBoxMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        wireframe: true,
        roughness: 0.1,
        metalness: 0.8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.6
      })
      const outerBox = new THREE.Mesh(outerBoxGeo, outerBoxMat)
      modelGroup.add(outerBox)

      const innerBoxGeo = new THREE.BoxGeometry(1.3, 1.3, 1.3)
      const innerBoxMat = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        wireframe: true,
        roughness: 0.2,
        metalness: 0.9,
        emissive: 0x059669,
        emissiveIntensity: 0.7
      })
      const innerBox = new THREE.Mesh(innerBoxGeo, innerBoxMat)
      modelGroup.add(innerBox)

      const coreGeo = new THREE.OctahedronGeometry(0.7, 0)
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        emissiveIntensity: 0.8,
        metalness: 0.9,
        roughness: 0.1
      })
      const coreOct = new THREE.Mesh(coreGeo, coreMat)
      modelGroup.add(coreOct)

      disposables.push(outerBoxGeo, outerBoxMat, innerBoxGeo, innerBoxMat, coreGeo, coreMat)
    }

    // 4. COSMIC GALAXY / VORTEX
    if (model === 'galaxy') {
      const galaxyCount = 750
      const galaxyGeo = new THREE.BufferGeometry()
      const galaxyPositions = new Float32Array(galaxyCount * 3)
      const galaxyColors = new Float32Array(galaxyCount * 3)

      for (let i = 0; i < galaxyCount; i++) {
        const i3 = i * 3
        const radius = Math.random() * 2.8 + 0.3
        const spinAngle = radius * 4
        const branchAngle = ((i % 3) * (2 * Math.PI)) / 3

        const randomX = (Math.random() - 0.5) * 0.4
        const randomY = (Math.random() - 0.5) * 0.4
        const randomZ = (Math.random() - 0.5) * 0.4

        galaxyPositions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX
        galaxyPositions[i3 + 1] = randomY
        galaxyPositions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

        // Neon Cyan to Purple to Rose gradient colors
        const mixRatio = radius / 3.0
        galaxyColors[i3] = 0.2 + 0.8 * mixRatio // R
        galaxyColors[i3 + 1] = 0.7 - 0.4 * mixRatio // G
        galaxyColors[i3 + 2] = 0.9 // B
      }

      galaxyGeo.setAttribute('position', new THREE.BufferAttribute(galaxyPositions, 3))
      galaxyGeo.setAttribute('color', new THREE.BufferAttribute(galaxyColors, 3))

      const galaxyMat = new THREE.PointsMaterial({
        size: 0.065,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending
      })
      const galaxyPoints = new THREE.Points(galaxyGeo, galaxyMat)
      modelGroup.add(galaxyPoints)
      disposables.push(galaxyGeo, galaxyMat)
    }

    // Background Particle Field (Omnipresent Ambient Sparkles)
    const particlesCount = 220
    const particlesGeometry = new THREE.BufferGeometry()
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 12
      posArray[i + 1] = (Math.random() - 0.5) * 12
      posArray[i + 2] = (Math.random() - 0.5) * 8
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    })
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)
    disposables.push(particlesGeometry, particlesMaterial)

    // Mouse Interaction
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX = (event.clientX / innerWidth - 0.5) * 2
      mouseY = -(event.clientY / innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Resize Handler
    const handleResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationFrameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Smooth mouse tilt tracking
      targetX = targetX + (mouseX - targetX) * 0.06
      targetY = targetY + (mouseY - targetY) * 0.06

      // Continuous 3D rotations for the entire model
      modelGroup.rotation.x = elapsedTime * 0.28 + targetY * 0.6
      modelGroup.rotation.y = elapsedTime * 0.38 + targetX * 0.6

      // Specific sub-animations
      if (model === 'neural' && modelGroup.children.length >= 2) {
        const core = modelGroup.children[1]
        const pulseScale = 1 + Math.sin(elapsedTime * 2.2) * 0.08
        core.scale.set(pulseScale, pulseScale, pulseScale)
        core.rotation.y = -elapsedTime * 0.4
      }

      if (model === 'cube' && modelGroup.children.length >= 3) {
        const innerBox = modelGroup.children[1]
        const coreOct = modelGroup.children[2]
        innerBox.rotation.x = -elapsedTime * 0.6
        innerBox.rotation.y = -elapsedTime * 0.7
        coreOct.rotation.z = elapsedTime * 0.9
      }

      particlesMesh.rotation.y = -elapsedTime * 0.07

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement)
      }
      disposables.forEach((d) => d.dispose())
      renderer.dispose()
    }
  }, [model])

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  )
}
