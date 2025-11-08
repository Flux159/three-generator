import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

declare global {
  interface Window {
    KeyboardEvent: typeof globalThis extends { KeyboardEvent: infer T } ? T : never
    MouseEvent: typeof globalThis extends { MouseEvent: infer T } ? T : never
  }
}

interface FlyControlsProps {
  movementSpeed?: number
  rotationSpeed?: number
}

function FlyControls({ 
  movementSpeed = 0.1, 
  rotationSpeed = 0.002 
}: FlyControlsProps) {
  const { camera, gl } = useThree()
  const movementRef = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false,
  })
  const mouseRef = useRef({ x: 0, y: 0 })
  const isPointerLockedRef = useRef(false)

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
          movementRef.current.forward = true
          break
        case 's':
        case 'arrowdown':
          movementRef.current.backward = true
          break
        case 'a':
        case 'arrowleft':
          movementRef.current.left = true
          break
        case 'd':
        case 'arrowright':
          movementRef.current.right = true
          break
        case ' ':
          movementRef.current.up = true
          break
        case 'shift':
          movementRef.current.down = true
          break
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
          movementRef.current.forward = false
          break
        case 's':
        case 'arrowdown':
          movementRef.current.backward = false
          break
        case 'a':
        case 'arrowleft':
          movementRef.current.left = false
          break
        case 'd':
        case 'arrowright':
          movementRef.current.right = false
          break
        case ' ':
          movementRef.current.up = false
          break
        case 'shift':
          movementRef.current.down = false
          break
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!isPointerLockedRef.current) return

      const movementX = event.movementX || 0
      const movementY = event.movementY || 0

      mouseRef.current.x += movementX * rotationSpeed
      mouseRef.current.y += movementY * rotationSpeed

      // Limit vertical rotation
      mouseRef.current.y = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, mouseRef.current.y))
    }

    const handleClick = () => {
      gl.domElement.requestPointerLock()
    }

    const handlePointerLockChange = () => {
      isPointerLockedRef.current = document.pointerLockElement === gl.domElement
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('mousemove', handleMouseMove)
    gl.domElement.addEventListener('click', handleClick)
    document.addEventListener('pointerlockchange', handlePointerLockChange)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('mousemove', handleMouseMove)
      gl.domElement.removeEventListener('click', handleClick)
      document.removeEventListener('pointerlockchange', handlePointerLockChange)
    }
  }, [gl, rotationSpeed])

  // Update camera position and rotation
  useFrame(() => {
    const movement = movementRef.current
    
    // Calculate movement direction based on camera rotation
    const direction = new THREE.Vector3()
    const right = new THREE.Vector3()
    
    camera.getWorldDirection(direction)
    right.crossVectors(direction, camera.up).normalize()
    
    // Create new position vector
    const newPosition = camera.position.clone()
    
    // Forward/backward movement
    if (movement.forward) {
      newPosition.addScaledVector(direction, movementSpeed)
    }
    if (movement.backward) {
      newPosition.addScaledVector(direction, -movementSpeed)
    }
    
    // Left/right movement
    if (movement.left) {
      newPosition.addScaledVector(right, -movementSpeed)
    }
    if (movement.right) {
      newPosition.addScaledVector(right, movementSpeed)
    }
    
    // Up/down movement
    if (movement.up) {
      newPosition.y += movementSpeed
    }
    if (movement.down) {
      newPosition.y -= movementSpeed
    }
    
    // Apply new position
    camera.position.copy(newPosition)
    
    // Apply rotation when pointer is locked
    if (isPointerLockedRef.current) {
      camera.rotation.y = -mouseRef.current.x
      camera.rotation.x = -mouseRef.current.y
    }
  })

  return null
}

export default FlyControls