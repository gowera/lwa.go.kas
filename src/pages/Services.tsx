import { PageHero } from '@/components/PageHero';
import { SectorGrid } from '@/components/SectorGrid';
import { useI18n } from '@/i18n/LanguageProvider';
import { useSeo } from '@/hooks/useSeo';
import { ContactChannels } from '@/components/ContactChannels';
export default function Services(){const {t}=useI18n();useSeo({title:`${t('services.title')} — LWA.GO.KAS`,description:t('services.lead'),path:'/services'});return <><PageHero title={t('services.title')} lead={t('services.lead')}/><section className="container-page section-space"><SectorGrid/><h2 className="mt-12 text-2xl text-primary">{t('services.contactTitle')}</h2><p className="my-4 text-muted-foreground">{t('services.contactText')}</p><ContactChannels/></section></>}
