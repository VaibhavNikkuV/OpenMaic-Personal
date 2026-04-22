import { cn } from '@/lib/utils';
import { BRAND_LOGO, BRAND_NAME } from '@/lib/branding';

type Size = 'sm' | 'md' | 'lg';

const ICON_SIZE: Record<Size, string> = {
  sm: 'h-6 w-6',
  md: 'h-9 w-9',
  lg: 'h-12 w-12 md:h-14 md:w-14',
};

const WORDMARK_SIZE: Record<Size, string> = {
  sm: 'text-sm font-semibold',
  md: 'text-lg font-semibold',
  lg: 'text-2xl md:text-3xl font-semibold tracking-tight',
};

const GAP: Record<Size, string> = {
  sm: 'gap-2',
  md: 'gap-2.5',
  lg: 'gap-3',
};

export function Logo({
  size = 'md',
  showWordmark = true,
  className,
}: {
  size?: Size;
  showWordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={cn('inline-flex items-center', GAP[size], className)}>
      <img
        src={BRAND_LOGO}
        alt={BRAND_NAME}
        className={cn(ICON_SIZE[size], 'rounded-md object-contain')}
      />
      {showWordmark && <span className={WORDMARK_SIZE[size]}>{BRAND_NAME}</span>}
    </span>
  );
}
