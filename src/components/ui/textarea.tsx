import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        " resize-none placeholder:text-muted-foreground border      flex field-sizing-content min-h-35 w-full rounded-md   bg-primary/2 px-3 py-3 text-base  transition-[color,box-shadow]  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
