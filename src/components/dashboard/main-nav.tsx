import Link from "next/link";
import { cn } from "@/lib/utils";

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("xl:flex hidden items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors text-white hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/contracts"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
      >
        Create Track
      </Link>
      <Link
        href="/music/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
      >
        Your Tracks
      </Link>
      <Link
        href="/settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
      >
        Owner Settings
      </Link>
      <Link
        href="/artist-settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
      >
        Artist Settings
      </Link>
    </nav>
  );
}
