import { Link } from 'react-router-dom';
import { sectors } from '@/data/sectors';
import { sectorMedia } from '@/data/media';
import { useI18n } from '@/i18n/LanguageProvider';
import { Button } from './ui/button';
import { StatusBadge } from './StatusBadge';

const icons = ['account_balance', 'security', 'medical_services', 'agriculture'];

export function SectorGrid() {
  const { t } = useI18n();
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {sectors.map((s, i) => (
        <article key={s.slug} className="overflow-hidden rounded-lg border border-line bg-card">
          <Link to={`/services/${s.slug}`}>
            <img src={sectorMedia[i]} alt={t(`media.sector.${i}`)} className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </Link>
          <div className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="material-icon text-[1.7rem] text-gold-deep" aria-hidden>{icons[i] ?? 'account_balance'}</span>
              <span className="text-xs text-muted-foreground">0{s.order}</span>
            </div>
            <h3 className="min-h-16 text-xl font-semibold text-primary">{t(`sector.${s.slug}.name`)}</h3>
            <p className="my-4 text-sm leading-relaxed text-muted-foreground">{t(`sector.${s.slug}.summary`)}</p>
            <StatusBadge status="en developpement" />
            <Button asChild variant="link" className="mt-4 w-full justify-between p-0">
              <Link to={`/services/${s.slug}`}>
                {t('common.discover')}
                <span className="material-icon text-[1.1rem]" aria-hidden>arrow_outward</span>
              </Link>
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}
