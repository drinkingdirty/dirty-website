'use client'

import Image from 'next/image'
import { instagramImages } from '@/data/instagram'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal'
import { useState } from 'react'

function GridImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false)
  return (
    <div className="group relative aspect-square overflow-hidden bg-blush">
      {errored ? (
        <div className="absolute inset-0 flex items-center justify-center bg-blush">
          <span className="font-display-italic text-2xl text-blush-dark">dirty.</span>
        </div>
      ) : (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 33vw, 16vw"
            onError={() => setErrored(true)}
          />
          <div className="absolute inset-0 bg-coral/0 group-hover:bg-coral/15 transition-colors duration-300 flex items-center justify-center">
            <span className="text-cream text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
          </div>
        </>
      )}
    </div>
  )
}

export default function InstagramGrid() {
  return (
    <section className="bg-white section-padding" aria-label="Instagram Feed">
      <div className="container-default">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <p className="text-label text-text-secondary mb-3">Follow Along</p>
            <a href="https://instagram.com/drinking.dirty" target="_blank" rel="noopener noreferrer" className="font-display-italic text-display-sm text-coral hover:text-terracotta transition-colors duration-200">
              @drinking.dirty
            </a>
          </div>
        </ScrollReveal>
        <StaggerGroup className="grid grid-cols-3 gap-0.5 overflow-hidden rounded-xl md:grid-cols-6 md:gap-1">
          {instagramImages.map((img) => (
            <StaggerItem key={img.id}>
              <a href="https://instagram.com/drinking.dirty" target="_blank" rel="noopener noreferrer" aria-label={`View on Instagram: ${img.alt}`}>
                <GridImage src={img.src} alt={img.alt} />
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <ScrollReveal className="mt-8 flex justify-center">
          <a href="https://instagram.com/drinking.dirty" target="_blank" rel="noopener noreferrer" className="btn-text-arrow">
            Follow us on Instagram
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
