import type { Status } from '@/data/sectors';
import { useI18n } from '@/i18n/LanguageProvider';
import { cn } from '@/lib/utils';
export function StatusBadge({status}: {status: Status}) {
 const {t} = useI18n();
 if (status === 'en developpement') return null;
 const key = status === 'actif' ? 'actif' : 'indisponible';
 return <span className={cn('inline-flex items-center gap-2 rounded-sm border px-2.5 py-1 text-xs font-semibold', status === 'actif' ? 'border-primary/20 bg-navy-100 text-primary' : 'border-gold/30 bg-secondary/10 text-gold-deep')}><span className="h-1.5 w-1.5 rounded-full bg-current" />{t(`common.status.${key}`)}</span>;
}
