import directus from '@/lib/directus';
import { getPartnerLogos } from '../lib/utils';
import { sans } from '../ui/fonts';
import Image from 'next/image';

export default async function VguPartners() {
  const logos = await getPartnerLogos('4867b831-42f6-4fd8-b170-7feb7c294016');
  return (
    <div className={`${sans.className} mb-20`}>


      <div className="mb-16">
        <h1 className="text-center text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-orange md:text-5xl lg:text-6xl">
          VGU{' '}
          <mark className="rounded bg-vgu-orange px-2 py-0 text-white">
            PARTNERS
          </mark>{' '}
        </h1>
      </div>

      <div
        x-data="{}"
        x-init="$nextTick(() => {
            let ul = $refs.logos;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
        className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >

        <ul

          x-ref="logos"
          className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        >
          {logos.images.map((logo: any) => {
            return (
              <li>
                <Image 
                  height={300} 
                  width={300} 
                  className='w-170 h-150' 
                  src={`${directus.url}assets/${logo.directus_files_id}`} 
                  alt="VGU partners" />
              </li>
            )
          })}
        </ul>


        <ul
          x-ref="logos"
          className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        >
          {logos.images.map((logo: any) => {
            return (
              <li>
                <Image 
                  height={300} 
                  width={300} 
                  className='w-170 h-150' 
                  src={`${directus.url}assets/${logo.directus_files_id}`} 
                  alt="VGU partners" />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
