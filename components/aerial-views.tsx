'use client'

import Image from "next/image"

export default function AerialViews() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-block border-b border-t border-primary/30 px-6 py-2">
            <span className="text-sm uppercase tracking-widest text-primary">Aerial Perspectives</span>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-light tracking-tight sm:text-5xl">
            Breathtaking Views
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Experience the grandeur of this exceptional waterfront estate from above
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/aerial-view-1.png"
              alt="Aerial view of the estate"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/aerial-view-2.png"
              alt="Aerial view of the waterfront"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/aerial-view-3.png"
              alt="Aerial view of the property grounds"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/aerial-view-4.png"
              alt="Aerial view of the surrounding area"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}