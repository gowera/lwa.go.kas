import logoAsset from "@/assets/embleme.webp.asset.json";
import { company } from "@/data/company";
import { useI18n } from "@/i18n/LanguageProvider";
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
  const { t } = useI18n();
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center overflow-hidden rounded-full",
          onDark ? "bg-background p-1 shadow-soft" : "",
        )}
        style={{ width: size, height: size }}
      >
        <img
          src={logoAsset.url}
          alt={t("media.logo")}
          width={size}
          height={size}
          className="h-full w-full object-contain"
          loading="eager"
          decoding="async"
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className={cn("font-display text-[0.98rem] font-bold tracking-normal", textClassName)}>
            {company.name}
          </span>
          {showSlogan && (
            <span className={cn("mt-1 text-[0.56rem] font-medium uppercase tracking-normal text-muted-foreground")}>
              {t("brand.shortSlogan")}
            </span>
          )}
        </span>
      )}
    </span>
  );
}

export default Logo;
