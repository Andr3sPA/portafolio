"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Esta interfaz puede ser movida o importada si es usada en múltiples lugares,
// o definida en el componente que la usa si es específica.
// Por ahora, la dejamos aquí si DynamicCarousel siempre espera items con 'id'.
// Si no, se puede hacer más genérica aún.
export interface CarouselItemWithId {
  id: string | number;
  [key: string]: any; // Permite otras propiedades
}

interface DynamicCarouselProps<T extends CarouselItemWithId> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  carouselClassName?: string;
  contentClassName?: string;
  itemClassName?: string;
}

export function DynamicCarousel<T extends CarouselItemWithId>({
  items,
  renderItem,
  carouselClassName,
  contentClassName,
  itemClassName,
}: DynamicCarouselProps<T>) {
  return (
    <Carousel className={carouselClassName}>
      <CarouselContent className={contentClassName}>
        {items.map((item, index) => (
          <CarouselItem key={item.id} className={itemClassName}> {/* Usar siempre item.id */}
            {renderItem(item, index)}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
