import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner"
export function DialogDemo() {
  const [noButtonPosition, setNoButtonPosition] = React.useState({ x: 0, y: 0 });

  const handleNoButtonHover = () => {
    const newX = Math.random() * 100 - 50;
    const newY = Math.random() * 50 - 25;
    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* Quitamos variant="outline" y aplicamos colores directamente */}
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
          Why me?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Why me?</DialogTitle>
          <DialogDescription>
            Passionate backend developer skilled in scalable solutions, driven by continuous learning and tackling technical challenges with a security-first mindset.
          </DialogDescription>
        </DialogHeader>
        
          <div className="items-center gap-4 py-4">
              Do you still want to hire me?
          </div>

        <DialogFooter>
        <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={() =>
        toast("Thanks for your interest! :)")
      }>
              Yes
            </Button>
          </DialogClose>
            <Button 
              type="button" 
              variant="secondary"
              onMouseEnter={handleNoButtonHover}
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              No
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
