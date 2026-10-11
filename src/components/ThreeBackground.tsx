import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface PolyhedronObject {
  mesh: THREE.Object3D
  initialY: number
  floatSpeed: number
  floatOffset: number
  rotSpeedX: number
  rotSpeedY: number
  rotSpeedZ: number
}

export const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 22

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    mount.appendChild(renderer.domElement)

    // 2. High-Tech Dual Color Lighting (Crimson & Solar Amber)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45)
    scene.add(ambientLight)

    const crimsonLight = new THREE.PointLight(0xef4444, 3.5, 45)
    crimsonLight.position.set(12, 10, 10)
    scene.add(crimsonLight)

    const yellowLight = new THREE.PointLight(0xfacc15, 3.0, 45)
    yellowLight.position.set(-12, -10, 10)
    scene.add(yellowLight)

    const amberLight = new THREE.PointLight(0xf59e0b, 2.5, 40)
    amberLight.position.set(0, 15, -5)
    scene.add(amberLight)

    // 3. Materials
    const crimsonWireMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.85,
      emissive: 0xb91c1c,
      emissiveIntensity: 0.6
    })

    const goldGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xfacc15,
      roughness: 0.15,
      metalness: 0.9,
      transmission: 0.4,
      thickness: 0.8,
      transparent: true,
      opacity: 0.7,
      emissive: 0xd97706,
      emissiveIntensity: 0.4
    })

    const amberWireMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      wireframe: true,
      roughness: 0.3,
      metalness: 0.9,
      emissive: 0xd97706,
      emissiveIntensity: 0.5
    })

    const flameSolidMat = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      roughness: 0.25,
      metalness: 0.75,
      transparent: true,
      opacity: 0.65,
      emissive: 0x991b1b,
      emissiveIntensity: 0.5
    })

    // 4. Geometries pool
    const icosahedronGeo = new THREE.IcosahedronGeometry(1.6, 0)
    const dodecahedronGeo = new THREE.DodecahedronGeometry(1.4, 0)
    const octahedronGeo = new THREE.OctahedronGeometry(1.5, 0)
    const torusGeo = new THREE.TorusGeometry(1.8, 0.08, 16, 64)
    const ringGeo = new THREE.RingGeometry(1.2, 1.45, 32)

    // 5. Spawn 3D Floating Spatial Nodes
    const objects: PolyhedronObject[] = []
    const objectConfigs = [
      // Top Hero Region
      { geo: icosahedronGeo, mat: crimsonWireMat, x: -9.5, y: 7.5, z: 2, scale: 1.1 },
      { geo: dodecahedronGeo, mat: goldGlassMat, x: 9.8, y: 6.2, z: -1, scale: 1.0 },
      { geo: torusGeo, mat: amberWireMat, x: 12.5, y: 9.0, z: -4, scale: 1.3 },
      { geo: octahedronGeo, mat: flameSolidMat, x: -11.5, y: -2.0, z: 3, scale: 0.85 },

      // Mid Section (About & Projects)
      { geo: dodecahedronGeo, mat: goldGlassMat, x: -10.0, y: -9.0, z: -2, scale: 1.2 },
      { geo: icosahedronGeo, mat: crimsonWireMat, x: 11.0, y: -11.5, z: 1, scale: 1.15 },
      { geo: torusGeo, mat: crimsonWireMat, x: -8.0, y: -16.0, z: -3, scale: 1.4 },
      { geo: octahedronGeo, mat: amberWireMat, x: 10.5, y: -18.5, z: 2, scale: 0.95 },

      // Lower Section (Skills, Lab & Contact)
      { geo: icosahedronGeo, mat: flameSolidMat, x: -9.2, y: -26.0, z: 0, scale: 1.05 },
      { geo: dodecahedronGeo, mat: goldGlassMat, x: 9.5, y: -28.5, z: -2, scale: 1.1 },
      { geo: torusGeo, mat: amberWireMat, x: -11.0, y: -34.0, z: 1, scale: 1.3 },
      { geo: ringGeo, mat: crimsonWireMat, x: 8.5, y: -37.0, z: -1, scale: 1.5 }
    ]

    objectConfigs.forEach((cfg, idx) => {
      const mesh = new THREE.Mesh(cfg.geo, cfg.mat)
      mesh.position.set(cfg.x, cfg.y, cfg.z)
      mesh.scale.set(cfg.scale, cfg.scale, cfg.scale)
      scene.add(mesh)

      objects.push({
        mesh,
        initialY: cfg.y,
        floatSpeed: 0.8 + (idx % 4) * 0.25,
        floatOffset: idx * 1.3,
        rotSpeedX: (Math.random() - 0.5) * 0.008,
        rotSpeedY: (Math.random() - 0.5) * 0.012,
        rotSpeedZ: (Math.random() - 0.5) * 0.007
      })
    })

    // 6. Deep 3D Particle Starfield with Red & Yellow Points
    const particleCount = 380
    const particleGeo = new THREE.BufferGeometry()
    const posArray = new Float32Array(particleCount * 3)
    const colorArray = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      posArray[i3] = (Math.random() - 0.5) * 44
      posArray[i3 + 1] = (Math.random() - 0.5) * 90 - 15
      posArray[i3 + 2] = (Math.random() - 0.5) * 24

      // Blend between Crimson Red and Solar Yellow
      const isRed = Math.random() > 0.45
      if (isRed) {
        colorArray[i3] = 0.95 // R
        colorArray[i3 + 1] = 0.25 // G
        colorArray[i3 + 2] = 0.25 // B
      } else {
        colorArray[i3] = 0.98 // R
        colorArray[i3 + 1] = 0.82 // G
        colorArray[i3 + 2] = 0.15 // B
      }
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3))

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    })

    const particleSystem = new THREE.Points(particleGeo, particleMat)
    scene.add(particleSystem)

    // 7. Interactive Mouse & Scroll Parallax
    let mouseX = 0
    let mouseY = 0
    let targetCameraX = 0
    let targetCameraY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX = (e.clientX / innerWidth - 0.5) * 2
      mouseY = -(e.clientY / innerHeight - 0.5) * 2
    }

    const getScrollProgress = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      return docHeight > 0 ? window.scrollY / docHeight : 0
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const handleResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    // 8. Animation Loop
    let animationFrameId: number
    const clock = new THREE.Clock()
    let isVisible = true

    const handleVisibilityChange = () => {
      isVisible = !document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }

      const elapsedTime = clock.getElapsedTime()

      if (!prefersReducedMotion) {
        // Calculate scroll-based camera destination (-42 max descent)
        const scrollPct = getScrollProgress()
        const targetScrollY = -scrollPct * 38

        // Smooth mouse camera interpolation
        targetCameraX += (mouseX * 2.2 - targetCameraX) * 0.05
        targetCameraY += (targetScrollY + mouseY * 1.5 - targetCameraY) * 0.05

        camera.position.x = targetCameraX
        camera.position.y = targetCameraY
        camera.lookAt(targetCameraX * 0.3, targetCameraY, 0)

        // Animate individual 3D objects
        objects.forEach((obj) => {
          obj.mesh.rotation.x += obj.rotSpeedX
          obj.mesh.rotation.y += obj.rotSpeedY
          obj.mesh.rotation.z += obj.rotSpeedZ

          // Gentle floating sine wave
          obj.mesh.position.y =
            obj.initialY + Math.sin(elapsedTime * obj.floatSpeed + obj.floatOffset) * 0.45
        })

        // Slowly orbit particle system
        particleSystem.rotation.y = elapsedTime * 0.015
      }

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement)
      }
      [
        icosahedronGeo,
        dodecahedronGeo,
        octahedronGeo,
        torusGeo,
        ringGeo,
        particleGeo
      ].forEach((g) => g.dispose())
      ;[
        crimsonWireMat,
        goldGlassMat,
        amberWireMat,
        flameSolidMat,
        particleMat
      ].forEach((m) => m.dispose())
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none -z-15 overflow-hidden"
      aria-hidden="true"
    />
  )
}
