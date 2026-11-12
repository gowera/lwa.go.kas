import logoAsset from "@/assets/logo.png.asset.json";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Medallion size in pixels. */
  size?: number;
  /** `onDark` puts the medallion on a light chip so it stays readable on navy. */
  onDark?: boolean;
  showText?: boolean;
  showSlogan?: boolean;
  textClassName?: string;
};

export function Logo({
  className,
  size = 46,
  onDark = false,
  showText = true,
  showSlogan = true,
  textClassName,
}: LogoProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center overflow-hidden rounded-full",
          onDark ? "bg-white p-1 shadow-soft" : "",
        )}
        style={{ width: size, height: size }}
      >
        <img
          src={logoAsset.url}
          alt="Logo officiel LWA.GO.KAS"
          width={size}
          height={size}
          className="h-full w-full object-contain"
          loading="eager"
          decoding="async"
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className={cn("font-display text-[1.05rem] font-semibold tracking-[0.06em]", textClassName)}>
            LWA.GO.KAS
          </span>
          {showSlogan && (
            <span className={cn("mt-1 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-muted-foreground")}>
              Professionnalisme, engagement
            </span>
          )}
        </span>
      )}
    </span>
  );
}

export default Logo;
