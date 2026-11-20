import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { PendingField } from '@/components/PendingField';
import { StatusBadge } from '@/components/StatusBadge';
import { ContactChannels } from '@/components/ContactChannels';
import { DocumentsPanel } from '@/components/DocumentsPanel';
import { RequestPanel, type RequestField } from '@/components/RequestPanel';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/i18n/LanguageProvider';
import { useSeo } from '@/hooks/useSeo';
import { sectors, getSector } from '@/data/sectors';
import { locations } from '@/data/locations';
import { media, sectorMedia, sectorGallery, gallery } from '@/data/media';
import { company, fullAddress, telHref } from '@/data/company';
import { values } from '@/data/site';
import { fetchPostBySlug, fetchPosts, isDocumentPost } from '@/lib/wordpress';
function Intro({name,path}:{name:string;path:string}){const {t}=useI18n();useSeo({title:`${t(`${name}.title`)} — ${company.name}`,description:t(`${name}.lead`),path});return <PageHero title={t(`${name}.title`)} lead={t(`${name}.lead`)}/>}
export function About(){const {t}=useI18n();return <><Intro name="about" path="/a-propos"/><section className="container-page section-space grid gap-10 lg:grid-cols-2"><div><SectionHeading title={t('about.presentationTitle')} lead={t('home.aboutText')}/><h2 className="mt-8 text-2xl text-primary">{t('about.missionTitle')}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{t('about.missionText')}</p><PendingField className="mt-8" label={t('about.historyTitle')}/></div><img src={media.equipe} alt={t('media.equipe')} className="aspect-[4/3] w-full rounded-lg object-cover"/></section><section className="bg-muted/50"><div className="container-page section-space"><SectionHeading title={t('home.valuesTitle')}/><div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{values.map(v=><div key={v.id}><span className="material-icon mb-4 block text-[1.6rem] text-gold-deep" aria-hidden>{v.icon}</span><h3 className="text-xl text-primary">{t(`values.${v.id}.title`)}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`values.${v.id}.text`)}</p></div>)}</div></div></section><section className="container-page section-space"><Button asChild variant="outline"><Link to="/galerie">{t('gallery.title')}<span className="material-icon text-[1.1rem]" aria-hidden>arrow_forward</span></Link></Button></section></>}
export function SectorDetail(){const {slug}=useParams();const {t}=useI18n();const s=getSector(slug);useSeo({title:`${s ? t(`sector.${s.slug}.name`) : t('notfound.title')} — ${company.name}`,description:s ? t(`sector.${s.slug}.summary`) : t('notfound.text'),path:`/services/${slug}`});if(!s)return <NotFound/>;const k=`sector.${s.slug}`;return <><PageHero title={t(`${k}.name`)} lead={t(`${k}.tagline`)}/><section className="container-page section-space"><div className="grid items-center gap-10 lg:grid-cols-2"><SectionHeading title={t('sector.presentationTitle')} lead={t(`${k}.presentation`)}/><img src={sectorMedia[s.order-1]} alt={t(`media.sector.${s.order-1}`)} className="aspect-[4/3] w-full rounded-lg object-cover"/></div><h2 className="mb-6 mt-12 text-3xl text-primary">{t('sector.servicesTitle')}</h2><div className="grid gap-5 md:grid-cols-2">{s.services.map((v,i)=><article key={v.name} className="rounded-lg border border-line p-6"><StatusBadge status={v.status}/><h3 className="mt-4 text-2xl text-primary">{t(`${k}.service.${i}.name`)}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{t(`${k}.service.${i}.description`)}</p>{v.cities?.length ? <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold"><span className="material-icon text-[1.1rem] text-gold-deep" aria-hidden>location_on</span>{t('sector.availableIn')} {t(`${k}.service.${i}.cities`)}</p> : null}</article>)}</div>{sectorGallery[s.order-1].length>0 && <div className="mt-10 grid gap-5 sm:grid-cols-3">{sectorGallery[s.order-1].map(src=><img key={src} src={src} alt={t(`media.${Object.entries(media).find(([,u])=>u===src)?.[0]}`)} className="aspect-[4/3] w-full rounded-lg object-cover" loading="lazy"/>)}</div>}<div className="mt-12 grid gap-10 lg:grid-cols-2"><div><SectionHeading title={t('sector.benefitsTitle')}/><ul className="mt-5 list-inside list-disc space-y-3 text-muted-foreground">{s.benefits.map((_,i)=><li key={i}>{t(`${k}.benefit.${i}`)}</li>)}</ul></div><SectionHeading title={t('sector.accessTitle')} lead={t(`${k}.access`)}/></div>{s.notice && <div className="mt-8 border-l-2 border-gold bg-muted p-5"><h3 className="text-xl text-primary">{t('sector.noticeTitle')}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(`${k}.notice`)}</p></div>}<PendingField className="mt-8" label={t('sector.availableWhere')}/><h2 className="my-6 text-2xl text-primary">{t('sector.contactTitle')}</h2><ContactChannels subject={t(`${k}.name`)}/></section></>}
export function Locations() {
  const { t } = useI18n();
  useSeo({ title: `${t('locations.title')} — ${company.name}`, description: t('locations.lead'), path: '/implantations' });
  return <><PageHero title={t('locations.title')} lead={t('locations.lead')} image={media.facade} imageAlt={t('media.butembo')} />
    <section className="container-page section-space">
      <div className="grid items-start gap-8 md:grid-cols-2">
        {locations.map((l, i) => <article id={l.slug} key={l.slug} className="scroll-mt-40 overflow-hidden rounded-lg border border-line">
                    <div className="p-6">
            <StatusBadge status={l.status} />
            <h2 className="mt-4 text-3xl text-primary">{l.city}</h2>
            <p className="my-3 text-sm font-semibold text-gold-deep">{t(`locations.type.${l.type}`)}</p>
            <p className="mb-5 leading-relaxed text-muted-foreground">{t(`location.${l.slug}.presentation`)}</p>
            <div className="space-y-5">
              {l.address ? <div><h3 className="font-semibold">{t('common.address')}</h3><p className="mt-1 text-sm leading-relaxed">{l.address}</p></div> : l.sites.length === 0 ? <PendingField label={t('common.address')} /> : null}
              {l.hours ? <div><h3 className="font-semibold">{t('common.hours')}</h3><p className="mt-1 text-sm">{t(`location.${l.slug}.hours`)}</p></div> : l.withdrawalHours.length === 0 ? <PendingField label={t('common.hours')} /> : null}
              {l.withdrawalHours.length > 0 && <div><h3 className="font-semibold">{t('locations.withdrawalHours')}</h3><dl className="mt-3 space-y-3 text-sm">{l.withdrawalHours.map((h, index) => <div key={h.days}><div className="flex flex-wrap justify-between gap-x-4 gap-y-1"><dt>{t(`locations.days.${h.days}`)}</dt><dd className="font-semibold tabular-nums">{h.open.replace(':', 'h')}–{h.close.replace(':', 'h')}</dd></div>{h.note && <p className="mt-1 text-muted-foreground">{t(`location.${l.slug}.withdrawal.${index}.note`)}</p>}</div>)}</dl></div>}
              {l.sites.length > 0 && <div><h3 className="font-semibold">{t('locations.sitesTitle')}</h3><ul className="mt-3 divide-y divide-line">{l.sites.map((site, index) => <li key={site.name} className="py-4 first:pt-0"><div className="flex flex-wrap items-center justify-between gap-2"><h4 className="text-sm font-semibold">{t(`location.${l.slug}.site.${index}.name`)}</h4><StatusBadge status={site.status} /></div>{site.address ? <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`location.${l.slug}.site.${index}.address`)}</p> : <PendingField className="mt-2" label={t('common.address')} />}</li>)}</ul></div>}
              <PendingField label={t('common.servicesAvailable')} />
              {l.phone ? <a className="block text-primary underline" href={telHref(l.phone)}>{l.phone}</a> : <PendingField label={t('common.phone')} />}
            </div>
          </div>
        </article>)}
      </div>
    </section>
  </>;
}
export function Contact(){const {t}=useI18n();const fields:RequestField[]=['name','email','phone','city','sector','subject','message'].map(name=>({name,label:t(`contact.form.${name}`),type:name==='message'?'textarea':name==='email'?'email':name==='phone'?'tel':'text',required:['name','email','subject','message'].includes(name),...(name==='sector'?{options:sectors.map(s=>t(`sector.${s.slug}.name`))}:{})}));return <><Intro name="contact" path="/contact"/><section className="container-page section-space grid items-start gap-12 lg:grid-cols-2"><div><SectionHeading title={t('contact.infoTitle')}/><h3 className="mt-6 text-xl text-primary">{company.legalName}</h3><p className="my-5 leading-relaxed text-muted-foreground">{fullAddress}</p>{company.phones.map(p=><a key={p.dial} href={telHref(p.dial)} className="my-2 block font-semibold text-primary">{p.display}</a>)}<a href={`mailto:${company.email}`} className="my-4 block break-all text-primary">{company.email}</a><ContactChannels className="mt-6"/><img src={media.enseigne} alt={t('media.enseigne')} className="mt-8 aspect-[4/3] w-full rounded-lg object-cover"/></div><RequestPanel title={t('contact.formTitle')} fields={fields} subject={t('contact.title')} submitLabel={t('contact.submit')} note={t('contact.directNote')} sentTitle={t('contact.sentTitle')} sentText={t('contact.sentText')}/></section></>}
export function Partners(){const {t}=useI18n();const fields:RequestField[]=['org','contact','email','phone','country','type','sector','project'].map(name=>({name,label:t(`partners.form.${name}`),type:name==='project'?'textarea':name==='email'?'email':name==='phone'?'tel':'text',required:['org','contact','email','project'].includes(name),...(name==='sector'?{options:sectors.map(s=>t(`sector.${s.slug}.name`))}:{})}));return <><Intro name="partners" path="/partenariats"/><section className="container-page section-space"><div className="grid gap-8 md:grid-cols-3">{[1,2,3].map(i=><div key={i} className="border-t border-gold pt-5"><h2 className="text-2xl text-primary">{t(`partners.why.${i}.title`)}</h2><p className="mt-4 text-muted-foreground">{t(`partners.why.${i}.text`)}</p></div>)}</div><div className="mt-12 grid items-start gap-10 lg:grid-cols-2"><div><img src={media.rencontre} alt={t('media.rencontre')} className="aspect-[4/3] w-full rounded-lg object-cover"/><h2 className="mt-8 text-2xl text-primary">{t('partners.stepsTitle')}</h2>{[1,2,3,4].map(i=><div key={i} className="mt-6"><h3 className="text-xl text-primary">{i}. {t(`partners.steps.${i}.title`)}</h3><p className="mt-2 text-muted-foreground">{t(`partners.steps.${i}.text`)}</p></div>)}</div><RequestPanel title={t('partners.formTitle')} fields={fields} subject={t('partners.title')} submitLabel={t('partners.submit')} note={t('contact.directNote')} sentTitle={t('partners.submitTitle')} sentText={t('partners.submitText2')}/></div></section></>}
export function Careers(){const {t}=useI18n();const fields:RequestField[]=['name','phone','email','position','letter'].map(name=>({name,label:t(`careers.form.${name}`),type:name==='letter'?'textarea':name==='email'?'email':name==='phone'?'tel':'text',required:['name','email','letter'].includes(name)}));return <><Intro name="careers" path="/carrieres"/><section className="container-page section-space"><div className="grid gap-10 md:grid-cols-2"><SectionHeading title={t('careers.jobsTitle')} lead={t('careers.jobsEmpty')}/><SectionHeading title={t('careers.trainingsTitle')} lead={t('careers.trainingsEmpty')}/></div><div className="mt-12 grid gap-10 lg:grid-cols-2"><img src={media.equipe} alt={t('media.equipe')} className="aspect-[4/3] w-full rounded-lg object-cover"/><RequestPanel title={t('careers.applyTitle')} intro={t('careers.applyText')} fields={fields} subject={t('careers.applyTitle')} submitLabel={t('careers.submit')} note={t('contact.directNote')} sentTitle={t('contact.sentTitle')} sentText={t('contact.sentText')}/></div></section></>}
export function News() {
  const { t } = useI18n();
  const { data = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
    select: (posts) => posts.filter((post) => !isDocumentPost(post)),
  });

  return (
    <>
      <Intro name="news" path="/actualites" />
      <section className="container-page section-space">
        {data.length === 0 ? (
          <SectionHeading title={t("news.empty")} />
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {data.map((post) => (
              <article key={post.id} className="rounded-lg border border-line p-6">
                <p className="text-sm text-muted-foreground">{post.date.slice(0, 10)}</p>
                <h2 className="my-4 text-2xl text-primary">{post.title.replace(/<[^>]*>/g, "")}</h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <Button asChild variant="link" className="mt-4 px-0">
                  <Link to={`/actualites/${post.slug}`}>
                    {t("common.readArticle")}
                    <span className="material-icon text-[1.1rem]" aria-hidden>arrow_forward</span>
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export function NewsArticle() {
  const { slug = "" } = useParams();
  const { t } = useI18n();
  const { data: post, isLoading, isError } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPostBySlug(slug),
    enabled: Boolean(slug),
  });
  const title = post?.title.replace(/<[^>]*>/g, "") ?? t("news.title");

  useSeo({
    title: `${title} — ${company.name}`,
    description: post?.excerpt || t("news.lead"),
    path: `/actualites/${slug}`,
    type: "article",
  });

  if (isLoading) return <PageHero title={t("news.loading")} />;
  if (isError) {
    return (
      <>
        <PageHero title={t("news.loadError")} />
        <section className="container-page py-8">
          <Button asChild variant="outline">
            <Link to="/actualites">{t("nav.news")}</Link>
          </Button>
        </section>
      </>
    );
  }
  if (!post) return <NotFound />;

  return (
    <>
      <PageHero title={title} lead={post.date.slice(0, 10)} />
      <article className="container-page section-space">
        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt=""
            className="mb-10 max-h-[32rem] w-full rounded-lg object-cover"
          />
        )}
        {post.content ? (
          <div
            className="prose max-w-none prose-headings:text-primary prose-a:text-primary prose-p:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : (
          <p className="leading-relaxed text-muted-foreground">{post.excerpt}</p>
        )}
        <Button asChild variant="outline" className="mt-10">
          <Link to="/actualites">{t("nav.news")}</Link>
        </Button>
      </article>
    </>
  );
}

export function Documents(){const {t}=useI18n();return <><Intro name="documents" path="/documents"/><section className="container-page section-space"><DocumentsPanel/><p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">{t('documents.note')}</p></section></>}
export function Gallery(){const {t}=useI18n();useSeo({title:`${t('gallery.title')} — ${company.name}`,description:t('gallery.lead'),path:'/galerie'});return <><PageHero title={t('gallery.title')} lead={t('gallery.lead')}/><section className="container-page section-space grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{gallery.map(p=><figure key={p.id}><a href={p.url} target="_blank" rel="noopener noreferrer"><img src={p.url} alt={t(p.alt)} className="aspect-[4/3] w-full rounded-lg bg-muted object-contain" loading="lazy"/></a><figcaption className="mt-3 text-sm text-muted-foreground">{t(p.alt)}</figcaption></figure>)}</section></>}
export function Legal({privacy=false}:{privacy?:boolean}){const {t}=useI18n();const prefix=privacy?'privacy':'legal';const sections=privacy?['purpose','rights','sharing','cookies']:['editor','hosting','properties','data','liability','contact'];useSeo({title:`${t(`${prefix}.title`)} — ${company.name}`,description:t(privacy?'privacy.intro':'legal.editorText'),path:privacy?'/confidentialite':'/mentions-legales'});return <><PageHero title={t(`${prefix}.title`)}/><section className="container-page section-space"><div className="max-w-3xl">{privacy&&<p className="mb-8 leading-relaxed text-muted-foreground">{t('privacy.directText')}</p>}{sections.map(s=><div key={s} className="mb-8"><h2 className="text-2xl text-primary">{t(`${prefix}.${s}Title`)}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{t(`${prefix}.${s}Text`)}</p></div>)}<ContactChannels/></div></section></>}
export function NotFound(){const {t}=useI18n();useSeo({title:`${t('notfound.title')} — ${company.name}`,description:t('notfound.text')});return <><PageHero title={t('notfound.title')} lead={t('notfound.text')}/><section className="container-page py-16"><Button asChild><Link to="/">{t('notfound.cta')}</Link></Button></section></>}
