'use client'

import { useEffect, useRef } from "react"

export default function ParticleBg () {
    const canvasRef = useRef(null)
    
    

    class Particle {
        x: number
        y:number
        size: number
        speedX:number
        speedY:number
        
        constructor(x:number, y:number) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            
        }

        update(canvasRef) {
            this.x += this.speedX
            this.y += this.speedY
            if (this.size > 0.2)  {
              this.size -= 0.05
            } else {
              this.size = Math.random() * 5 + 1
              this.x = Math.random() * canvasRef.current.width
              this.y = Math.random() * canvasRef.current.height
            }
            
        }

        draw(ctx) {
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, 0.8)`
            ctx.closePath()
            ctx.fill()

        }
    }

    

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx= canvas.getContext('2d')
        let particlesArray = []
        const numberOfParticles = 100
        const canvasWidth = canvas.width = window.innerWidth;
        const canvasHeight = canvas.height = window.innerHeight;
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          };
      
        const createParticles = () => {
            for (let i = 0; i < numberOfParticles; i++) {
              const x = Math.random() * canvasWidth;
              const y = Math.random() * canvasHeight;
              
      
              particlesArray.push(new Particle(x, y));
            }
          };
      
        const animateParticles = (canvasRef) => {
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
          particlesArray.forEach((particle) => {
            particle.update(canvasRef);
            particle.draw(ctx);
          });
    
          requestAnimationFrame(animateParticles);
        };

          const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
          }
          
          window.addEventListener('resize', handleResize);
          handleResize()
          createParticles();
          animateParticles(canvas);
      
          return () => {
            window.removeEventListener('resize', resizeCanvas);
          };
    }, [])

    return (
        <canvas ref={canvasRef}>

        </canvas>
    )
}