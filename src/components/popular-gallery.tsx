'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

interface PopularRecipe {
  id: string;
  title: string;
  description: string;
  author: string;
  cuisine: string;
  image: string;
}

const popularRecipes: PopularRecipe[] = [
  {
    id: '1',
    title: 'Slow-Roasted Garlic Chicken',
    description:
      'A weeknight staple that turns into a showstopper — crisp skin, tender meat, and a pan sauce worth mopping up with bread.',
    author: 'Maria Chen',
    cuisine: 'Comfort Food',
    image: '/recipes/chicken.jpg',
  },
  {
    id: '2',
    title: 'Miso Butter Ramen',
    description:
      'Rich, umami-packed broth finished with a swirl of miso butter. Ready in 30 minutes, tastes like it simmered all day.',
    author: 'Kenji Sato',
    cuisine: 'Japanese',
    image: '/recipes/ramen.jpg',
  },
  {
    id: '3',
    title: 'Charred Corn & Black Bean Tacos',
    description:
      'Smoky, bright, and loaded with texture — a five-ingredient filling that proves simple can still be exciting.',
    author: 'Diego Ramirez',
    cuisine: 'Mexican',
    image: '/recipes/tacos.jpg',
  },
];

export function PopularGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  return (
    <section className="grid min-h-[600px] gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col justify-center gap-6 order-2 lg:order-1">
        <div className="space-y-2">
          <span className="text-sm font-medium text-brand">
            {popularRecipes[current]?.cuisine}
          </span>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            {popularRecipes[current]?.title}
          </h2>
        </div>

        <p className="text-muted-foreground text-lg leading-relaxed">
          {popularRecipes[current]?.description}
        </p>

        <p className="text-sm font-medium text-foreground">
          Recipe by {popularRecipes[current]?.author}
        </p>

        <div className="flex items-center gap-4 pt-4">
          <Button variant="outline" size="icon" onClick={scrollPrev} aria-label="Previous recipe">
            <ArrowLeft className="size-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={scrollNext} aria-label="Next recipe">
            <ArrowRight className="size-4" />
          </Button>

          <div className="flex gap-1.5 ml-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? 'w-8 bg-brand' : 'w-1.5 bg-muted'
                }`}
                aria-label={`Go to recipe ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {popularRecipes.map((recipe) => (
              <CarouselItem key={recipe.id}>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}