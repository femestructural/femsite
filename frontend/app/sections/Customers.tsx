// import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server";
import { sanityFetch } from "@/sanity/lib/live";
import { allCustomers } from "@/sanity/lib/queries";
import { CarruselCustomers } from "../components/CarruselPartners";

export async function CustomersSection() {

    const translate = await getTranslations('CustomerSection');

    const { data: customers_list } = await sanityFetch({ query: allCustomers })

    return (
        <section className='flex flex-col bg-white' >
            <div className='flex flex-col items-center px-5 py-40' >
                <h6 className='text-center text-[2.8rem] lg:text-6xl xl:text-7xl uppercase text-shadow-lg text-[var(--primary)] mb-10'>
                    {translate('title')}
                </h6>
                <p className='text-center text-[var(--primary)] xl:text-center lg:text-xl xl:text-2xl max-w-[900px] mb-5' >
                    {translate('subtitle')}
                </p>

                {/* Carrusel de Partners */}
                <CarruselCustomers partners={customers_list} />


                <p className='text-zinc-500 text-center text-md max-w-[900px] pb-10' >
                    {translate('footerTextOne')} <br /> {translate('footerTextTwo')}
                </p>


            </div>

        </section>
    )
}